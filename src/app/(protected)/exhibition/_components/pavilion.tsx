"use client"

import Image from "next/image"

export function PavilionImage() {
  return (
    <div className="flex w-full sm:w-[250px] md:w-[300px] h-[100px] md:h-[150px] mt-4  rounded-lg overflow-hidden">
      <Image
        src={"/logo.png"}
        width={400}
        height={400}
        alt="Pavilion Logo"
        className="object-contain transition-transform duration-300 hover:scale-110 animate-[scale_2s_ease-in-out_infinite_alternate]"
      />
    </div>
  )
}
