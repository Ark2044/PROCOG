import Link from "next/link";
import {
  FaUser,
  FaUsers,
  FaBell,
  FaComments,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="space-y-12 bg-gradient-to-b from-gray-50 to-white min-h-screen py-10">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight text-gray-900">
          Welcome to Risk Management Platform
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Collaborate, analyze, and mitigate risks efficiently
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600 flex items-center">
            <FaUser className="mr-2 text-2xl" />
            For Publishers
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li className="flex items-center">
              <FaUsers className="mr-2 text-gray-500" />
              Create and manage risks
            </li>
            <li className="flex items-center">
              <FaBell className="mr-2 text-gray-500" />
              Set reminders for important deadlines
            </li>
            <li className="flex items-center">
              <FaComments className="mr-2 text-gray-500" />
              Collaborate with team members
            </li>
          </ul>
          <Link
            href="/dashboard"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-3xl font-semibold mb-4 text-green-600 flex items-center">
            <FaUsers className="mr-2 text-2xl" />
            For Subscribers
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li className="flex items-center">
              <FaChartLine className="mr-2 text-gray-500" />
              View and follow risks
            </li>
            <li className="flex items-center">
              <FaComments className="mr-2 text-gray-500" />
              Participate in discussions
            </li>
            <li className="flex items-center">
              <FaBell className="mr-2 text-gray-500" />
              Receive updates on followed risks
            </li>
          </ul>
          <Link
            href="/risks"
            className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-200"
          >
            Browse Risks
          </Link>
        </div>
      </section>

      {/* Uncomment if needed */}
      {/* <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">
          Recent Activity
        </h2>
      </section> */}
    </div>
  );
}
