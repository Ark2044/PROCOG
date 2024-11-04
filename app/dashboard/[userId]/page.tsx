"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuthStore } from "@/store/Auth";
import { Risk } from "@/types/Risk";
import RiskList from "@/components/RiskList";
import CreateRisk from "@/components/CreateRisk";
import { databases } from "@/models/client/config";
import { riskCollection, db } from "@/models/name";

const Dashboard = () => {
  const { userId } = useParams();
  const userIdString = Array.isArray(userId) ? userId[0] : userId;
  const router = useRouter();
  const { user, loading, error, verifySession, session } = useAuthStore();
  const [isCreateRiskOpen, setCreateRiskOpen] = useState(false);
  const [risks, setRisks] = useState<Risk[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Calculate impact and action counts
  const [impactCount, setImpactCount] = useState({
    low: 0,
    medium: 0,
    high: 0,
  });
  const [actionCount, setActionCount] = useState({
    mitigate: 0,
    accept: 0,
    transfer: 0,
    avoid: 0,
  });

  useEffect(() => {
    if (!session) {
      verifySession();
    }
  }, [session, verifySession]);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/login");
    }
  }, [session, loading, router]);

  const fetchRisks = async () => {
    setFetchError(null);
    try {
      const response = await databases.listDocuments(db, riskCollection);
      const fetchedRisks: Risk[] = response.documents.map((doc) => ({
        $id: doc.$id,
        title: doc.title,
        content: doc.content,
        authorId: doc.authorId,
        tags: doc.tags || [],
        attachmentId: doc.attachmentId,
        impact: doc.impact,
        probability: doc.probability,
        action: doc.action,
        created: doc.created,
        updated: doc.updated,
      }));
      setRisks(fetchedRisks);

      // Calculate counts
      const impactCounts = fetchedRisks.reduce(
        (acc, risk) => {
          acc[risk.impact] = (acc[risk.impact] || 0) + 1;
          return acc;
        },
        { low: 0, medium: 0, high: 0 }
      );
      setImpactCount(impactCounts);

      const actionCounts = fetchedRisks.reduce(
        (acc, risk) => {
          acc[risk.action] = (acc[risk.action] || 0) + 1;
          return acc;
        },
        { mitigate: 0, accept: 0, transfer: 0, avoid: 0 }
      );
      setActionCount(actionCounts);
    } catch (err) {
      setFetchError("Failed to fetch risks");
      console.error(err);
    }
  };

  useEffect(() => {
    if (session) {
      fetchRisks();
    }
  }, [session]);

  const handleRiskCreated = () => {
    setCreateRiskOpen(false);
    fetchRisks();
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600">Loading your dashboard...</p>
      </div>
    );

  if (error || fetchError)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-red-500">{error?.message || fetchError}</p>
      </div>
    );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* User Info */}
          <div className="p-4 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-gray-500">ID: {userIdString}</p>
          </div>

          {/* Quick Stats */}
          <div className="p-4 space-y-4 overflow-y-auto">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase">
                Overview
              </h3>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Total Risks</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {risks.length}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase">
                Impact Distribution
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">High</span>
                  <span className="text-sm font-medium text-red-600">
                    {impactCount.high}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Medium</span>
                  <span className="text-sm font-medium text-yellow-600">
                    {impactCount.medium}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Low</span>
                  <span className="text-sm font-medium text-green-600">
                    {impactCount.low}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-8">
          {/* Top Action Bar */}
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Risk Dashboard
            </h2>
            <button
              onClick={() => setCreateRiskOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create Risk
            </button>
          </div>

          {/* Action Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Mitigated</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {actionCount.mitigate}
                </p>
                <p className="ml-2 text-sm text-gray-500">risks</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Accepted</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {actionCount.accept}
                </p>
                <p className="ml-2 text-sm text-gray-500">risks</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Transferred</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {actionCount.transfer}
                </p>
                <p className="ml-2 text-sm text-gray-500">risks</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Avoided</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {actionCount.avoid}
                </p>
                <p className="ml-2 text-sm text-gray-500">risks</p>
              </div>
            </div>
          </div>

          {/* Risk List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <RiskList userId={userIdString} />
            </div>
          </div>
        </div>
      </div>

      {/* Create Risk Modal */}
      {isCreateRiskOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-lg bg-white">
            <div className="flex justify-between items-center border-b pb-3">
              <button
                onClick={() => setCreateRiskOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <CreateRisk onRiskCreated={handleRiskCreated} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
