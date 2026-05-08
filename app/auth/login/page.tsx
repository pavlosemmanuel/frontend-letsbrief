"use client";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4">
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-medium text-gray-500" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm text-gray-900 bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end pt-1 pb-2">
            <Link href="#" className="text-[13px] text-gray-500 hover:text-primary font-medium transition-colors">
              Lupa password?
            </Link>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm">
            Masuk
          </button>
        </form>

        <p className="text-center text-[13px] text-gray-500 mt-8">
          Belum punya akun?{" "}
          <Link href="/auth/register" className="text-primary font-medium hover:underline">
            buat disini
          </Link>
        </p>
      </div>
    </div>
  );
}
