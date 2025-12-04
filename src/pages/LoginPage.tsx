import { useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from '@tanstack/react-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    try {
      const { data } = await api.post('/api/auth/login', { email, password });
      console.log(data);
      localStorage.setItem('token', data.token);
      navigate({ to: '/' });
    } catch (e: any) {
      setMsg(e?.response?.data?.message || 'Login failed');
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {msg && <div className="text-red-600 mb-2">{msg}</div>}

      <form className="space-y-4" onSubmit={onSubmit}>
        <input
          className="w-full border rounded p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          className="w-full border rounded p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
        
      </form>

      <div className="mt-3 text-sm">
        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
      </div>
    </div>
  );
}
