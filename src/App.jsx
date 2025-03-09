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
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "./assets/VIRACH_updated.png";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [position, setPosition] = useState("absolute");
  const [wave, setWave] = useState(false);
  const [contact, setContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
      setWave(window.scrollY > 10);
      setContact(window.scrollY > 300 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setPosition(isScrolled ? "fixed" : "absolute");
  }, [isScrolled]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#020B2D] text-white">
      {/* Navigation */}
      <nav
        className={`${position} w-full z-[1000] transition-all duration-300 ${
          isScrolled ? "bg-[#020B2D]" : ""
        } flex justify-center px-4 md:px-6`}
      >
        <div className="w-full max-w-[1440px] flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="h-12 md:h-16 flex items-center justify-center">
              <img
                src={Logo}
                alt="Virach Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 flex-nowrap">
            <a
              href="#home"
              className="font-medium transition-colors text-white scroll-smooth text-base md:text-lg"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-medium transition-colors text-white scroll-smooth text-base md:text-lg"
            >
              Services
            </a>
            <a
              href="#about"
              className="font-medium transition-colors text-white scroll-smooth text-base md:text-lg"
            >
              About
            </a>

            {contact && (
              <a
                href="#contact"
                className="bg-[#FFA500] text-white px-6 py-2 rounded-full hover:bg-[#FF8C00] transition-colors font-medium shadow-md hover:shadow-lg"
              >
                Contact Us
              </a>
            )}
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#020B2D] shadow-md md:hidden py-4 z-50">
              <div className="flex flex-col items-center gap-4">
                <a
                  href="#home"
                  className="text-white hover:text-[#4BA3FF] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-[#4BA3FF] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-[#4BA3FF] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="bg-[#FFA500] text-white px-6 py-2 rounded-full hover:bg-[#FF8C00] transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="pt-24 md:pt-32 pb-16 md:pb-29 relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center text-left px-4 md:px-10 mt-0"
      >
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Software Development Solutions
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#4BA3FF] to-[#8F7FFF] text-transparent bg-clip-text">
            Innovative Software Solutions for a Digital Future
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Transform your business with our custom web and mobile apps,
            designed to accelerate growth and efficiency.
          </p>
          <button className="bg-[#FFA500] text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-[#FF8C00] transition-colors flex items-center gap-2">
            Contact Us <Play className="w-4 h-4" />
          </button>
        </div>

        {/* Floating Circle */}
        <div
          className="hidden md:block absolute right-[10%] top-1/3 w-32 md:w-48 h-32 md:h-48 rounded-full bg-blue-500 opacity-60 animate-float"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #3498db, transparent)",
          }}
        />

        <AnimatePresence>
          {wave && (
            <motion.div
              className="absolute bottom-0 left-0 w-full overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <svg
                viewBox="0 0 1440 320"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  fill="white"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  d="M0,192L80,192C160,192,320,192,480,181.3C640,171,800,149,960,154.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></motion.path>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className={`py-5 bg-gray-50 relative transition-all duration-500 ease-in-out scroll-mt-35${
          wave ? " mt-[-5%] z-[100] transform translate-y-5" : ""
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon={Code}
            title="Web Development"
            description="Custom web applications built with modern technologies."
            imageUrl="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=500&q=80"
            delay={0.2}
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Apps"
            description="Native and cross-platform mobile applications."
            imageUrl="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80"
            delay={0.4}
          />
          <ServiceCard
            icon={Globe}
            title="Digital Solutions"
            description="End-to-end digital transformation services."
            imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"
            delay={0.6}
          />
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="flex-1 w-full mt-8 md:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#051944]">
                About Us
              </h2>
              <div className="bg-[#051944] p-6 md:p-8 rounded-2xl">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Virach is a technology company specializing in software
                  development, offering web and mobile app solutions, and
                  custom-built software. We provide scalable, innovative, and
                  user-centric digital solutions to help businesses thrive in
                  today's digital world. Whether you're a startup or an
                  established business, we deliver high-quality solutions that
                  maximize growth and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-indigo-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[#031138]">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 px-4">
          Reach out for any inquiries or collaboration opportunities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4">
          <ContactCard
            icon={Mail}
            title="Email"
            detail="virachinfotech@gmail.com"
            link="mailto:virachinfotech@gmail.com"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            detail="+91 8121171227"
            link="tel:+918121171227"
          />
          <ContactCard
            icon={MapPin}
            title="Address"
            detail="123 Tech Lane, City, Country"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 md:py-8 text-center text-gray-600">
        <p>© 2025 Virach. All rights reserved.</p>
      </footer>
    </div>
  );
}

const ServiceCard = ({ icon: Icon, title, description, imageUrl, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }} // Start hidden and move up
    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
    transition={{ duration: 0.6, delay }} // Apply delay for staggered effect
    whileHover={{ scale: 1.05 }} // Slight zoom on hover
    className="bg-gray-100 p-6 md:p-8 rounded-2xl group hover:bg-gray-200 transition-colors"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 md:h-48 object-cover rounded-lg mb-4"
    />
    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#4BA3FF] mb-3 md:mb-4" />
    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-[#051944]">
      {title}
    </h3>
    <p className="text-gray-700 text-sm md:text-base">{description}</p>
  </motion.div>
);
const ContactCard = ({ icon: Icon, title, detail, link }) => (
  <a
    href={link}
    className="flex items-center gap-3 md:gap-4 bg-gray-100 p-4 md:p-6 rounded-xl hover:bg-gray-200 transition-colors"
  >
    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#4BA3FF]" />
    <div>
      <div className="font-semibold mb-1 text-[#051944] text-sm md:text-base">
        {title}
      </div>
      <div className="text-gray-700 text-xs md:text-sm">{detail}</div>
    </div>
  </a>
);

export default App;
