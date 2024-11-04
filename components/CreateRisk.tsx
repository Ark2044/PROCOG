import React, { useState, ChangeEvent, FormEvent } from "react";
import { databases, account, storage } from "@/models/client/config"; // Import Appwrite configuration
import { riskCollection, db, riskAttachmentBucket } from "@/models/name"; // Import risk collection name and database ID

const CreateRisk: React.FC<{ onRiskCreated: () => void }> = ({
  onRiskCreated,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [attachmentId, setAttachmentId] = useState<string | undefined>(
    undefined
  );
  const [impact, setImpact] = useState<"low" | "medium" | "high">("low");
  const [probability, setProbability] = useState<number>(50);
  const [action, setAction] = useState<
    "mitigate" | "accept" | "transfer" | "avoid"
  >("mitigate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Get the current user ID
      const user = await account.get();
      const authorId = user.$id;

      // Upload file if provided
      if (file) {
        const fileResponse = await storage.createFile(riskAttachmentBucket,"unique()", file);
        setAttachmentId(fileResponse.$id); // Set the file ID
      }

      // Create the risk document
      await databases.createDocument(db, riskCollection, "unique()", {
        title,
        content,
        authorId,
        tags,
        attachmentId,
        impact,
        probability: probability.toString(),
        action,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      });

      onRiskCreated(); // Refresh the risk list

      // Reset form fields
      setTitle("");
      setContent("");
      setTags([]);
      setFile(null);
      setAttachmentId(undefined);
      setImpact("low");
      setProbability(3);
      setAction("mitigate");
    } catch (err) {
      setError("Failed to create risk");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-xl font-bold mb-4">Create Risk</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="content" className="block">
          Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="tags" className="block">
          Tags:
        </label>
        <input
          type="text"
          id="tags"
          value={tags.join(",")}
          onChange={(e) => setTags(e.target.value.split(","))}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="file" className="block">
          Attachment (optional):
        </label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="impact" className="block">
          Impact:
        </label>
        <select
          id="impact"
          value={impact}
          onChange={(e) =>
            setImpact(e.target.value as "low" | "medium" | "high")
          }
          className="border p-2 w-full"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label htmlFor="probability" className="block">
          Probability (0-5):
        </label>
        <input
          type="range"
          id="probability"
          min="0"
          max="5"
          value={probability}
          onChange={(e) => setProbability(Number(e.target.value))}
          className="w-full"
        />
        <p>Probability: {probability * 20}%</p>
      </div>
      <div>
        <label htmlFor="action" className="block">
          Action:
        </label>
        <select
          id="action"
          value={action}
          onChange={(e) =>
            setAction(
              e.target.value as "mitigate" | "accept" | "transfer" | "avoid"
            )
          }
          className="border p-2 w-full"
        >
          <option value="mitigate">Mitigate</option>
          <option value="accept">Accept</option>
          <option value="transfer">Transfer</option>
          <option value="avoid">Avoid</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Risk"}
      </button>
    </form>
  );
};

export default CreateRisk;
