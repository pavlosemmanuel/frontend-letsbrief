"use client";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/auth")) {
    return null;
  }
  return (
    <footer className="w-full flex justify-center py-6 md:py-10 bg-gray-100 px-4 md:px-0">
      <div className="w-full md:w-[90%] bg-[#4353FF] rounded-[20px] md:rounded-[40px] px-6 sm:px-10 py-10 md:py-16 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* LEFT */}
          <div className="flex flex-col gap-5 md:gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center">
              <h1 className="text-[#4353FF] text-4xl md:text-5xl font-bold">G</h1>
            </div>

            <div className="flex flex-col gap-3 md:gap-4 text-base md:text-lg">
              <p className="font-semibold">PT. Global Learning Asia</p>
              <p className="opacity-90">Jl Kiyai Hamid No 2 Jakarta Pusat Indonesia</p>
              <p className="opacity-90">+62833-8656-0984 ( WhatsApp )</p>
            </div>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-4 md:gap-5 items-center sm:items-start text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">Company</h2>

            <div className="flex flex-col gap-2 md:gap-3 text-base md:text-lg opacity-90">
              <p className="hover:underline cursor-pointer">About</p>
              <p className="hover:underline cursor-pointer">Contact</p>
              <p className="hover:underline cursor-pointer">Linkedin</p>
              <p className="hover:underline cursor-pointer">Instagram</p>
            </div>
          </div>

          {/* COMMUNITY */}
          <div className="flex flex-col gap-4 md:gap-5 items-center sm:items-start text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">Community</h2>

            <div className="flex flex-col gap-2 md:gap-3 text-base md:text-lg opacity-90">
              <p className="hover:underline cursor-pointer">LearnByCase</p>
              <p className="hover:underline cursor-pointer">GoogleDev</p>
              <p className="hover:underline cursor-pointer">SembariBelajar.com</p>
              <p className="hover:underline cursor-pointer">Cihuy Coding</p>
            </div>
          </div>

          {/* SCHOOL */}
          <div className="flex flex-col gap-4 md:gap-5 items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-semibold">Collaboration Schools</h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3 text-base md:text-lg opacity-90 w-full">
              <p>Penabur</p>
              <p>Dian Kasih</p>

              <p>Sampoerna</p>
              <p>Bunda Mulia</p>

              <p>Pelita Harapan</p>
              <p>Mahatma Gading</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
