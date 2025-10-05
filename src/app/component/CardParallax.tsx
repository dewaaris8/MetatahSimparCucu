"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(
      containerRef.current.querySelectorAll(".card")
    );

    gsap.to(cards, {
      x: (i) => {
        if (i === 0) return "-120%"; // jauh ke kiri
        if (i === 1) return "-40%"; // agak kiri
        if (i === 2) return "40%"; // agak kanan
        if (i === 3) return "120%"; // jauh ke kanan
        return "0%";
      },
      y: (i) => {
        if (i === 0) return "-40%"; // semua agak naik biar arc
        if (i === 1) return "-60%";
        if (i === 2) return "-60%";
        if (i === 3) return "-40%";
        return "0%";
      },
      rotate: (i) => {
        if (i === 0) return -15;
        if (i === 1) return -5;
        if (i === 2) return 5;
        if (i === 3) return 15;
        return 0;
      },
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div
        ref={containerRef}
        className="relative w-full max-w-[200px] h-[500px] sm:h-[300px]"
      >
        {/* Card stack */}
        <div className="absolute inset-0 card">
          <Image
            src="/images/ais.jpg"
            alt="Card 1"
            fill
            className="object-cover  shadow-lg"
          />
        </div>
        <div className="absolute inset-0 card ">
          <Image
            src="/images/bayu.jpg"
            alt="Card 2"
            fill
            className="object-cover  shadow-lg"
          />
        </div>
        <div className="absolute inset-0 card ">
          <Image
            src="/images/yuka.jpg"
            alt="Card 3"
            fill
            className="object-cover  shadow-lg"
          />
        </div>
        <div className="absolute inset-0 card ">
          <Image
            src="/images/tump.jpg"
            alt="Card 4"
            fill
            className="object-cover  shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
