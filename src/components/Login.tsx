import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, form.username, form.password);
      toast.success("Login Successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eaf6f6] px-4">
      <ToastContainer />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-[#2d4d4d] mb-2">docport</h1>
        <h2 className="text-xl font-semibold text-center text-[#406060] mb-2">Login</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#406060] mb-1">Username (Email)</label>
            <input
              type="email"
              name="username"
              placeholder="Enter your email"
              value={form.username}
              onChange={handleChange}
              className="w-full border border-[#b2d8d8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4db8b8] text-gray-700"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#406060] mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-[#b2d8d8] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4db8b8] text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-[#4db8b8]"
            } text-white font-semibold py-2 rounded-lg hover:bg-[#3aa7a7] transition`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#4db8b8] hover:underline font-medium">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
