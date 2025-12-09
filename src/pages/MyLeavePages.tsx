import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { FaCalendarAlt } from 'react-icons/fa';

export default function MyLeavesPage() {
  const { data } = useQuery({
    queryKey: ['myLeaves'],
    queryFn: async () => (await api.get('/leaves/me')).data
  });

  if (!data) return <div className="text-center py-10 text-gray-500 ">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 ">
      
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <FaCalendarAlt className="text-indigo-600 text-3xl" />
        <h2 className="text-3xl font-bold text-white">My Leave History</h2>
      </div>

      {/* Leave Cards */}
      <div className="grid gap-5">
        {data.map((l: any) => (
          <div 
            key={l.id} 
            className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-4"
          >
            <div className="flex justify-between items-start">
              {/* Left Section */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-white">
                    {l.leaveType}
                  </span>
                  <span className="text-sm text-white">
                    {l.isHalfDay ? "(Half Day)" : `(${l.days} days)`}
                  </span>
                </div>

                <div className="mt-2 text-white">
                  <p className="text-sm">
                    <span className="font-medium text-white">From:</span> {l.startDate}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium text-white">To:</span> {l.endDate}
                  </p>
                </div>

                {l.reason && (
                  <p className="text-sm text-white mt-3 border-t pt-3">
                    <span className="font-medium">Reason:</span> {l.reason}
                  </p>
                )}
              </div>

              {/* Status Badge */}
              <span
                className={`
                  text-sm px-3 py-1 rounded-full capitalize font-medium
                  ${l.status === 'approved' && 'bg-green-100 text-green-700'}
                  ${l.status === 'rejected' && 'bg-red-100 text-red-700'}
                  ${l.status === 'pending' && 'bg-yellow-100 text-yellow-700'}
                `}
              >
                {l.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
