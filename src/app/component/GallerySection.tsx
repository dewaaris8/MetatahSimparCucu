"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  useEffect(() => {
    const textEl = document.querySelector(".text-trigger");

    if (!textEl) return; // ✅ amanin kalau element tidak ada

    let ctx = gsap.context(() => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: () =>
            textEl.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight / 2, // posisi dinamis
          end: "300% top",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      // buka box putih dari tengah
      tl7.fromTo(
        ".our-work-txt-div",
        { height: 0, transformOrigin: "center center" },
        { height: "70vh", ease: "power2.out" },
        "open"
      );

      // teks besar → kecil + geser
      tl7.fromTo(
        "#our",
        { x: 0, y: 0, fontSize: "30px" },
        { x: "-28vw", y: "-30vh", fontSize: "10px" },
        "open"
      );

      tl7.fromTo(
        "#gallery",
        { x: 0, y: 0, fontSize: "30px" },
        { x: "28vw", y: "30vh", fontSize: "10px" },
        "open"
      );

      // gambar mulai jalan setelah box kebuka
      tl7.to(".scroll-img", { marginTop: "-500%" }, ">");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="part-7 flex items-center justify-center w-full h-[100vh] relative overflow-hidden">
      {/* 🔹 TEXT awal center */}
      <div className="absolute flex gap-4 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-trigger">
        <h1
          id="our"
          className="text-[#ffffff] text-[30px] md:text-[20px] font-[Parisienne]"
        >
          Our
        </h1>
        <h1
          id="gallery"
          className="text-[#ffffff] text-[30px] md:text-[20px] font-[Parisienne]"
        >
          Gallery
        </h1>
      </div>

      {/* 🔹 Box putih + gambar */}
      <div className="our-work-txt-div relative overflow-hidden flex items-center justify-center w-full h-0 z-10 bg-white">
        <div className="scroll-work w-full h-[70vh] overflow-hidden">
          <div className="scroll-img w-full mt-0 flex flex-col">
            <Image
              src="/images/gallery1.jpg"
              alt="gallery 1"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/gallery2.jpg"
              alt="gallery 2"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/gallery3.jpg"
              alt="gallery 3"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/gallery4.jpg"
              alt="gallery 4"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/gallery5.jpg"
              alt="gallery 5"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/gallery3.jpg"
              alt="gallery 6"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
