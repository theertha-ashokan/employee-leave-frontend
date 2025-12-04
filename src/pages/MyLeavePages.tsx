import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export default function MyLeavesPage() {
  const { data } = useQuery({
    queryKey: ['myLeaves'],
    queryFn: async () => (await api.get('/leaves/me')).data
  });

  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">My Leaves</h2>
      <div className="space-y-3">
        {data.map((l: any) => (
          <div key={l.id} className="border rounded p-3 flex justify-between">
            <div>
              <div className="font-medium">{l.leaveType} ({l.isHalfDay ? 'Half' : `${l.days} days`})</div>
              <div className="text-sm text-gray-600">{l.startDate} → {l.endDate}</div>
              {l.reason && <div className="text-sm">{l.reason}</div>}
            </div>
            <span className={`text-sm px-2 py-1 rounded ${l.status === 'approved' ? 'bg-green-100 text-green-700' : l.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}