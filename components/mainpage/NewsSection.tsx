'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NewsItem = {
  id: string;
  title: string;
  slug: string;
  publishDate: string;
  previewImage?: {
    url: string
    alt?: string
  }
};

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 3;

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `/api/news?limit=${limit}&page=${page}`
      );
      const data = await res.json();

      setNews(data.docs);
      setTotalPages(data.totalPages);
    };

    fetchNews();
  }, [page]);

  return (
    <section className="w-full flex justify-center px-[clamp(20px,5vw,40px)] pb-[196px] overflow-hidden text-left text-[48px] text-[var(--Primary-blue)] font-[Montserrat]">
      <div className="w-full max-w-[1440px] flex flex-col gap-[80px]">

        {/* TITLE */}
        <h2 className="font-bold tracking-[0.09em] text-[48px]">
          НОВОСТИ
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-[32px] w-full max-[1100px]:grid-cols-1">

          {news.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--Primary-blue)] flex flex-col p-6 gap-6 overflow-hidden transition hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-white text-[18px] font-medium">
                {new Date(item.publishDate).toLocaleDateString("ru-RU")}
              </h3>

              <div className="flex flex-col gap-6">
                <Image
                  src={item.previewImage?.url || "/default-image.png"}
                  width={487}
                  height={304}
                  className="w-full h-[280px] object-cover transition duration-500 hover:scale-[1.03]"
                  alt={item.previewImage?.alt || ""}
                />

                <div className="text-white text-[18px] font-semibold leading-[1.6]">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-wrap items-center justify-between gap-[32px]">
        <Link href={`/news`}>
        <button className="border-2 border-[#1c52d8] bg-transparent h-[64px] min-w-[220px] px-[28px] flex items-center justify-center gap-[12px] transition hover:translate-y-[-4px] hover:bg-[var(--Primary-blue)] hover:shadow-[0_12px_30px_rgba(28,82,216,0.2)] group"> 
            <span className="text-[#1c52d8] text-[16px] font-semibold group-hover:text-white"> 
                Подробнее 
            </span>
            <Image className="w-[16px] h-[16px] group-hover:invert" width={16} height={16} alt="" src="/icons/arrowiconleft.svg" />
        </button>
          </Link>
        <div className="flex items-center gap-[32px]">
          <div className="flex items-center gap-[32px]"> 
            <h2 className="text-[32px] font-bold tracking-[0.09em]">
              {page}/{totalPages}
            </h2>
          </div>

        <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className=""
          >
            <Image className="w-[64px] h-[64px] transition hover:scale-110 border-2 border-[#1c52d8] hover:bg-[var(--Primary-blue)]" width={77} height={77} alt="" src="/icons/iconright.svg" />
          </button>
          <button
            onClick={() =>
              setPage((p) => Math.min(p + 1, totalPages))
            }
            
          >
            <Image className="w-[64px] h-[64px] transition hover:scale-110 border-2 border-[#1c52d8] hover:bg-[var(--Primary-blue)]" width={77} height={77} alt="" src="/icons/iconleft.svg" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}