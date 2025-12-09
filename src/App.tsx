import { useState } from 'react'
import { Outlet, Link } from '@tanstack/react-router';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-500 bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-8 py-12 ">
      <header className="text-xl bg-indigo-100 border-b rounded">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            to="/"
            className="font-bold text-xl bg-indigo-100 text-indigo-700 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition"
          >
           EMPLOYEE LEAVE MANAGEMENT
          </Link>

          <nav className="space-x-4">
            <Link to="/leaves" className="hover:text-primary bg-indigo-100 text-indigo-700 font-bold ">My Leaves</Link>
            <Link to="/apply" className="hover:text-primary bg-indigo-100 text-indigo-700 font-bold">Apply Leave</Link>
            <Link to="/profile" className="hover:text-primary bg-indigo-100 text-indigo-700 font-bold">Profile</Link>
            {/* <Link to="/admin/users" className="hover:text-primary">Users</Link> */}
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
