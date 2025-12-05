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
  });

  const updateMutation = useMutation({
    mutationFn: async () => (await api.put('/users/me', form)).data,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['me'] });
      alert("Profile updated successfully 🎉");
      setForm({
        name: '',
        designation: '',
        department: '',
        shiftDetails: '',
      });
    }
  });

  if (!data) return <div>Loading...</div>;

  const handleReset = () => {
    setForm({
      name: '',
      designation: '',
      department: '',
      shiftDetails: '',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Profile Card */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <div><b>Name:</b> {data.name}</div>
          <div><b>Email:</b> {data.email}</div>
          <div><b>Designation:</b> {data.designation || '-'}</div>
          <div><b>Department:</b> {data.department || '-'}</div>
          <div><b>Shift:</b> {data.shiftDetails || '-'}</div>
        </div>
      </div>

      {/* Update Profile */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Profile</h2>

        <div className="space-y-3">
          {Object.entries(form).map(([key, value]) => (
            <input
              key={key}
              className="w-full border rounded p-2"
              placeholder={key}
              value={value}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, [key]: e.target.value }))
              }
            />
          ))}

          <div className="flex gap-3">
            <button
              onClick={() => updateMutation.mutate()}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
