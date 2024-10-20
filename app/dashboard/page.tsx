
import Link from "next/link";
import RiskCard from "../../components/RiskCard";
import { risks } from "../../data/riskData"; // Import risks from a data file

export default function Dashboard() {
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
          <Link key={risk.id} href={`/risks/${risk.id}`}>
            <RiskCard {...risk} />
          </Link>
        ))}
      </div>
    </div>
  );
}
