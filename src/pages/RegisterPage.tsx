// import { useState } from "react";
// import { api } from "../services/api";
// import { useNavigate } from "@tanstack/react-router";

// export default function RegisterPage() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [msg, setMsg] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setMsg(null);

//     try {
//       const { data } = await api.post("/auth/register", form);
//       console.log(data);

//       // Redirect to Login page
//       navigate({ to: "/login" });

//     } catch (error: any) {
//       setMsg(error?.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
//       <h2 className="text-xl font-semibold mb-4">Register</h2>

//       {msg && <div className="text-red-600 mb-2">{msg}</div>}

//       <form className="space-y-4" onSubmit={onSubmit}>
//         <input
//           className="w-full border rounded p-2"
//           placeholder="Full Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full border rounded p-2"
//           placeholder="Email"
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           className="w-full border rounded p-2"
//           placeholder="Password"
//           name="password"
//           type="password"
//           value={form.password}
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//         >
//           Create Account
//         </button>
//       </form>

//       <div className="mt-3 text-sm">
//         Already have an account?{" "}
//         <a href="/login" className="text-blue-600 hover:underline">
//           Login
//         </a>
//       </div>
//     </div>
//   );
// }
