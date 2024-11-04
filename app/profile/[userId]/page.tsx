"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/Auth"; // Adjust this path if necessary
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const { user, loading, error, updateUserProfile, verifySession } =
    useAuthStore();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [reputation, setReputation] = useState(user?.prefs?.reputation || 0);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUpdateError("");

    const result = await updateUserProfile({ reputation });
    if (!result.success) {
      setUpdateError(result.error?.message || "Failed to update profile");
    } else {
      // Optionally handle a successful update
    }
  };

  if (loading) return <p>Loading your profile...</p>;
  if (error) return <p>Error loading profile: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      {updateError && <p className="text-red-500">{updateError}</p>}
      <form
        className="bg-white shadow-md rounded-lg p-6"
        onSubmit={handleUpdate}
      >
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="mt-1 block w-full border rounded-md p-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 block w-full border rounded-md p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="reputation">
            Reputation
          </label>
          <input
            className="mt-1 block w-full border rounded-md p-2"
            type="number"
            id="reputation"
            value={reputation}
            onChange={(e) => setReputation(Number(e.target.value))}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;