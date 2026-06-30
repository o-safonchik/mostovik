"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
  status?: string;
  year?: string;
  region?: string;
  worktype?: string;

  years: number[];
  regions: string[];
  worktypes: string[];
}

export default function ProjectsFilters({
  status,
  year,
  region,
  worktype,
  years,
  regions,
  worktypes,
}: Props) {
  const [openRegion, setOpenRegion] = useState(false);
  const [openWorktype, setOpenWorktype] = useState(false);

  const buildUrl = (params: Record<string, string | undefined>) => {
    const search = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value) search.set(key, value);
    });

    return `/projects?${search.toString()}`;
  };

  return (
    <section className="border-b border-[#D8DCE8] py-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-10 px-12">

        {/* СТАТУС */}
        <div className="flex items-center gap-8">
          <Link
            href={buildUrl({ status: "current", year, region, worktype })}
            className={`text-[20px] ${
              status === "current" || !status
                ? "font-semibold border-b border-[#1C2E6A]"
                : "text-[#4B5A8F]"
            }`}
          >
            Текущие проекты
          </Link>

          <Link
            href={buildUrl({ status: "finished", year, region, worktype })}
            className={`text-[20px] ${
              status === "finished"
                ? "font-semibold border-b border-[#1C2E6A]"
                : "text-[#4B5A8F]"
            }`}
          >
            Завершённые проекты
          </Link>
        </div>

        {/* ГОД */}
        <div className="flex items-center gap-3">
          <span className="text-[16px] text-[#4B5A8F]">Год:</span>

          {years.map((item) => (
            <Link
              key={item}
              href={buildUrl({
                status,
                year: String(item),
                region,
                worktype,
              })}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                year === String(item)
                  ? "bg-[#1C2E6A] text-white"
                  : "hover:bg-[#1C2E6A] hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 📍 РЕГИОН DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpenRegion((p) => !p)}
            className="text-[16px] text-[#4B5A8F] flex items-center gap-2"
          >
            Регион
            <span className="text-xs">▼</span>
          </button>

          {openRegion && (
            <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg z-50 min-w-[200px]">
              {regions.map((r) => (
                <Link
                  key={r}
                  href={buildUrl({ status, year, region: r, worktype })}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    region === r ? "font-semibold text-[#1C2E6A]" : ""
                  }`}
                  onClick={() => setOpenRegion(false)}
                >
                  {r}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 🛠 ТИП РАБОТ DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpenWorktype((p) => !p)}
            className="text-[16px] text-[#4B5A8F] flex items-center gap-2"
          >
            Тип работ
            <span className="text-xs">▼</span>
          </button>

          {openWorktype && (
            <div className="absolute top-full mt-2 bg-white border shadow-lg rounded-lg z-50 min-w-[240px]">
              {worktypes.map((t) => (
                <Link
                  key={t}
                  href={buildUrl({ status, year, region, worktype: t })}
                  className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                    worktype === t ? "font-semibold text-[#1C2E6A]" : ""
                  }`}
                  onClick={() => setOpenWorktype(false)}
                >
                  {t}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* СБРОС */}
        <Link
          href="/projects"
          className="ml-auto text-sm text-[#1C52D8] underline"
        >
          Сбросить фильтры
        </Link>
      </div>
    </section>
  );
}