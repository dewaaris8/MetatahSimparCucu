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

    const images = galleryRef.current.querySelectorAll(".parallax-item");

    images.forEach((img) => {
      gsap.to(img, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={galleryRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12"
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={`/images/gallery${i + 1}.jpg`}
            alt={`Parallax ${i + 1}`}
            fill
            priority
            className="parallax-item object-cover"
          />
        </div>
      ))}
    </section>
  );
}
