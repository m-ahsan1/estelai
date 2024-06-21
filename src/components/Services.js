import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Link } from "react-scroll";
const ServiceSection = () => {
  return (
    <section
      name="services"
      className="bg-[#0a110b] p-4 md:p-8 h-auto md:h-screen w-full"
    >
      <div className="max-w-7xl mx-auto md:mt-20">
        {/* Header Section */}
        <div className="text-white mb-8">
          <h5 className="text-lg text-[#8881e1]">Our Services</h5>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            We help our clients to build <br /> Their Dream Projects
          </h2>
          <div className="mt-4 text-right">
            <Link
              to="services"
              href="#explore"
              className="text-[#8881e1] text-lg hover:scale-105 duration-300"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
            <img
              src={img2} // Replace with actual image URL
              alt="Website Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum is simply dummy text of the printing typesetting
                lorem ipsum been dummy text.
              </p>
              <a href="#details" className="text-[#8881e1] font-semibold">
                View Details →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
            <img
              src={img3}
              alt="Machine Learning"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum is simply dummy text of the printing typesetting
                lorem ipsum been dummy text.
              </p>
              <a href="#details" className="text-[#8881e1] font-semibold">
                View Details →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 duration-300">
            <img
              src={img1}
              alt="App Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Chatbot Development</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum is simply dummy text of the printing typesetting
                lorem ipsum been dummy text.
              </p>
              <a href="#details" className="text-[#8881e1] font-semibold">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
