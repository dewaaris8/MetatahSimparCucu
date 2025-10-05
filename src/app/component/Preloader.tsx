"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/images/yuka2.jpg",
  "/images/bayu.jpg",
  "/images/ais.jpg",
  "/images/tump.jpg",
];

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: onFinish,
          });
        },
      });

      // Foto bergerak ke atas satu per satu
      tl.to(".preloader-slide", {
        yPercent: -100,
        duration: 1.2,
        stagger: 1.5, // jeda antar slide
      });

      // Teks masuk setelah gambar selesai
      tl.fromTo(
        ".preloader-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );
      tl.fromTo(
        ".preloader-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      );
    }, preloaderRef);

    return () => ctx.revert();
  }, [onFinish]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 bg-black overflow-hidden z-[9999] flex items-center justify-center"
    >
      {/* Container slide full screen */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={i}
            className="preloader-slide absolute inset-0"
            style={{ zIndex: images.length - i }}
          >
            <Image
              src={src}
              alt={`Preloader ${i}`}
              fill
              priority
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay teks */}
      <div className="relative z-50 text-white text-center">
        <h3 className=" preloader-title text-white font-Kodchasan uppercase">
          Metatah
        </h3>
        <h1 className="preloader-title text-white text-[50px] font-MeieScript ">
          Cucu Simpar
        </h1>
        <h3 className="preloader-sub text-white font-mono">12 - 10 - 25</h3>
        {/* <h1 className="preloader-title text-[40px] md:text-[40px] font-MeieScript text-white drop-shadow-lg">
          Metatah Cucu Simpar
        </h1>
        <p className="preloader-sub font-mono text-lg md:text-2xl text-white/80 italic mt-2">
          12 October 2025
        </p> */}
      </div>
    </div>
  );
}
