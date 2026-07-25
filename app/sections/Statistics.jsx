"use client";
import { useEffect, useRef, useState } from "react";

// Simple Auto-Cycling Window Carousel
const TrainWindow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return ( 
    <div className="retro-box pixel-shadow p-3 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[34rem] desktop:h-[24rem] shrink-0 flex items-center justify-center bg-black/40">
      <div className="relative w-full h-full border-4 border-amber-100/30 rounded-md overflow-hidden bg-zinc-900">
        {images.map((imgUrl, idx) => (
          <img
            key={idx}
            src={imgUrl}
            alt={`Window ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { text: "200+ Attendees", hoverColor: "hover:text-blue-700" },
    { text: "130 Participants", hoverColor: "hover:text-pink-400" },
    { text: "52 Completed Projects", hoverColor: "hover:text-yellow-400" },
  ];

  const windowCar1 = [
    "https://i.ibb.co/HD2P9nVg/Screenshot-2026-07-23-202537.png",
    "https://i.ibb.co/ymhXXTwG/Screenshot-2026-07-23-202555.png",
    "https://i.ibb.co/JwvtQGNS/Screenshot-2026-07-23-202844.png",
    "https://i.ibb.co/yFf0xK9C/Shark-Byte-picture.png",
    "https://i.ibb.co/yFCCYxF5/Whats-App-Image-2026-07-01-at-1-05-58-PM.jpg",
    "https://i.ibb.co/bMjfhQWs/Whats-App-Image-2026-07-18-at-6-02-22-PM.jpg",
  ];

  const windowCar2 = [...windowCar1];
  const windowCar3 = [...windowCar1];

  const sectionRef = useRef(null);
  const trainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trainRef.current) return;

      const section = sectionRef.current;
      const train = trainRef.current;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Distance available to scroll vertically while sticky
      const totalScrollableDistance = sectionHeight - viewportHeight;
      // Maximum horizontal travel distance for the train
      const maxHorizontalScroll = train.scrollWidth - window.innerWidth;

      if (totalScrollableDistance <= 0 || maxHorizontalScroll <= 0) return;

      // Current vertical scroll distance inside the section
      const currentScroll = window.scrollY - sectionTop;

      // Normalize between 0 and 1
      const progress = Math.min(
        Math.max(currentScroll / totalScrollableDistance, 0),
        1
      );

      // Translate train wrapper horizontally
      train.style.transform = `translateX(-${progress * maxHorizontalScroll}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative w-full h-[100rem] stats-bg background-repeat"
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          ref={trainRef}
          id="train-wrapper"
          className="flex flex-row bg-[url(https://i.ibb.co/TBVdYSgR/image.png)] bg-cover items-center gap-[4vw] px-[6vw] w-max h-[50rem] z-10 shrink-0 transition-transform duration-75 ease-out"
        >
          {/* 1. THE TITLE */}
          <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-10 desktop:py-30 max-h-[750px]:px-8 max-h-[750px]:py-3 shrink-0">
            <h1 className="font-bold text-center text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl max-h-[750px]:text-2xl">
              Last Year We Had...
            </h1>
          </div>

          {/* 2. THE STATS BOX */}
          <div className="retro-box pixel-shadow px-[6vw] py-[3vw] tablet:px-12 tablet:py-5 laptop:px-16 laptop:py-6 desktop:px-10 desktop:py-6 max-h-[750px]:px-8 max-h-[750px]:py-3 shrink-0">
            <div className="flex flex-col gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12 max-h-[750px]:gap-4">
              {stats.map((stat, index) => (
                <h2
                  key={index}
                  className={`font-bold text-[7vw] tablet:text-[5vw] laptop:text-4xl desktop:text-5xl max-h-[750px]:text-2xl ${stat.hoverColor}`}
                >
                  {stat.text}
                </h2>
              ))}
            </div>
          </div>

          {/* 3. WINDOW CAROUSELS */}
          <TrainWindow images={windowCar1} interval={2500} />
          <TrainWindow images={windowCar2} interval={2000} />
          <TrainWindow images={windowCar3} interval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;