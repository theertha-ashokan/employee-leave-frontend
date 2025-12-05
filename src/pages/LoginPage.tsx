import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "@tanstack/react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      navigate({ to: "/apply" });
    } catch (e: any) {
      setMsg(e?.response?.data?.message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-3xl overflow-hidden bg-white">
        
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500 p-10">
          <img
            src="https://www.4cornerresources.com/wp-content/uploads/2023/01/Manager-supporting-employees-scaled.jpeg"
            alt="Employee Login"
            className="w-250 h-76 drop-shadow-2xl object-cover"
          />
        </div>

      {/* login form */}
        <div className="p-10 bg-white/90 backdrop-blur-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Employee Login
          </h2>

          {msg && (
            <div className="text-red-600 mb-3 text-center font-medium">
              {msg}
            </div>
          )}

          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                className="w-full border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                className="w-full border rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-xl"
            >
              Login
            </button>
            {/* <a
            href="/apply"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-0.5"
          >
            login
          </a> */}
          </form>

          <div className="mt-4 text-sm text-center">
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
