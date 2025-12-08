import { useState } from "react";
import Celeste from "../assets/images/Celeste.png";

const Header = () => {
  const name = "CELESTE RHOADES";
  const [sparkleIndices, setSparkleIndices] = useState([]);

  const burstConfigs = [
    [
      { angle: "0deg", color: "#5EEAD4", char: "★" }, // teal-300
      { angle: "72deg", color: "#FDA4AF", char: "✩" }, // rose-300
      { angle: "144deg", color: "#BAE6FD", char: "★" }, // sky-200
      { angle: "216deg", color: "#ef94ad", char: "✩" }, // lavender
      { angle: "288deg", color: " #b5a4d7", char: "★" }, // dusty rose
    ],
    [
      { angle: "0deg", color: "#BAE6FD", char: "✩" }, // sky-200
      { angle: "90deg", color: "#ef94ad", char: "★" }, // dusty rose
      { angle: "180deg", color: "#5EEAD4", char: "✩" }, // teal-300
      { angle: "270deg", color: "#FDA4AF", char: "✩" }, // rose-300
    ],
    [
      { angle: "0deg", color: "#FDA4AF", char: "★" }, // rose-300
      { angle: "72deg", color: "#5EEAD4", char: "✩" }, // teal-300
      { angle: "144deg", color: "#b5a4d7", char: "★" }, // lavender
      { angle: "216deg", color: "#BAE6FD", char: "✩" }, // sky-200
      { angle: "288deg", color: "#ef94ad", char: "★" }, // dusty rose
    ],
    [
      { angle: "0deg", color: "#b5a4d7", char: "★" }, // dusty rose
      { angle: "90deg", color: "#BAE6FD", char: "✩" }, // sky-200
      { angle: "180deg", color: "#FDA4AF", char: "★" }, // rose-300
      { angle: "270deg", color: "#5EEAD4", char: "✩" }, // teal-300
    ],
  ];
  const handleMouseEnter = (index) => {
    setSparkleIndices((prev) => [...prev, index]);
  };

  const handleAnimationEnd = (index) => {
    setSparkleIndices((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="mt-8 text-center text-white">
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
              } hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 hover:bg-clip-text hover:text-transparent`}
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
        <p className="font-poiretOne mt-6 inline-flex rounded-xl border border-white/20 bg-black/35 px-6 py-1 text-2xl text-white shadow-xl backdrop-blur-md">
          I&apos;m a software engineer who loves stargazing, great conversation,
          and long walks on the beach
        </p>
      </div>
    </div>
  );
};

export default Header;
