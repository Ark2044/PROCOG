// RiskCard.tsx
import React from "react";

export type RiskStatus = "Active" | "Mitigated" | "Monitoring";

interface RiskCardProps {
  id: number;
  title: string;
  description: string;
  status: RiskStatus;
  createdDate: string;
  updatedDate: string;
  icon: React.ReactNode; // Add this line to include the icon prop
}

const RiskCard: React.FC<RiskCardProps> = ({
  title,
  description,
  status,
  createdDate,
  updatedDate,
  icon, // Destructure the icon prop
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 text-sm">
        Status: <span className="font-medium">{status}</span>
      </p>
      <p className="text-gray-500 text-sm">
        Created: {createdDate} | Updated: {updatedDate}
      </p>
    </div>
  );
};

export default RiskCard;
