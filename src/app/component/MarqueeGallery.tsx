"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const images = [
  "/images/Gallery 1.jpg",
  "/images/Gallery 2.jpg",
  "/images/Gallery 3.jpg",
  "/images/Gallery 4.jpg",
  "/images/Gallery 5.jpg",
];

export default function MarqueeGallery() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      // clone isi biar infinite loop
      const items = marquee.querySelectorAll(".marquee-item");
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
      });

      // animasi jalan terus
      gsap.to(marquee, {
        xPercent: -50, // geser setengah isi (karena udah clone)
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden w-full py-6">
      <div
        ref={marqueeRef}
        className="flex w-max gap-6 marquee-track"
        style={{ willChange: "transform" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="marquee-item relative w-[300px] h-[200px] flex-shrink-0 overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
