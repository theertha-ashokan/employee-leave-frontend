import { useState } from 'react'
import { Outlet, Link } from '@tanstack/react-router';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-primary font-semibold">ELM</Link>
          <nav className="space-x-4">
            <Link to="/leaves" className="hover:text-primary">My Leaves</Link>
            <Link to="/apply" className="hover:text-primary">Apply Leave</Link>
            <Link to="/profile" className="hover:text-primary">Profile</Link>
            <Link to="/admin/users" className="hover:text-primary">Users</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
