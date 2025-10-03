"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Countdown() {
  const targetDate = new Date("2025-10-12T00:00:00").getTime(); // ubah ke tanggal event
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Refs untuk animasi
  const refs = {
    days: useRef<HTMLSpanElement>(null),
    hours: useRef<HTMLSpanElement>(null),
    minutes: useRef<HTMLSpanElement>(null),
    seconds: useRef<HTMLSpanElement>(null),
  };

  // Label singkat
  const labels: Record<string, string> = {
    days: "D",
    hours: "H",
    minutes: "M",
    seconds: "S",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const newTime = {
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        };

        // animasi flip kalau angka berubah
        Object.entries(newTime).forEach(([unit, value]) => {
          if (timeLeft[unit as keyof typeof timeLeft] !== value) {
            const el = refs[unit as keyof typeof refs].current;
            if (el) {
              gsap.fromTo(
                el,
                { rotateX: -90, opacity: 0 },
                { rotateX: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" }
              );
            }
          }
        });

        setTimeLeft(newTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className="flex text-center justify-center items-center w-full">
      {Object.entries(timeLeft).map(([unit, value], i) => (
        <div key={i} className="flex  items-end text-white p-4  w-[70px]">
          <span
            ref={refs[unit as keyof typeof refs]}
            className="text-2xl font-bold"
          >
            {value}
          </span>
          <span className="uppercase text-[12px] ml-2 text-gray-400">
            {labels[unit]}
          </span>
        </div>
      ))}
    </div>
  );
}
