import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { useNavigate } from '@tanstack/react-router';

export default function ApplyLeavePage() {
  const qc = useQueryClient();

  const [form, setForm] = useState({
    leaveType: 'casual',
    startDate: '',
    endDate: '',
    isHalfDay: false,
    halfDayType: 'morning',
    reason: ''
  });

  const navigate = useNavigate();
  const [msg, setMsg] = useState<string | null>(null);

  const applyMutation = useMutation({
    mutationFn: async () => (await api.post('/leaves', form)).data,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['myLeaves'] });
      setMsg('Leave applied successfully.');
      
      //  Success alert
      alert("👋🏻 Leave applied successfully!");

      navigate({ to: '/leaves' });
    },
    onError: (e: any) => {
      setMsg(e?.response?.data?.message || 'Error applying leave');
      alert("😒 Failed to apply leave");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Apply for Leave
        </h2>

        {msg && (
          <div className="mb-4 text-sm font-medium text-center text-blue-600">
            {msg}
          </div>
        )}

        <div className="space-y-5">
          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Leave Type
            </label>
            <select
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </div>

          {/* Half Day */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={form.isHalfDay}
                onChange={(e) => setForm({ ...form, isHalfDay: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              Leave Mode
            </label>
            {form.isHalfDay && (
              <select
                className="mt-2 w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={form.halfDayType}
                onChange={(e) => setForm({ ...form, halfDayType: e.target.value })}
              >
                <option value="morning">FullDay</option>
                <option value="afternoon">HalfDay</option>
               
              </select>
            )}
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter reason for leave"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => applyMutation.mutate()}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Submit Leave Request
          </button>
        </div>
      </div>
    </div>
  );
}
