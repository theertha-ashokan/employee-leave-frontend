import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import { useNavigate } from "@tanstack/react-router";
import { FaCalendarAlt, FaPenFancy } from "react-icons/fa";

export default function ApplyLeavePage() {
  const qc = useQueryClient();

  const [form, setForm] = useState({
    leaveType: "casual",
    startDate: "",
    endDate: "",
    isHalfDay: false,
    halfDayType: "morning",
    reason: "",
  });

  const navigate = useNavigate();
  const [msg, setMsg] = useState<string | null>(null);

  const applyMutation = useMutation({
    mutationFn: async () => (await api.post("/leaves", form)).data,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["myLeaves"] });
      alert("👋🏻 Leave applied successfully!");
      navigate({ to: "/leaves" });
    },
    onError: (e: any) => {
      alert("😒 Failed to apply leave");
      setMsg(e?.response?.data?.message || "Error applying leave");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-4">

    {/* card */}
      <div className="relative w-full max-w-md bg-[#0d1f33]/40 backdrop-blur-2xl rounded-3xl 
                      border border-blue-300/20 p-10 shadow-lg shadow-blue-500/40">

        <div className="absolute inset-0 rounded-3xl border border-blue-400/30 pointer-events-none"></div>

        <h2 className="text-center text-2xl font-semibold text-blue-100 tracking-wide mb-6">
          Apply for Leave
        </h2>

        {msg && <p className="text-red-400 text-center mb-3">{msg}</p>}

        <div className="space-y-6">

          {/* Leave Type */}
          <div>
            <label className="text-blue-200 text-sm font-medium">Leave Type</label>
            <select
              className="w-full mt-2 bg-[#0d1f33]/40 border border-white/20 rounded-xl p-3 
                         text-blue-100 focus:ring-2 focus:ring-blue-400/40 outline-none"
              value={form.leaveType}
              onChange={(e) => setForm({ ...form, leaveType: e.target.value })}
            >
              <option value="casual">Casual</option>
              <option value="sick">Sick</option>
              <option value="earned">Earned</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="relative">
            <label className="text-blue-200 text-sm font-medium">Start Date</label>
            <FaCalendarAlt className="absolute left-3 top-[50px] text-blue-300 " />
            <input
              type="date"
              className="w-full mt-2 bg-[#0d1f33]/40 border border-white/20 rounded-xl py-3 pl-10 pr-3 
                         text-blue-100 focus:ring-2 focus:ring-blue-400/50 outline-none"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          {/* End Date */}
          <div className="relative">
            <label className="text-blue-200 text-sm font-medium">End Date</label>
            <FaCalendarAlt className="absolute left-3 top-[50px] text-blue-300" />
            <input
              type="date"
              className="w-full mt-2 bg-[#0d1f33]/40 border border-white/20 rounded-xl py-3 pl-10 pr-3 
                         text-blue-100 focus:ring-2 focus:ring-blue-400/50 outline-none"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </div>

          {/* Leave Mode */}
          <div>
            <label className="flex items-center gap-2 text-blue-200 text-sm font-medium">
              <input
                type="checkbox"
                checked={form.isHalfDay}
                onChange={(e) => setForm({ ...form, isHalfDay: e.target.checked })}
                className="h-4 w-4 text-blue-400"
              />
              Leave Mode
            </label>

            {form.isHalfDay && (
              <select
                className="w-full mt-3 bg-[#0d1f33]/40 border border-white/20 rounded-xl p-3 
                           text-blue-100 focus:ring-2 focus:ring-blue-400/40 outline-none"
                value={form.halfDayType}
                onChange={(e) => setForm({ ...form, halfDayType: e.target.value })}
              >
                <option value="morning">Full Day</option>
                <option value="afternoon">Half Day</option>
              </select>
            )}
          </div>

          {/* Reason */}
          <div className="relative">
            <label className="text-blue-200 text-sm font-medium">Reason</label>
            <FaPenFancy className="absolute left-3 top-[50px] text-blue-300" />
            <textarea
              className="w-full mt-2 bg-[#0d1f33]/40 border border-white/20 rounded-xl p-3 pl-10 
                         h-24 text-blue-100 focus:ring-2 focus:ring-blue-400/40 outline-none resize-none"
              placeholder="Enter your reason"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            onClick={() => applyMutation.mutate()}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold 
                       rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 transition-all"
          >
            Submit Leave Request
          </button>
        </div>
      </div>
    </div>
  );
}
