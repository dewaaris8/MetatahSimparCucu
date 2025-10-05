"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxGallery() {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const sections = galleryRef.current.querySelectorAll(".parallax-section");

    sections.forEach((section) => {
      const img = section.querySelector(".parallax-item");
      if (!img) return;

      gsap.fromTo(
        img,
        { yPercent: -15, scale: 1.2 },
        {
          yPercent: 15,
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
    });
  }, []);

  // 👇 kamu bisa atur ukuran berbeda di sini
  const galleryItems = [
    { src: "/images/scroll1.JPG", height: "h-[70vh]", width: "w-full" },
    {
      src: "/images/scroll2.JPG",
      height: "h-[60vh]",
      width: "w-3/4 mx-auto",
      back: "bg-left",
    },
    { src: "/images/scroll3.JPG", height: "h-[60vh]", width: "w-[90%]" },
    {
      src: "/images/scroll4.JPG",
      height: "h-[45vh]",
      width: "w-[70%] ml-auto",
    },
    { src: "/images/scroll5.JPG", height: "h-[55vh]", width: "w-full" },
    {
      src: "/images/scroll6.JPG",
      height: "h-[35vh]",
      width: "w-[80%] mx-auto",
    },
    { src: "/images/scroll7.JPG", height: "h-[65vh]", width: "w-full" },
    // {
    //   src: "/images/scroll8.JPG",
    //   height: "h-[70vh]",
    //   width: "w-[75%] ml-auto",
    // },
  ];

  return (
    <section ref={galleryRef} className="space-y-16 p-6">
      {galleryItems.map((item, i) => (
        <div
          key={i}
          className={`parallax-section relative overflow-hidden ${item.back}  shadow-lg ${item.height} w-full`}
        >
          <Image
            src={item.src}
            alt={`Parallax ${i + 1}`}
            fill
            priority
            className="parallax-item bg-center object-cover"
          />
        </div>
      ))}
    </section>
  );
}
