'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

interface Props{
    progress:number
}


export default function Preloader({progress}:Props){

  return (
    <div className="fixed inset-0 z-[9999] bg-[#eaeaea] flex flex-col items-center justify-center">

      <Image
          src="/largelogotitle.svg"
          alt="Логотип ПИК Мостовик"
          width={500}
          height={500}
          className="mb-8"
              />

      <div className="w-[400px] h-[4px] bg-[#eaeaea] overflow-hidden">

        <div
          className="h-full bg-blue-800 transition-all duration-200"
          style={{
            width: `${progress}%`
          }}
        />

      </div>

      <span className="text-blue-800 mt-4">
        {progress}%
      </span>

    </div>
  );
}