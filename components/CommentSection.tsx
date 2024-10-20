// components/CommentSection.tsx
import React, { useState, useEffect } from "react";

interface Comment {
  id: number;
  text: string;
  user: string;
  createdDate: string;
}

interface CommentSectionProps {
  riskId: string | string[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ riskId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    // Here you would normally fetch comments related to the riskId
    console.log("Fetching comments for riskId:", riskId);

    // Mock comments data for demonstration
    const fetchedComments: Comment[] = [
      { id: 1, text: "This is a critical risk!", user: "Alice", createdDate: "2024-10-20" },
      { id: 2, text: "We should address this immediately.", user: "Bob", createdDate: "2024-10-21" },
    ];
    setComments(fetchedComments);
  }, [riskId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        text: newComment,
        user: "Current User", // Replace with the actual user logic
        createdDate: new Date().toISOString().split("T")[0], // Today's date
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
      setNewComment(""); // Clear input field after adding comment
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <div className="mb-4">
        <textarea
          value={newComment}
          onChange={handleInputChange}
          className="w-full h-20 border rounded-md px-3 py-2"
          placeholder="Enter your comment..."
        />
      </div>
      <button
        onClick={handleAddComment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add Comment
      </button>

      <div className="mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 py-2">
            <p className="text-gray-700">{comment.text}</p>
            <span className="text-sm text-gray-500">
              {comment.user} - {comment.createdDate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
