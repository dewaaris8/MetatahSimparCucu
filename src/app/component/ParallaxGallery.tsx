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
      gsap.fromTo(
        img,
        { yPercent: -15, scale: 1.2 }, // mulai agak zoom & geser
        {
          yPercent: 15, // turun sedikit saat scroll
          scale: 1, // zoom-out smooth
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={galleryRef} className="space-y-16 p-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden "
        >
          <Image
            src={`/images/scroll${i + 1}.JPG`}
            alt={`Parallax ${i + 1}`}
            fill
            priority
            loading="eager"
            className="parallax-item object-cover"
          />
        </div>
      ))}
    </section>
  );
}
