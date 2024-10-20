import React from "react";
import Link from "next/link";
import CommentSection from "@/components/CommentSection";
import ReminderForm from "@/components/ReminderForm";

export default function RiskDetail({ params }: { params: { id: string } }) {
  // Mock data - replace with actual data fetching logic
  const risk = {
    id: parseInt(params.id),
    title: "Server Outage Risk",
    description:
      "Potential risk of server downtime affecting our main services.",
    status: "Active",
    createdDate: "2023-05-15",
    updatedDate: "2023-05-20",
    details: "Our main servers have been experiencing intermittent downtime...",
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <Link href="/risks" className="text-blue-600 hover:underline">
        &larr; Back to Risks
      </Link>
      <h1 className="text-3xl font-bold">{risk.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
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
      </div>
      <ReminderForm riskId={risk.id} />
      <CommentSection riskId={risk.id} />
    </div>
  );
}
