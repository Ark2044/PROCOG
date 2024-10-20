import { FaExclamationTriangle, FaChartLine, FaCog } from "react-icons/fa";
import { RiskStatus } from "../components/RiskCard"; // Import the RiskStatus type if necessary

// Define your risk data
export const risks = [
    {
        id: 1,
        title: "Server Outage Risk",
        description: "Potential risk of server downtime due to maintenance issues.",
        status: "Active" as RiskStatus,
        createdDate: "2023-05-15",
        updatedDate: "2023-05-20",
        icon: <FaExclamationTriangle className="w-6 h-6 text-yellow-600" />,
    },
    {
        id: 3,
        title: "Compliance Risk",
        description: "Risk of failing to comply with regulatory standards.",
        status: "Active" as RiskStatus,
        createdDate: "2023-06-01",
        updatedDate: "2023-06-10",
        icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    },
    {
        id: 4,
        title: "Supply Chain Disruption",
        description: "Risk of delays in the supply chain affecting product delivery.",
        status: "Monitoring" as RiskStatus,
        createdDate: "2023-07-15",
        updatedDate: "2023-07-20",
        icon: <FaCog className="w-6 h-6 text-gray-600" />,
    },
];
