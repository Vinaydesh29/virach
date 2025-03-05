import React from "react";
import {
  Play,
  Code,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./assets/VIRACH (1).png";
const ServiceCard = ({ icon: Icon, title, description, imageUrl }) => (
  <div className="bg-[#051944] p-8 rounded-2xl group hover:bg-[#072156] transition-colors">
    <div className="mb-6">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    </div>
    <Icon className="w-12 h-12 text-[#4BA3FF] mb-4" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const VirachNav = () => {
  return (
    <div className="min-h-screen bg-[#020B2D] text-white">
      {/* Updated Navigation */}
      <nav className="fixed w-full z-50 bg-[#020B2D]/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <img
              src={Logo}
              alt="Virach Logo"
              className="h-16 w-auto hover:opacity-90 transition-opacity"
            />
            <div className="ml-2 hidden md:block">
              <span className="text-sm text-[#4BA3FF] font-bold">
                INNOVATE. BUILD. TRANSFORM
              </span>
            </div>
          </a>
          <div className="flex gap-8 items-center">
            <a
              href="#home"
              className="hover:text-[#4BA3FF] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#4BA3FF] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="bg-[#4BA3FF] text-white px-6 py-2 rounded-full hover:bg-[#3994FF] transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
};

export default VirachNav;
