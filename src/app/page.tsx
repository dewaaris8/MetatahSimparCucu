"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Preloader from "./component/Preloader";
import Spotlight from "./component/Spotlight/Spotlight";
import MarqueeGallery from "./component/MarqueeGallery";
import ScrollGallery from "./component/ScrollGallery";
import ParallaxGallery from "./component/ParallaxGallery";
import Countdown from "./component/Countdown";
import ReceptionBox from "./component/ReceptionBox";
import GallerySection from "./component/GallerySection";
import MaskedGallery from "./component/MaskedGallery";
import GuestForm from "./component/GuestForm";
import ParallaxFamily from "./component/ParallaxFamily";
import CardParallax from "./component/CardParallax";
import Slideshow from "./component/Slideshow";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const [showPreloader, setShowPreloader] = useState(true);
  const [current, setCurrent] = useState(0);
  const to = searchParams.get("to");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % slides.length);
  //   }, 1000); // ganti gambar tiap 4 detik
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      {showPreloader && <Preloader onFinish={() => setShowPreloader(false)} />}

      {!showPreloader && (
        <ReactLenis root options={{ duration: 8 }}>
          <div className="flex h-screen justify-end">
            {/* Kiri */}
            <div className="w-[calc(100%-425px)]  h-screen fixed top-0 left-0">
              <Image
                src="/images/gallery7.jpg"
                alt="Wedding Background"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Kanan */}
            {/* <div className="relative min-h-screen w-full bg-fixed bg-center bg-cover">
              
            </div> */}
            <div className="max-w-[425px] overflow-hidden text-white relative w-full h-max color-[#000000] ">
              {/* image video */}
              <div className="fixed right-0 top-0 w-[425px] h-screen -z-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/videos/bg2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* overlay gelap */}
                <div className="absolute inset-0 bg-black/45" />
              </div>

              {/* hero */}
              <div className="text-center absolute top-4 w-full">
                <h3 className="font-Kodchasan">Dear : </h3>
                {to ? (
                  <p className="text-lg mt-2 text-[18px] font-Kodchasan ">
                    {to}
                  </p>
                ) : (
                  <p className="text-lg mt-2 text-[18px] font-Kodchasan ">
                    Tamu Undangan!
                  </p>
                )}
              </div>

              <div className="h-[100vh] relative flex items-center justify-center p-8 ">
                {/* <Image
                src="/images/Gallery 1.jpg"
                alt="Wedding Background"
                fill
                priority
                className="object-cover object-center"
              /> */}
                {/* <div className="absolute inset-0 bg-black/45" /> */}
                <div className="text-center z-10 text-white w-full flex flex-col">
                  <h3 className="font-Kodchasan uppercase">Metatah</h3>
                  <h1 className="text-[50px] font-MeieScript ">Cucu Simpar</h1>
                  <h3 className="font-mono">12 - 10 - 25</h3>
                </div>
              </div>
              {/* hero */}
              {/* peserta */}
              <div className="mt-10 p-8 w-full">
                <div className="w-full text-center h-max">
                  <div className="">
                    <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                      Om Swastiastu
                    </h1>
                    <p className="font-Kodchasan  text-justify text-[12px] mt-3">
                      Atas rahmat dan karunia Ida Sang Hyang Widhi Wasa/Tuhan
                      Yang Maha Esa, kami dengan hormat mengundang
                      saudara-saudara pada upacara potong gigi (Manusa Yadnya
                      Metatah)
                    </p>
                  </div>
                  <div className="w-full mt-10 flex flex-col gap-5">
                    {/* <div className="w-full flex flex-col gap-2 h-max">
                    <div
                      className="w-full relative h-[350px] bg-black"
                      style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
                    >
                      <Image
                        src="/images/yuka.jpg"
                        alt="Wedding Background"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="w-[100%] text-left">
                      <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                        Dewa Ayu Carltina Dewi
                      </h1>
                      <p className="font-Kodchasan  text-[12px] mt-3">
                        Son of Mr. Dewa Ketut Putra & Mrs. Dewi Ambayuni
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-end flex-col gap-2 h-max">
                    <div
                      className="w-full relative h-[350px] bg-black"
                      style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
                    >
                      <Image
                        src="/images/bayu.jpg"
                        alt="Wedding Background"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="w-[100%] text-right">
                      <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                        Dewa Gede Bayu Pradana Putra
                      </h1>
                      <p className="font-Kodchasan  text-[12px] mt-3">
                        Son of Mr. Dewa Ketut Putra & Mrs. Dewi Ambayuni
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 h-max">
                    <div
                      className="w-full relative h-[350px] bg-black"
                      style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
                    >
                      <Image
                        src="/images/ais.jpg"
                        alt="Wedding Background"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="w-[100%] text-left">
                      <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                        Dewa Gede Arista Widana Putra
                      </h1>
                      <p className="font-Kodchasan  text-[12px] mt-3">
                        Son of Mr. Dewa Ketut Putra & Mrs. Dewi Ambayuni
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex items-end flex-col gap-2 h-max">
                    <div
                      className="w-full relative h-[350px] bg-black"
                      style={{ boxShadow: "10px 10px 20px rgba(0,0,0,0.6)" }}
                    >
                      <Image
                        src="/images/tump.jpg"
                        alt="Wedding Background"
                        fill
                        priority
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="w-[80%] text-right">
                      <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                        Dewa Gede Lion Trump Putra
                      </h1>
                      <p className="font-Kodchasan  text-[12px] mt-3">
                        Son of Mr. Dewa Putu Alit & Mrs. Eva Yunita
                      </p>
                    </div>
                  </div> */}
                    <ParallaxFamily />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-end flex-col gap-2 h-max">
                {/* <div className="w-full my-5 h-[280px] bg-black"></div> */}
                {/* <div className="w-[80%] text-right">
                        <h1 className="font-Kodchasan text-[20px] font-semibold uppercase">
                          Om Swastiastu
                        </h1>
                        <p className="font-Kodchasan  text-[12px] mt-3">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio praesentium
                        </p>
                      </div> */}
              </div>
              {/* peserta */}
              {/*countdown*/}
              <div className="w-full px-6 py-[150px] flex flex-col justify-center items-center h-max">
                <Slideshow />
                <Countdown />
              </div>
              {/* acara */}
              <div className="w-full p-8 h-max">
                <ReceptionBox />
              </div>

              {/* rsvp */}
              <div className="w-full ">
                <div className="w-full h-[200px] mt-14 relative">
                  <Image
                    src="/images/bgrsvp.jpg"
                    alt="Wedding Background"
                    fill
                    priority
                    className="object-cover z-0 object-center"
                  />

                  {/* overlay text */}
                  <div className="absolute top-0 left-0 flex items-center justify-center">
                    <h1 className="text-[12px] font-mono tracking-[5px] w-max border-white/30 text-white backdrop-blur-xl px-3 py-2  z-10">
                      RSVP
                    </h1>
                  </div>
                </div>
              </div>

              <div className=" h-[100vh] relative px-8 w-full">
                <GuestForm />
              </div>
              <div className="w-full h-max p-8">
                <GallerySection />
              </div>
              <div className="w-full h-max py-[50px] mb-80  ">
                <ParallaxGallery />
              </div>
              <div className="w-full h-max mt-[100px]">
                <CardParallax />
              </div>
              <div className="w-full px-8 h-[50vh] flex flex-col justify-start items-center mt-[-300px] text-center">
                <div className="mt-[200px]">
                  <h3 className="font-mono">12 - 10 - 25</h3>
                  <h1 className="text-[50px] font-MeieScript ">Terima Kasih</h1>
                  <p className="font-Kodchasan text-center text-[12px]">
                    Ucapan dan doa yang kamu sampaikan adalah anugerah berarti
                    bagi kami. Kami menantikan momen istimewa untuk merayakannya
                    bersama.
                  </p>
                </div>
              </div>
            </div>
            {/* kanan */}
          </div>
        </ReactLenis>
      )}
    </>
  );
}
