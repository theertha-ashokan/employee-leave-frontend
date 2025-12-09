import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "@tanstack/react-router";
import { FaUser, FaLock } from "react-icons/fa";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1a33] via-[#0b203d] to-[#071628] px-4">

      {/* CARD */}
      <div className="relative w-full max-w-md bg-[#0d1f33]/40 backdrop-blur-2xl rounded-3xl 
                      border border-blue-300/20 p-10 shadow-lg shadow-blue-500/40">

        <div className="absolute inset-0 rounded-3xl border border-blue-400/30 pointer-events-none"></div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border border-blue-300/50 flex items-center justify-center 
                          bg-[#0d1f33]/40 backdrop-blur-xl shadow-md shadow-blue-500/40">
            <FaUser className="text-blue-300 text-3xl" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-semibold text-blue-100 tracking-wide mb-6">
          Employee Login
        </h2>

        {msg && <p className="text-red-400 text-center mb-3">{msg}</p>}

        <form onSubmit={onSubmit} className="space-y-6">

          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-blue-300" />
            <input
              className="w-full bg-[#0d1f33]/40 border border-white/20 rounded-xl py-3 pl-10 pr-3 
                         text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 
                         focus:ring-blue-400/50"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-blue-300" />
            <input
              type="password"
              className="w-full bg-[#0d1f33]/40 border border-white/20 rounded-xl py-3 pl-10 pr-3 
                         text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 
                         focus:ring-blue-400/50"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold 
                       rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 transition-all"
          >
            LOGIN
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-300 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
