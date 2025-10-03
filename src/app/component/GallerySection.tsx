"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ZGallerySection() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: "center center", // baru mulai pas section pas di tengah layar
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
        { x: 0, y: 0, fontSize: "8vw" },
        { x: "-28vw", y: "-30vh", fontSize: "2.5vw" },
        "open"
      );

      tl7.fromTo(
        "#gallery",
        { x: 0, y: 0, fontSize: "8vw" },
        { x: "28vw", y: "30vh", fontSize: "2.5vw" },
        "open"
      );

      // gambar mulai jalan setelah box kebuka
      tl7.to(".scroll-img", { marginTop: "-500%" }, ">");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="part-7 flex items-center justify-center w-full h-screen relative overflow-hidden">
      {/* 🔹 TEXT awal center */}
      <div className="absolute flex gap-4 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          id="our"
          className="text-[#ffffff] text-[8vw] md:text-[4vw] font-[Parisienne]"
        >
          Our
        </h1>
        <h1
          id="gallery"
          className="text-[#ffffff] text-[8vw] md:text-[4vw] font-[Parisienne]"
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
