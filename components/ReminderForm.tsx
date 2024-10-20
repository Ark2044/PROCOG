"use client";

import { FormEvent, useState } from "react";

interface ReminderFormProps {
  riskId: number;
}

export default function ReminderForm({ riskId }: ReminderFormProps) {
  const [reminderDate, setReminderDate] = useState("");
  const [reminderNote, setReminderNote] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting reminder for risk ID:", riskId, {
      reminderDate,
      reminderNote,
    });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Set Reminder for Risk #{riskId}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-6">
          {/* Reminder Date */}
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="reminderDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Reminder Date
            </label>
            <input
              type="date"
              id="reminderDate"
              name="reminderDate"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
            />
          </div>

          {/* Reminder Note */}
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <label
              htmlFor="reminderNote"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Note
            </label>
            <textarea
              id="reminderNote"
              name="reminderNote"
              rows={4}
              value={reminderNote}
              onChange={(e) => setReminderNote(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-150"
              placeholder="Add a note for your reminder..."
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Set Reminder
          </button>
        </div>
      </form>
    </div>
  );
}
