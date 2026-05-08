"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      window.location.href = "/auth/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-1 flex items-center justify-center p-4 min-h-screen">
      <div className="bg-white rounded-3xl p-8 sm:p-10 w-full max-w-[440px] shadow-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-sm">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="14" height="18" rx="3" fill="white" />
              <circle cx="7" cy="5.5" r="2.5" fill="#3D58FF" />
              <circle cx="7" cy="12.5" r="2.5" fill="#3D58FF" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-[28px] font-bold text-center text-gray-900 mb-3 tracking-tight">Welcome back</h1>
        <p className="text-sm text-gray-500 text-center mb-8 px-2 sm:px-4 leading-relaxed">Masuk ke akun kamu untuk mencoba brief yang sesuai dengan bidang kamu</p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-500" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-transparent"
            />
          </div>

          <div className="space-y-2 pb-2">
            <label className="text-[13px] font-medium text-gray-500" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-transparent"
            />
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm">
            Buat akun
          </button>
        </form>

        <p className="text-center text-[13px] text-gray-500 mt-8">
          Sudah punya akun?{" "}
          <Link href="/auth/login" className="text-primary font-medium hover:underline">
            masuk disini
          </Link>
        </p>
      </div>
    </div>
  );
}
