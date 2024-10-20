// Dashboard.tsx
import React from "react";
import Link from "next/link";
import RiskCard, { RiskStatus } from "../../components/RiskCard"; // Import RiskStatus
import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaChartLine,
  FaCog,
  FaUserShield,
} from "react-icons/fa";

export default function Dashboard() {
  // Mock data - replace with actual data fetching logic
  const risks = [
    {
      id: 1,
      title: "Server Outage Risk",
      description:
        "Potential risk of server downtime due to maintenance issues.",
      status: "Active" as RiskStatus,
      createdDate: "2023-05-15",
      updatedDate: "2023-05-20",
      icon: <FaExclamationTriangle className="w-6 h-6 text-yellow-600" />, // Adding an icon
    },
    {
      id: 2,
      title: "Data Breach Risk",
      description:
        "Potential risk of unauthorized data access and loss of sensitive information.",
      status: "Mitigated" as RiskStatus,
      createdDate: "2023-05-10",
      updatedDate: "2023-05-18",
      icon: <FaShieldAlt className="w-6 h-6 text-green-600" />,
    },
    {
      id: 3,
      title: "Compliance Risk",
      description:
        "Risk of failing to comply with regulatory standards and requirements.",
      status: "Active" as RiskStatus,
      createdDate: "2023-06-01",
      updatedDate: "2023-06-10",
      icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 4,
      title: "Supply Chain Disruption",
      description:
        "Risk of delays in the supply chain affecting product delivery.",
      status: "Monitoring" as RiskStatus,
      createdDate: "2023-07-15",
      updatedDate: "2023-07-20",
      icon: <FaCog className="w-6 h-6 text-gray-600" />,
    },
    {
      id: 5,
      title: "Employee Turnover Risk",
      description:
        "Potential risk of losing key personnel impacting project continuity.",
      status: "Active" as RiskStatus,
      createdDate: "2023-08-05",
      updatedDate: "2023-08-15",
      icon: <FaUserShield className="w-6 h-6 text-purple-600" />,
    },
    {
      id: 6,
      title: "Cybersecurity Threats",
      description: "Ongoing threats from cyber-attacks targeting company data.",
      status: "Active" as RiskStatus,
      createdDate: "2023-09-10",
      updatedDate: "2023-09-15",
      icon: <FaShieldAlt className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Your Risks</h2>
        <Link
          href="/risks/create"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
        >
          Create New Risk
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {risks.map((risk) => (
          <RiskCard key={risk.id} {...risk} icon={risk.icon} />
        ))}
      </div>
    </div>
  );
}
