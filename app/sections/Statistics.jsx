"use client";
import { useEffect, useRef, useState } from "react";

// Ranomized Auto-Cycling Window Carousel
const TrainWindow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * images.length));
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return ( 
    <div className="retro-box pixel-shadow p-3 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[30rem] desktop:h-[23rem] shrink-0 flex items-center justify-center bg-black/40">
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
    "https://i.ibb.co/5NYNDdY/image.png",
    "https://i.ibb.co/rRJpc6PT/image.png",
    "https://i.ibb.co/fzMbkWGC/image.png",
    "https://i.ibb.co/kg784D8H/image.png",
    "https://i.ibb.co/Cs9ht4jd/image.png",
    "https://i.ibb.co/RG0f1Cp7/image.png",
    "https://i.ibb.co/B5KV5qcQ/image.png",
    "https://i.ibb.co/ycXxPmMd/image.png",
    "https://i.ibb.co/gbjRFhmM/image.png",
    "https://i.ibb.co/PvcKpn4c/image.png",
    "https://i.ibb.co/twkZhD2k/image.png",
    "https://i.ibb.co/WNJzVzXm/image.png",
    "https://i.ibb.co/p6yBcbYb/image.png",
    "https://i.ibb.co/RFW6y6W/image.png",
    "https://i.ibb.co/vC2RR4jD/image.png",
    "https://i.ibb.co/MxqdrsNT/image.png",
    "https://i.ibb.co/1fpWj8Pm/image.png",
    "https://i.ibb.co/TMvZhkN9/image.png",
    "https://i.ibb.co/0pXFFKYW/image.png",
    "https://i.ibb.co/5hkWRj8B/image.png",
    "https://i.ibb.co/1tPHHnsm/image.png",
    "https://i.ibb.co/Y7Vf2v35/image.png",
    "https://i.ibb.co/jv2vMHGT/image.png",
    "https://i.ibb.co/qLrbcRfM/image.png",
    "https://i.ibb.co/1c76jK3/image.png",
    "https://i.ibb.co/LD4xSpxq/image.png"
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

      const totalScrollableDistance = sectionHeight - viewportHeight;
      const maxHorizontalScroll = train.scrollWidth - window.innerWidth;

      if (totalScrollableDistance <= 0 || maxHorizontalScroll <= 0) return;

      const currentScroll = window.scrollY - sectionTop;

      const progress = Math.min(
        Math.max(currentScroll / totalScrollableDistance, 0),
        1
      );

      train.style.transform = `translateX(-${progress * maxHorizontalScroll}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative w-full h-[100rem] bg-[url(https://i.ibb.co/gMktwWh5/Sharkbyte-Website-Page-2.png)] bg-fixed bg-center bg-no-repeat"
    >
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div
          ref={trainRef}
          id="train-wrapper"
          className="flex flex-row items-center gap-[4vw] px-[6vw] w-max h-[50rem] z-10 shrink-0 transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('https://i.ibb.co/VRWRBSH/Pixel-Train-Second-Half-Page-4.png'), url('https://i.ibb.co/pvLry1fW/Pixel-Train-First-Half-Page-3.png')`,
            backgroundPosition: "left center, right center",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "50% 100%, 50% 100%",
          }}
        >
          {/* 1. THE TITLE BOX */}
        <div className="retro-box pixel-shadow p-3 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[25rem] desktop:h-[23rem] ml-[20vw] shrink-0 flex items-center justify-center bg-black/40">
          <div className="relative w-full h-full border-4 border-amber-100/30 rounded-md overflow-hidden bg-zinc-900 flex items-center justify-center p-4">
            <h1 className="font-bold text-center text-white text-[6vw] tablet:text-[4vw] laptop:text-3xl desktop:text-4xl max-h-[750px]:text-xl">
              Last Year We Had...
            </h1>
          </div>
        </div>

        {/* 2. THE STATS BOX */}
        <div className="retro-box pixel-shadow p-3 relative overflow-hidden w-[22rem] h-[16rem] tablet:w-[28rem] tablet:h-[20rem] desktop:w-[25rem] desktop:h-[23rem] shrink-0 flex items-center justify-center bg-black/40">
          <div className="relative w-full h-full border-4 border-amber-100/30 rounded-md overflow-hidden bg-zinc-900 flex flex-col justify-center items-center gap-3 tablet:gap-5 laptop:gap-6 p-4">
            {stats.map((stat, index) => (
              <h2
                key={index}
                className={`hover:cursor-default font-bold text-center text-[4.5vw] tablet:text-[3vw] laptop:text-xl desktop:text-2xl max-h-[750px]:text-base ${stat.hoverColor}`}
              >
                {stat.text}
              </h2>
            ))}
          </div>
        </div>

          {/* 3. WINDOW CAROUSELS */}
          <TrainWindow images={windowCar1} interval={3000} />
          <TrainWindow images={windowCar2} interval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Statistics;