"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Lenis from "@studio-freight/lenis";
import styles from "./Spotlight.module.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Spotlight() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    initSpotlightAnimations();

    const handleResize = () => initSpotlightAnimations();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  function initSpotlightAnimations() {
    const images = document.querySelectorAll<HTMLDivElement>(`.${styles.img}`);
    const coverImg = document.querySelector(`.${styles.spotlightCoverImg}`);
    const introHeader = document.querySelector(
      `.${styles.spotlightIntroHeader} h1`
    );
    const outroHeader = document.querySelector(
      `.${styles.spotlightOutroHeader} h1`
    );

    if (!introHeader || !outroHeader) return;

    // Text split
    const introHeaderSplit = new SplitText(introHeader, { type: "words" });
    gsap.set(introHeaderSplit.words, { opacity: 1, y: 40 });
    gsap.to(introHeaderSplit.words, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });

    const outroHeaderSplit = new SplitText(outroHeader, { type: "words" });
    gsap.set(outroHeaderSplit.words, { opacity: 0, y: 40 });

    // Scatter directions
    const scatterDirections = [
      { x: 1.3, y: 0.7 },
      { x: -1.5, y: 1.0 },
      { x: 1.1, y: -1.3 },
      { x: -1.7, y: -0.8 },
      { x: 0.8, y: 1.5 },
      { x: -1.0, y: -1.4 },
      { x: 1.6, y: 0.3 },
      { x: -0.7, y: 1.7 },
    ];

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isMobile = screenWidth < 1000;
    const scatterMultiplier = isMobile ? 1.2 : 0.7;

    // Start/end pos
    const startPositions = Array.from(images).map(() => ({
      x: 0,
      y: 0,
      z: -800,
      scale: 0.5,
      opacity: 0,
    }));

    const endPositions = Array.from(images).map((_, i) => {
      const dir = scatterDirections[i % scatterDirections.length];
      return {
        x: dir.x * screenWidth * scatterMultiplier,
        y: dir.y * screenHeight * scatterMultiplier,
        z: 1200,
        scale: 1,
        opacity: 1,
      };
    });

    images.forEach((img, index) => {
      gsap.set(img, startPositions[index]);
    });

    if (coverImg) {
      gsap.set(coverImg, { z: -500, scale: 0.5, opacity: 0 });
    }

    // ScrollTrigger anim
    ScrollTrigger.create({
      trigger: `.${styles.spotlight}`,
      start: "top top",
      end: `+=${window.innerHeight * 10}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        images.forEach((img, index) => {
          const stagger = index * 0.02; // lebih kecil biar smooth
          let imageProgress = Math.max(0, (progress - stagger) * 2);

          const start = startPositions[index];
          const end = endPositions[index];

          gsap.set(img, {
            x: gsap.utils.interpolate(start.x, end.x, imageProgress),
            y: gsap.utils.interpolate(start.y, end.y, imageProgress),
            z: gsap.utils.interpolate(start.z, end.z, imageProgress),
            scale: gsap.utils.interpolate(
              start.scale,
              end.scale,
              imageProgress
            ),
            opacity: gsap.utils.interpolate(
              start.opacity,
              end.opacity,
              imageProgress
            ),
          });
        });

        if (coverImg) {
          const coverProgress = Math.max(0, (progress - 0.6) * 2);
          gsap.set(coverImg, {
            z: gsap.utils.interpolate(-500, 0, coverProgress),
            scale: gsap.utils.interpolate(0.5, 1, coverProgress),
            opacity: gsap.utils.interpolate(0, 1, coverProgress),
          });
        }

        // Outro text fade in
        gsap.to(outroHeaderSplit.words, {
          opacity: progress > 0.7 ? 1 : 0,
          y: progress > 0.7 ? 0 : 40,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        });
      },
    });
  }

  return (
    <>
      <section className={styles.intro}>
        <h1>ini judul 1</h1>
      </section>

      <section className={styles.spotlight}>
        <div className={styles.spotlightImages}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div className={styles.img} key={i}>
              <img src={`/images/${(i % 8) + 1}.png`} alt={`Gallery ${i}`} />
            </div>
          ))}
        </div>

        <div className={styles.spotlightCoverImg}>
          <img src="/images/Page 1.jpg" alt="cover" />
        </div>

        <div className={styles.spotlightIntroHeader}>
          <h1>Our Gallery</h1>
        </div>
        <div className={styles.spotlightOutroHeader}>
          <h1>Dont Miss Us</h1>
        </div>
      </section>

      <section className={styles.outro}>
        <h1>Ini Judul 2</h1>
      </section>
    </>
  );
}
