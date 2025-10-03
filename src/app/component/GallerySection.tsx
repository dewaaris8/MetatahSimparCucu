"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function zGallerySection() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: "50% 50%",
          end: "300% -200%",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      // buka box putih
      tl7.to(".our-work-txt-div", { height: "70vh" }, "open");

      // animasi teks ikut box
      tl7.to(
        "#our",
        {
          x: "-28vw", // geser kiri
          y: "-30vh", // geser atas
          fontSize: "2.5vw",
        },
        "open"
      );
      tl7.to(
        "#gallery",
        {
          x: "28vw", // geser kanan
          y: "30vh", // geser bawah
          fontSize: "2.5vw",
        },
        "open"
      );

      // jalanin gambar
      tl7.to(".scroll-img", { marginTop: "-500%" });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="part-7 flex items-center justify-center w-full h-screen relative overflow-hidden">
      {/* 🔹 TEXT sejajar awal di tengah */}
      <div className="absolute flex gap-4 z-20">
        <h1 id="our" className="text-[#ffffff] text-[2.5vw] font-[Parisienne]">
          Our
        </h1>
        <h1
          id="gallery"
          className="text-[#ffffff] text-[2.5vw] font-[Parisienne]"
        >
          Gallery
        </h1>
      </div>

      {/* 🔹 Box putih + gambar */}
      <div className="our-work-txt-div relative overflow-hidden flex items-center justify-center w-[100%] h-0  z-10">
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
              src="/images/gallery4.jpg"
              alt="gallery 5"
              width={1200}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
