"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/slideshow1.JPG",
  "/images/slideshow2.JPG",
  "/images/slideshow3.JPG",
  "/images/slideshow4.JPG",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  // ini khusus slideshow aja
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1000); // ganti gambar tiap 4 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[80%] h-[400px] bg-black relative overflow-hidden">
      {slides.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide ${i}`}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
