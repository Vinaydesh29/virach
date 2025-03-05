import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cpu,
  Shield,
  Server,
} from "lucide-react";

const MovingBackground = () => {
  const [rotation, setRotation] = useState(0);
  const [pulseScale, setPulseScale] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    const pulseInterval = setInterval(() => {
      setPulseScale((prev) => (prev === 1 ? 1.1 : 1));
    }, 1500);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(pulseInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 overflow-hidden relative">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-10">
        {Array.from({ length: 72 }).map((_, i) => (
          <div
            key={i}
            className="border border-blue-400/20 rounded-lg transition-all duration-1000"
            style={{
              transform: `translate(${mousePosition.x * (i % 3)}px, ${
                mousePosition.y * (i % 3)
              }px)`,
            }}
          />
        ))}
      </div>

      <div className="relative left-1/2 top-2  -translate-x-1/2 text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Software Development Solutions
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((ring) => (
          <div
            key={ring}
            className="absolute border border-blue-400/20 rounded-full"
            style={{
              width: `${ring * 24 + 300}px`,
              height: `${ring * 24 + 300}px`,
              transform: `rotate(${rotation * (ring % 2 ? 1 : -1)}deg)`,
              top: `${-ring * 12}px`,
              left: `${-ring * 12}px`,
            }}
          />
        ))}

        <div
          className="w-96 h-96 border-2 border-blue-400/30 rounded-full relative backdrop-blur-sm"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {[
            { Icon: Globe, position: "top" },
            { Icon: Code, position: "bottom" },
            { Icon: Cloud, position: "left" },
            { Icon: Database, position: "right" },
            { Icon: Cpu, position: "top-right" },
            { Icon: Shield, position: "bottom-right" },
            { Icon: Server, position: "bottom-left" },
            { Icon: Smartphone, position: "top-left" },
          ].map(({ Icon, position }, index) => (
            <div
              key={index}
              className={`absolute ${
                position === "top"
                  ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : position === "bottom"
                  ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                  : position === "left"
                  ? "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  : position === "right"
                  ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                  : position === "top-right"
                  ? "top-[15%] right-[15%]"
                  : position === "bottom-right"
                  ? "bottom-[15%] right-[15%]"
                  : position === "bottom-left"
                  ? "bottom-[15%] left-[15%]"
                  : "top-[15%] left-[15%]"
              }`}
            >
              <div className="bg-blue-900/30 p-3 rounded-full backdrop-blur-sm border border-blue-400/30 transform hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        {/* VIRACH Logo - Centered */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
          style={{ transform: `scale(${pulseScale})` }}
        >
          <div className="w-full h-full bg-blue-900/40 backdrop-blur-md rounded-2xl border border-blue-400/50 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white tracking-wider">
              VIRACH
            </span>
          </div>
        </div>
      </div>

      {/* Innovative Solutions Text - Moved to Bottom */}

      {/* Enhanced Data Visualization */}
      <div className="absolute bottom-0 w-full h-24 flex items-end justify-around px-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="relative group">
            <div
              className="w-4 bg-gradient-to-t from-blue-400/60 to-blue-300/40 rounded-t-lg transition-all duration-500"
              style={{
                height: `${20 + Math.sin(rotation * 0.01 + i) * 80}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-blue-900/80 text-blue-200 text-xs px-2 py-1 rounded">
                {Math.floor(20 + Math.sin(rotation * 0.01 + i) * 80)}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor:
              i % 2 ? "rgba(96, 165, 250, 0.4)" : "rgba(129, 140, 248, 0.4)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(${mousePosition.x * (i % 3)}px, ${
              mousePosition.y * (i % 3)
            }px)`,
            transition: "transform 0.3s ease-out",
            animation: `pulse ${1 + Math.random() * 2}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default MovingBackground;
