import { useState } from "react";
import Celeste from "../assets/images/Celeste.png";

const Header = () => {
  const name = "CELESTE RHOADES";
  const [sparkleIndices, setSparkleIndices] = useState([]);

  const burstConfigs = [
    [
      { angle: "0deg", color: "#18eece", char: "★" },
      { angle: "72deg", color: "#9bff7c", char: "✩" },
      { angle: "144deg", color: "#3da0f1", char: "★" },
      { angle: "216deg", color: "#b286e7", char: "✩" },
      { angle: "288deg", color: "#ff8ad2", char: "★" },
    ],
    [
      { angle: "0deg", color: "#b286e7", char: "✩" },
      { angle: "90deg", color: "#f472b6", char: "★" },
      { angle: "180deg", color: "#18eece", char: "✩" },
      { angle: "270deg", color: "#9bff7c", char: "✩" },
    ],

    [
      { angle: "0deg", color: "#f472b6", char: "✩ " },
      { angle: "72deg", color: "#b286e7", char: "★" },
      { angle: "144deg", color: "#9bff7c", char: "✩" },
      { angle: "216deg", color: "#18eece", char: "★" },
      { angle: "288deg", color: "#3da0f1", char: "✩" },
    ],
    [
      { angle: "0deg", color: "#3da0f1", char: "★" },
      { angle: "90deg", color: "#18eece", char: "✩" },
      { angle: "180deg", color: "#f472b6", char: "★" },
      { angle: "270deg", color: "#b286e7", char: "✩" },
    ],
  ];

  const handleMouseEnter = (index) => {
    setSparkleIndices((prev) => [...prev, index]);
  };

  const handleAnimationEnd = (index) => {
    setSparkleIndices((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="text-center text-white">
      <img src={Celeste} className="mx-auto mt-10 h-28 w-28 rounded-full" />

      {/* Gradient hover on each letter */}
      <div className="font-manrope bg-blue/10 mt-6 inline-flex flex-wrap justify-center gap-1 rounded-2xl px-1 py-1 text-7xl shadow-xl backdrop-blur-3xl">
        {name.split("").map((char, index) => {
          const config = burstConfigs[index % burstConfigs.length];
          return (
            <span
              key={index}
              className={`relative inline-block cursor-default transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ${
                char === " " ? "w-4" : ""
              } hover:text-stroke-black hover:bg-gradient-to-t hover:from-purple-400 hover:via-cyan-500 hover:to-blue-700 hover:bg-clip-text hover:text-transparent`}
              onMouseEnter={() => handleMouseEnter(index)}
              onAnimationEnd={() => handleAnimationEnd(index)}
            >
              {char}
              {sparkleIndices.includes(index) && (
                <span className="sparkle-burst">
                  {config.map((star, i) => (
                    <span
                      key={i}
                      className="burst-star"
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

      <div className="mt-0 text-2xl">
        <p className="font-ralewaySemi mt-6 inline-flex rounded-xl border border-white/20 bg-black/35 px-6 py-1 text-2xl text-white shadow-xl backdrop-blur-md">
          I&apos;m a software engineer who loves stargazing, great conversation,
          and long walks on the beach
        </p>
      </div>
    </div>
  );
};

export default Header;
