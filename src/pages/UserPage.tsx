import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export default function UsersPage() {
  const { data, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => (await api.get('/users')).data
  });

  if (error) return <div>Forbidden or error.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">All Users</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Leave Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u: any) => (
            <tr key={u.id} className="border-b">
              <td className="py-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.leaveBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}