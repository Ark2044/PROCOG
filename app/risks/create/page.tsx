"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateRisk() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically handle form submission, such as sending the data to your API.
    console.log({
      title,
      description,
      status,
      createdDate,
      updatedDate,
    });

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setStatus("Active");
    setCreatedDate("");
    setUpdatedDate("");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link
        href="/dashboard"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-6">Create a New Risk</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 space-y-4"
      >
        <div>
          <label className="block text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Mitigated">Mitigated</option>
            <option value="Monitoring">Monitoring</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="createdDate">
            Created Date
          </label>
          <input
            type="date"
            id="createdDate"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="updatedDate">
            Updated Date
          </label>
          <input
            type="date"
            id="updatedDate"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Create Risk
        </button>
      </form>
    </div>
  );
}
