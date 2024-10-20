// pages/risks/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import CommentSection from "@/components/CommentSection"; // Adjust the import as needed

export default function RiskDetail() {
  const params = useParams();
  const id = params.id;

  // Mock data - replace with actual data fetching logic
  const initialRisk = {
    id,
    title: "Server Outage Risk",
    description: "Potential risk of server downtime affecting main services.",
    status: "Active",
    createdDate: "2023-05-15",
    updatedDate: "2023-05-20",
    details:
      "Our main servers have been experiencing intermittent downtime due to maintenance issues...",
  };

  // State to manage risk data and edit mode
  const [risk, setRisk] = useState(initialRisk);
  const [isEditing, setIsEditing] = useState(false);

  // Form input handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRisk((prevRisk) => ({
      ...prevRisk,
      [name]: value,
    }));
  };

  // Save edited data (mock save, you would replace this with your update logic)
  const handleSave = () => {
    // Here you would normally send the updated risk to your backend
    console.log("Updated risk:", risk);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Link href="/risks" className="text-blue-600 hover:underline">
        &larr; Back to Risks
      </Link>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {isEditing ? "Edit Risk" : risk.title}
        </h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {isEditing ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                value={risk.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                name="description"
                value={risk.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Details</label>
              <textarea
                name="details"
                value={risk.details}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-4">{risk.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span
                className={`px-2 py-1 rounded ${
                  risk.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {risk.status}
              </span>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                <span>Created: {risk.createdDate}</span>
                <span>Updated: {risk.updatedDate}</span>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <p className="text-gray-700">{risk.details}</p>
          </>
        )}
      </div>

      {/* Comments Section */}
      <CommentSection riskId={id} />
    </div>
  );
}
