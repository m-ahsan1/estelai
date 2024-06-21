import bg from "../assets/bg1.mp4";
import React from "react";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["AI-Powered Solutions."],
  });

  return (
    <section
      name="home"
      className="relative z-10 flex flex-col justify-center items-center md:items-start text-white h-screen bg-gradient-to-b from-black to-red-500"
    >
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute md:left-0 md:translate-x-1/2 mx-5 md:mx-auto">
        <h1 className=" md:text-6xl lg:text-8xl font-bold text-[50px]">
          EstelAI
        </h1>
        <p className="text-4xl mt-4">{text}</p>
        <p className="mt-6 max-w-md">
          Estelai is an AI agency based out Pakistan. Estel AI provides LLM
          powered web applications, AI automation services, and chatbots trained
          on custom data helping businesses grow their ROI, getting rid of
          manual systems, and reduce huge amounts of cost.
        </p>
        <Link to="services" smooth={true} duration={500}>
          <button className="mt-8 bg-white text-black px-4 py-2 rounded hover:bg-transparent hover:text-white hover:border">
            Explore more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
