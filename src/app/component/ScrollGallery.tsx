"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function GallerySection() {
  useEffect(() => {
    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% -200%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl7.to(".our-work-txt-div", { height: "60vh" }, "height");
    tl7.to(".our-work-txt", { height: "60vh" }, "height");
    tl7.to("#our", { left: "0" }, "height");
    tl7.to("#gallery", { right: "0" }, "height");
    tl7.to(".scroll-img", { marginTop: "-500%" });
  }, []);

  return (
    <section className="part-7 flex items-center justify-center w-full h-screen bg-[#F8FAE5] relative overflow-hidden">
      {/* Title wrapper */}
      <div className="our-work-txt absolute w-[60vw] h-0 z-10 overflow-hidden">
        <h1
          id="our"
          className="absolute top-0 text-[#784522] text-[5vw] font-[Parisienne]"
          style={{
            left: "32%",
            transform: "translate(-20%, -50%)",
          }}
        >
          Our
        </h1>
        <h1
          id="gallery"
          className="absolute bottom-0 text-[#784522] text-[5vw] font-[Parisienne]"
          style={{
            right: "32%",
            transform: "translate(20%, 50%)",
          }}
        >
          Gallery
        </h1>
      </div>

      {/* Scrollable images */}
      <div className="our-work-txt-div relative overflow-hidden flex items-center justify-center w-[60vw] h-0 bg-white">
        <div className="scroll-work w-full h-[60vh] overflow-hidden">
          <div className="scroll-img w-full mt-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col">
            <Image src="/img/4.png" alt="gallery 1" width={1200} height={800} className="w-full h-auto" />
            <Image src="/img/2.jpg" alt="gallery 2" width={1200} height={800} className="w-full h-auto" />
            <Image src="/img/3.jpg" alt="gallery 3" width={1200} height={800} className="w-full h-auto" />
            <Image src="/img/5.jpg" alt="gallery 4" width={1200} height={800} className="w-full h-auto" />
            <Image src="/img/cvundangan.png" alt="gallery 5" width={1200} height={800} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
