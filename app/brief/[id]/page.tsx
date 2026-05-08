"use client";

import axios from "axios";
import { use, useEffect, useState } from "react";

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
  clientDetail: string[];
}

export default function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [brief, setBrief] = useState<BriefType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`http://localhost:5000/api/brief/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);

        setBrief(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!brief) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col px-10 py-10 justify-center items-center gap-8">
      <div className="flex flex-col gap-1 px-10 py-10 w-[60%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl">
        <div className="inline-block px-4 py-2 border border-blue-500 text-blue-600 rounded-full text-[12px] font-medium w-fit text-sm">{brief.category.title}</div>
        <h2 className="text-3xl font-semibold mt-4">{brief.title}</h2>

        <p className="mt-3 opacity-60  leading-relaxed">{brief.description}</p>
      </div>

      <div className="flex flex-col gap-1 px-10 py-10 w-[60%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl">
        <h4 className="text-xl font-semibold mb-4">Details</h4>
        <ul className="w-[60%] flex flex-col gap-4 list-disc opacity-80">
          {brief.clientDetail.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 px-10 py-10 w-[60%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl">
        <h2 className="text-xl font-semibold mb-4">Nama Client</h2>
        <p className="text-lg opacity-60">{brief.clientName}</p>
      </div>

      <div className="flex flex-col gap-1 px-10 py-10 w-[60%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-4xl bg-blue-100"></div>
    </div>
  );
}
