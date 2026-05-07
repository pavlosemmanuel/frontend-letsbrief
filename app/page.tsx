"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

interface CategoryType {
  _id: string;
  title: string;
}

interface BriefType {
  _id: string;
  title: string;
  description: string;
  clientName: string;
  category: CategoryType;
}

export default function Home() {
  const [brief, setBrief] = useState<BriefType[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/brief")
      .then((res) => res.json())
      .then((data) => {
        setBrief(data.data);
      });
  }, []);

  return (
    <>
      <main className="relative flex-1 min-h-[800px] overflow-hidden flex flex-col justify-center items-center">
        {/* 3D Icons (Absolute positioned) */}
        <div className="absolute top-[5%] right-[2%] md:top-[10%] md:right-[5%] lg:right-[10%] w-32 md:w-48 lg:w-56 animate-[bounce_5s_ease-in-out_infinite] z-0 opacity-80 md:opacity-100 pointer-events-none">
          <Image src="/computer.png" alt="3D Computer Icon" width={250} height={250} className="w-full h-auto object-contain drop-shadow-2xl" priority />
        </div>

        <div className="absolute bottom-[84%] left-[2%] md:bottom-[50%] md:left-[5%] lg:left-[8%] w-28 md:w-40 lg:w-48 animate-[bounce_6s_ease-in-out_infinite_reverse] z-0 opacity-80 md:opacity-100 pointer-events-none">
          <Image src="/fire.png" alt="3D Fire Icon" width={200} height={200} className="w-full h-auto object-contain drop-shadow-2xl" priority />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-center mb-10 md:mt-20 px-4">
          <div className="text-sm md:text-lg px-4 md:px-6 py-2 border border-slate-300 bg-white/50 backdrop-blur-sm text-primary font-medium rounded-full flex items-center gap-2 mb-6">
            <div className="px-1 py-1 bg-primary rounded-full"></div>
            <p>letsbrief.com</p>
          </div>

          <div className="w-full md:w-[90%] lg:w-[70%] flex flex-col justify-center items-center gap-4 md:gap-6">
            <h2 className="text-[30px] sm:text-[50px] md:text-[40px] lg:text-[80px] text-center leading-normal md:leading-[1.1] lg:leading-[110px] pt-2 md:pt-6 font-semibold">
              <span className="text-primary font-bold">Tingkatkan portfolio </span>
              <br className="hidden md:block" />
              kamu dengan Brief yang bisa kamu coba
            </h2>

            <p className="text-base md:text-xl lg:text-2xl text-center w-full md:w-[80%] opacity-60 font-medium leading-relaxed">
              Tingkatkan skill kamu dengan mengerjakan brief proyek nyata dan bangun portfolio yang menonjol di industri kreatif.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl text-white bg-primary hover:bg-blue-700 transition-colors font-semibold">Get started</button>
            <button className="w-full sm:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl bg-gray-200 hover:bg-gray-300 transition-colors font-semibold">Explore Brief</button>
          </div>
        </div>

        <div className="flex justify-center mt-10 mb-10 md:mb-20 px-4 md:px-8 w-full max-w-[1200px]">
          <Image src={"/imagesSection1.svg"} alt="images_section1" width={1200} height={800} className="w-full h-auto drop-shadow-sm" loading="lazy"></Image>
        </div>
      </main>

      <div className="w-full min-h-[500px] md:h-[800px] bg-primary flex flex-col justify-center items-center text-white py-16 md:py-10 gap-8 md:gap-10 px-6">
        <div className="text-center w-full md:w-[80%] lg:w-[50%] flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold">Siapa kami?</h2>
          <p className="text-base md:text-xl lg:text-2xl opacity-80 mt-2 md:mt-4">Kami adalah platform yang membantu para kreator, developer, dan desainer untuk berkembang melalui pengalaman yang lebih nyata.</p>
        </div>

        <video src="/letsbrief.mp4" autoPlay loop muted className="rounded-xl md:rounded-[20px] w-full max-w-[900px]" />
      </div>

      <div className="w-full py-16 md:py-24 flex flex-col items-center gap-4 px-6">
        <div className="text-center w-full md:w-[80%] lg:w-[50%] flex flex-col gap-3 md:gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Brief Project!</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 mt-2 md:mt-4 leading-relaxed">Yuk coba beberapa brief gratis ini</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-20 py-10 gap-6 md:gap-8 w-full max-w-[1400px]">
          {brief.map((item) => (
            <div key={item._id} className=" bg-second w-full px-6 py-8 flex flex-col gap-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex flex-col gap-3">
                <p className="text-sm opacity-60">{item.clientName}</p>
                <p className="text-2xl font-bold line-clamp-2">{item.title}</p>
                <div className=" text-sm border border-sky-800 text-sky-600 rounded-full px-4 py-1 w-fit">{item.category.title}</div>
              </div>

              <div className="flex-grow">
                <p className="opacity-60 text-sm md:text-base leading-relaxed">{item.description.split(" ").slice(0, 10).join(" ")}....</p>
              </div>

              <button className="px-4 py-3 md:py-4 bg-primary rounded-xl mt-4 text-white font-medium hover:bg-blue-700 transition-colors">Lihat selengkapnya</button>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 border-2 border-primary rounded-full text-primary font-medium">Lihat brief lainnya</button>
      </div>

      <div className="w-full h-[500px] relative bg-primary flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-16 md:py-20 gap-10 md:gap-0 overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
          <div className="relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] aspect-square">
            <Image src={"/girls.png"} fill alt="Ready to build portfolio" className="object-contain" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white font-semibold">Sudah siap bangun portfolio bersama LetsBrief?</h2>

          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 transition-colors rounded-full text-white font-medium text-lg w-fit">Lihat brief lainnya</button>
        </div>
      </div>
    </>
  );
}
