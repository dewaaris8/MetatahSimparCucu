"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReceptionBox() {
  useEffect(() => {
    // reset awal
    gsap.set(".glass-overlay", { backdropFilter: "blur(4px)", opacity: 0.6 });

    // animasi scroll
    gsap.to(".glass-overlay", {
      backdropFilter: "blur(20px)", // makin blur saat discroll
      opacity: 0.85, // lebih pekat
      ease: "none",
      scrollTrigger: {
        trigger: ".reception-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="text-center relative border-2 border-[#e6c643] z-20 overflow-hidden mt-7 gap-2 py-40 flex text-white flex-col items-center justify-center px-[10px] reception-section">
      {/* glassmorphism overlay */}
      <div
        className="absolute inset-0 z-10 glass-overlay 
        bg-black/50 
        backdrop-blur-xl 
        border border-white/20 
        shadow-lg"
      />

      {/* konten utama */}
      <p className="text-[28px] mt-5 z-30 font-[500] tracking-[2px] font-NotoSerif w-[85%]">
        Resepsi
      </p>
      <p className="text-[12px] mt-5 z-30 uppercase tracking-[2px] font-Comfortaa w-[85%]">
        Minggu, Oktober 12, 2025
      </p>
      <h1 className="text-[12px] uppercase mt-5 tracking-[2px] font-Comfortaa z-30">
        Waktu: 5.30 - 9 PM WITA
      </h1>
      <h1 className="text-[12px] mt-5 font-Comfortaa uppercase z-30 tracking-[2px]">
        Taman Prakerti Bhuana
      </h1>
      <p className="text-[12px] uppercase mt-5 z-30 tracking-[2px] font-Comfortaa w-[85%]">
        Beng, Kabupaten <br /> Gianyar, Bali
      </p>

      <a
        className="bg-gradient-to-r text-[13px] from-[#e6c643] to-[#c8a530] text-black mt-5 font-Comfortaa px-10 py-2 z-[100]  shadow-md"
        href="https://maps.app.goo.gl/BDTCXj1127ALtCCD7"
      >
        GOOGLE MAPS
      </a>
    </div>
  );
}
