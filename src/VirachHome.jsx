import { useEffect, useState } from "react";

const VirachHome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] bg-[#020B2C] relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-12 py-6 flex justify-between items-center z-50 bg-opacity-90 bg-[#020B2C]">
        <a href="/" className="text-2xl font-bold text-white">
          Virach<span className="text-blue-500">.</span>
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-white hover:text-blue-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-500 transition-colors"
          >
            Solutions
          </a>
          <button className="px-6 py-2 border-2 border-blue-500 text-white rounded-full hover:bg-blue-500 transition-all">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen px-12 flex flex-col justify-center relative">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Software Development Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Transform your business with custom web and mobile apps, designed to
            accelerate your efficiency. We deliver innovative software solutions
            for a digital future.
          </p>
          <button className="px-8 py-4 bg-blue-500 text-white rounded-full text-lg hover:transform hover:-translate-y-1 transition-transform">
            Contact Us for Solutions
          </button>
        </div>

        {/* Floating Circle */}
        <div
          className="absolute right-[10%] top-1/3 w-48 h-48 rounded-full bg-blue-500 opacity-60 animate-float"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #3498db, transparent)",
          }}
        />
      </section>

      {/* Animated Waves */}
      <div className="fixed bottom-0 left-0 w-full h-[300px] pointer-events-none">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="absolute bottom-0 left-0 w-[120%] h-full transition-transform duration-300 ease-out"
            style={{
              transform: `
                translateX(${
                  Math.sin(scrollY * 0.003 + index) * (30 - index * 10)
                }px)
                translateY(${scrollY * 0.1 * (index + 1)}px)
                scale(${1 + index * 0.1})
              `,
              opacity: 0.2 + index * 0.1,
              filter: `hue-rotate(${scrollY * 0.1 + index * 20}deg)`,
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%233498db' fill-opacity='${
                0.2 + index * 0.2
              }' d='M0,${64 + index * 32}L48,${80 + index * 32}C96,${
                96 + index * 32
              },192,${128 + index * 32},288,${128 + index * 32}C384,${
                128 + index * 32
              },480,${96 + index * 32},576,${90.7 + index * 32}C672,${
                85 + index * 32
              },768,${107 + index * 32},864,${128 + index * 32}C960,${
                149 + index * 32
              },1056,${171 + index * 32},1152,${165.3 + index * 32}C1248,${
                160 + index * 32
              },1344,${128 + index * 32},1392,${112 + index * 32}L1440,${
                96 + index * 32
              }L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundSize: "120% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              bottom: `${index * 10}px`,
              left: "-10%",
            }}
          />
        ))}
      </div>

      {/* Additional content to enable scrolling */}
      <div className="h-screen" />
    </div>
  );
};

export default VirachHome;
