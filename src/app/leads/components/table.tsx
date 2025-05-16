"use client";
import { Lead } from "@/types/Lead";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LeadsTable({ leads }: { leads?: Lead[] }) {
  const router = useRouter();
  const [statusFilter, setStatusFilter] = useState("");

  const filteredLeads = statusFilter
    ? leads?.filter((lead) => lead.status === statusFilter)
    : leads;

  async function handleStatusChange(leadId: string) {
    await fetch("/api/lead", {
      method: "PUT",
      body: JSON.stringify({ leadId }),
    });

    router.refresh();
  }

  return (
    <div className="p-6">
      {/* Header Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full appearance-none pl-3 pr-8 py-2 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="">Status</option>
          <option value="Pending">Pending</option>
          <option value="Reached Out">Reached Out</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-gray-800">
          <thead>
            <tr className="bg-white text-left border-b border-gray-200">
              <th className="px-4 py-3 font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 font-medium text-gray-500">Submitted</th>
              <th className="px-4 py-3 font-medium text-gray-500">Status</th>
              <th className="px-4 py-3 font-medium text-gray-500">Country</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads && filteredLeads.length > 0 ? (
              filteredLeads.map((lead, idx) => {
                const date = new Date(lead.submitted).toLocaleString("en-US", {
                  dateStyle: "short",
                  timeStyle: "short",
                });

                return (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition border-b border-gray-200"
                  >
                    <td className="px-4 py-3">{lead.name}</td>
                    <td className="px-4 py-3">{date}</td>
                    <td className="px-4 py-3">{lead.status}</td>
                    <td className="px-4 py-3">{lead.country}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleStatusChange(lead.id)}
                        className="text-sm text-gray-500 hover:underline"
                      >
                        Change Status
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-400 text-sm"
                >
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
