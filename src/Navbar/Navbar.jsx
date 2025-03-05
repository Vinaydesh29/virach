import { useState, useEffect } from "react";

function Navbar() {
  const [bgColor, setBgColor] = useState("bg-gray-900");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);

      if (scrollY < 50) {
        setBgColor("bg-gray-900");
      } else if (scrollY >= 50 && scrollY < 150) {
        setBgColor("bg-[#002456]");
      } else {
        setBgColor("bg-[#001B3D]");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-16 text-white flex justify-between items-center px-6 fixed top-0 left-0 z-50 shadow-md transition-all duration-300 ${bgColor}`}
    >
      <div className="p-4 text-3xl font-bold tracking-wide font-[Anton]">
        VIRACH
      </div>

      <ul className="text-lg flex justify-evenly w-1/2">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Services</li>
        <li className="hover:text-blue-400 cursor-pointer">About Us</li>
        <li className="hover:text-blue-400 cursor-pointer">Careers</li>
      </ul>
      <div className="pr-5">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition hover:bg-blue-600 hover:scale-105">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Navbar;
