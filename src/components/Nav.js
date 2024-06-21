import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full flex justify-between items-center p-4 bg-transparent text-white">
      <div className="text-2xl font-bold">Estelai</div>
      <div className="hidden md:flex space-x-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-red-500"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-red-500"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-red-500"
        >
          Contact
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="hover:text-red-500"
        >
          Services
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <FaTimes className="text-2xl" /> // Close icon
          ) : (
            <FaBars className="text-2xl" /> // Hamburger icon
          )}
        </button>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded hover:bg-transparent hover:border hover:border-red-500">
          Book a meeting
        </button>
      </Link>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black bg-opacity-75 md:hidden`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="text-white"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-transparent hover:border hover:border-red-500">
              Book a meeting
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
