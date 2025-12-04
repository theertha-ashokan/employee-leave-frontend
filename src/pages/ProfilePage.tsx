import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../services/api';
import { useState } from 'react';

export default function ProfilePage() {
  const qc = useQueryClient();
  const { data } = useQuery({
    queryKey: ['me'],
    queryFn: async () => (await api.get('/users/me')).data
  });

  const [form, setForm] = useState({
    name: '',
    designation: '',
    department: '',
    shiftDetails: '',
    attendanceSummary: ''
  });

  const updateMutation = useMutation({
    mutationFn: async () => (await api.put('/users/me', form)).data,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['me'] })
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div><b>Name:</b> {data.name}</div>
          <div><b>Email:</b> {data.email}</div>
          <div><b>Role:</b> {data.role}</div>
          <div><b>Employee ID:</b> {data.employeeId || '-'}</div>
          <div><b>Designation:</b> {data.designation || '-'}</div>
          <div><b>Department:</b> {data.department || '-'}</div>
          <div><b>Shift:</b> {data.shiftDetails || '-'}</div>
          <div><b>Leave Balance:</b> {data.leaveBalance}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
        <div className="space-y-3">
          {Object.entries(form).map(([k, v]) => (
            <input
              key={k}
              className="w-full border rounded p-2"
              placeholder={k}
              value={v}
              onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
            />
          ))}
          <button onClick={() => updateMutation.mutate()} className="bg-accent text-white px-3 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}