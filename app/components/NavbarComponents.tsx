"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarComponents() {
  const pathname = usePathname();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  if (pathname?.startsWith("/auth")) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    setToken(tokenUser);
  }, []);

  return (
    <nav className="relative flex justify-between px-8 py-6 items-center z-50">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt="Logo" width={200} height={200} className="w-40 md:w-40 object-contain" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 list-none font-medium text-xl">
        <li>
          <Link href={"#"} className="hover:text-primary transition-colors">
            Show case
          </Link>
        </li>
        <li>
          <Link href={"studicase"} className="hover:text-primary transition-colors">
            Studi case
          </Link>
        </li>
        <li>
          <Link href={"#"} className="hover:text-primary transition-colors">
            blog
          </Link>
        </li>
      </div>

      {/* Desktop Button */}
      {token ? (
        <div className="hidden md:block">
          <button className="px-6 py-4 text-lg rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-colors">Profile</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <button className="px-6 py-4 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-colors">
            <Link href={"/auth/login"}>Get Started</Link>
          </button>
        </div>
      )}

      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-6 px-8 gap-6 md:hidden transition-all duration-300 origin-top ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-5 list-none text-center text-lg font-medium">
          <li>
            <Link href={"#"} className="block text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"#"} className="block text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href={"#"} className="block text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href={"#"} className="block text-gray-800 hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
        {token ? (
          <button className="w-full mt-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-colors" onClick={() => setIsOpen(false)}>
            Profile
          </button>
        ) : (
          <button className="w-full mt-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-700 transition-colors" onClick={() => setIsOpen(false)}>
            Get started
          </button>
        )}
      </div>
    </nav>
  );
}
