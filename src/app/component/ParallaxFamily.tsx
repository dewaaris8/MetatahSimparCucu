"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxFamily() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(".parallax-img");

    sections.forEach((section, index) => {
      const img = section.querySelector("img");
      if (!img) return;

      if (index % 2 === 0) {
        // genap → scale-out (besar → normal)
        gsap.fromTo(
          img,
          { scale: 1.2 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      } else {
        // ganjil → scale-in (normal → besar)
        gsap.fromTo(
          img,
          { scale: 1 },
          {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-6">
      {/* 1 */}
      <div className="w-full flex flex-col gap-2 h-max">
        <div
          className="w-full relative h-[350px] bg-black parallax-img overflow-hidden"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
        >
          <Image
            src="/images/yuka.jpg"
            alt="Wedding Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="w-[100%] text-left">
          <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
            Dewa Ayu Carltina Dewi, S.Tr.Par
          </h1>
          <p className="font-Kodchasan text-[12px] mt-3">
            Daughter of Mr. Dewa Putra & Mrs. Dewi Ambayuni
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="w-full flex items-end flex-col gap-2 h-max">
        <div
          className="w-full relative h-[350px] bg-black parallax-img overflow-hidden"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
        >
          <Image
            src="/images/bayu.jpg"
            alt="Wedding Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="w-[100%] text-right">
          <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
            Dewa Gede Bayu Pradana Putra, S.ars
          </h1>
          <p className="font-Kodchasan text-[12px] mt-3">
            Son of Mr. Dewa Putra & Mrs. Dewi Ambayuni
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full flex flex-col gap-2 h-max">
        <div
          className="w-full relative h-[350px] bg-black parallax-img overflow-hidden"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
        >
          <Image
            src="/images/ais.jpg"
            alt="Wedding Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="w-[100%] text-left">
          <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
            Dewa Gede Arista Widana Putra, S.kom
          </h1>
          <p className="font-Kodchasan text-[12px] mt-3">
            Son of Mr. Dewa Putra & Mrs. Dewi Ambayuni
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="w-full flex items-end flex-col gap-2 h-max">
        <div
          className="w-full relative h-[350px] bg-black parallax-img overflow-hidden"
          style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
        >
          <Image
            src="/images/tump.jpg"
            alt="Wedding Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="w-[80%] text-right">
          <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
            Dewa Gede Lion Trump Putra
          </h1>
          <p className="font-Kodchasan text-[12px] mt-3">
            Son of Mr. Dewa Putu Alit & Mrs. Eva Yunita
          </p>
        </div>
      </div>
    </div>
  );
}
