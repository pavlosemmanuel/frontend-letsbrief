"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function studicasePages() {
  return (
    <>
      <div className="w-full min-h-[600px] flex flex-col items-center justify-center px-4 md:px-10 py-12 gap-8 md:gap-10 overflow-hidden">
        <div className="relative flex items-center justify-center w-full max-w-[900px]">
          {/* Trophy Image */}
          <div className="absolute left-0 md:-left-10 top-32 w-16 md:w-[150px] z-0">
            <Image src="/trophy.png" alt="Trophy" width={150} height={150} className="object-contain" />
          </div>

          <div className="flex flex-col gap-4 px-8 md:px-0 justify-center items-center">
            <h2 className="text-3xl md:text-6xl w-full max-w-[805px] font-bold text-center leading-normal relative z-10 ">
              Yuk cari brief yang sesuai dengan <span className="text-primary">bidang kamu</span>
            </h2>

            <p className="text-center w-[90%] md:w-[60%] md:text-xl text-lg font-medium opacity-60">Kamu juga bisa generate Brief sesuai dengan bidang kamu lhoo yuk cobain pake teknologi AI terbaru</p>
          </div>

          {/* Folder Image */}
          <div className="absolute right-0 md:-right-30 top-0 md:-top-8 w-16 md:w-[150px] z-0">
            <Image src="/folder.png" alt="Folder" width={200} height={200} className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <section className="w-full md:w-auto px-8 md:px-12 py-4 border-2 border-primary text-primary rounded-full cursor-pointer text-center">Pilih kategori</section>
          <button className="w-full md:w-auto px-8 md:px-12 py-4 bg-primary text-secondary rounded-full font-semibold cursor-pointer text-white flex items-center justify-center gap-2">
            <Image src="/star.svg" alt="Start" width={32} height={32}></Image>
            Generate
          </button>
        </div>

        <div className="w-full py-8 flex flex-col items-center gap-4 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-20 py-10 gap-6 md:gap-8 w-full max-w-[1400px]"></div>
        </div>
      </div>
    </>
  );
}
