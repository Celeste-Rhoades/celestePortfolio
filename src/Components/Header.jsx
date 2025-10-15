import { useState } from "react";
import Celeste from "../assets/images/Celeste.png";

const Header = () => {
  const name = "CELESTE RHOADES";
  const [sparkleIndices, setSparkleIndices] = useState([]);

  const burstConfigs = [
    [
      { angle: "0deg", color: "#5EEAD4", char: "★" },
      { angle: "72deg", color: "#FDA4AF", char: "✩" },
      { angle: "144deg", color: "#BAE6FD", char: "★" },
      { angle: "216deg", color: "#ef94ad", char: "✩" },
      { angle: "288deg", color: " #b5a4d7", char: "★" },
    ],
    [
      { angle: "0deg", color: "#BAE6FD", char: "✩" },
      { angle: "90deg", color: "#ef94ad", char: "★" },
      { angle: "180deg", color: "#5EEAD4", char: "✩" },
      { angle: "270deg", color: "#FDA4AF", char: "✩" },
    ],
    [
      { angle: "0deg", color: "#FDA4AF", char: "★" },
      { angle: "72deg", color: "#5EEAD4", char: "✩" },
      { angle: "144deg", color: "#b5a4d7", char: "★" },
      { angle: "216deg", color: "#BAE6FD", char: "✩" },
      { angle: "288deg", color: "#ef94ad", char: "★" },
    ],
    [
      { angle: "0deg", color: "#b5a4d7", char: "★" },
      { angle: "90deg", color: "#BAE6FD", char: "✩" },
      { angle: "180deg", color: "#FDA4AF", char: "★" },
      { angle: "270deg", color: "#5EEAD4", char: "✩" },
    ],
  ];

  const handleInteraction = (index) => {
    setSparkleIndices((prev) => [...prev, index]);
  };

  const handleAnimationEnd = (index) => {
    setSparkleIndices((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="mt-4 text-center text-white md:mt-8">
      <img
        src={Celeste}
        alt="Celeste Rhoades"
        className="mx-auto mt-6 h-24 w-24 rounded-full ring-4 ring-white/20 transition-all duration-300 md:mt-10 md:h-28 md:w-28 dark:ring-white/10"
      />

      <div className="font-manrope mx-2 mt-4 inline-flex rounded-2xl bg-white/10 px-2 py-1 text-3xl whitespace-nowrap shadow-xl backdrop-blur-3xl transition-all duration-300 sm:text-4xl md:mt-6 md:text-7xl dark:bg-black/20">
        {name.split("").map((char, index) => {
          const config = burstConfigs[index % burstConfigs.length];
          return (
            <span
              key={index}
              className={`relative inline-block cursor-default transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-105 ${
                char === " " ? "w-2 md:w-4" : ""
              } hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 hover:bg-clip-text hover:text-transparent`}
              onMouseEnter={() => handleInteraction(index)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleInteraction(index);
              }}
              onAnimationEnd={() => handleAnimationEnd(index)}
            >
              {char}
              {sparkleIndices.includes(index) && (
                <span className="sparkle-burst-mobile md:sparkle-burst">
                  {config.map((star, i) => (
                    <span
                      key={i}
                      className="burst-star-mobile md:burst-star"
                      style={{ "--burst-angle": star.angle, color: star.color }}
                    >
                      {star.char}
                    </span>
                  ))}
                </span>
              )}
            </span>
          );
        })}
      </div>

      <div className="mt-0 px-4 text-base md:text-2xl">
        <p className="font-poiretOne mt-4 inline-flex rounded-xl border border-white/20 bg-black/20 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-all duration-300 md:mt-6 md:px-6 dark:border-white/10 dark:bg-black/20">
          I&apos;m a software engineer who loves stargazing, great conversation,
          and long walks on the beach
        </p>
      </div>
    </div>
  );
};

export default Header;
