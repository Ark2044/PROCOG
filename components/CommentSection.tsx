"use client";

import { useEffect } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  riskId: number;
}

export default function CommentSection({ riskId }: CommentSectionProps) {
  useEffect(() => {
    console.log(`Fetching comments for risk ID: ${riskId}`);
    // In a real application, you would fetch comments for this specific risk here
  }, [riskId]);

  // Mock data - replace with actual data fetching logic
  const comments: Comment[] = [
    {
      id: 1,
      author: "John Doe",
      content: "This is a critical risk we need to address ASAP.",
      timestamp: "2023-05-21 10:30",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I suggest we form a task force to tackle this issue.",
      timestamp: "2023-05-21 11:45",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Comments for Risk #{riskId}
      </h2>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b pb-4 last:border-none last:pb-0"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2">
              <span className="font-semibold text-lg text-gray-900">
                {comment.author}
              </span>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                {comment.timestamp}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Add comment form */}
      <form className="mt-6 space-y-4">
        <textarea
          className="w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
          rows={4}
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}
