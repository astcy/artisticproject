import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Experience = () => {
  return (
    <section className="bg-black text-white px-4 py-12 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="bg-[#111] p-8 rounded-3xl shadow-lg text-center">
          <h2 className="text-6xl font-bold mb-2">4.9</h2>
          <div className="flex justify-center mb-2">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="text-lime-400 text-xl mx-0.5" />
            ))}
          </div>
          <p className="text-lg mb-4 text-gray-300">(40+ Reviews)</p>
          <h3 className="text-xl font-semibold mb-4">Customer experiences that speak for themselves</h3>
          <div className="flex justify-center -space-x-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/54.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-4 flex items-center space-x-3">
            <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-black font-bold text-sm">O</div>
            <span className="text-lg font-bold">Logoipsum</span>
          </div>
          <div className="flex mb-3">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} className="text-lime-400 text-xl mr-1" />
            ))}
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-medium mb-6 text-gray-200">
            The team transformed our brand's online presence with creativity and precision.
            The results exceeded our expectations! Their digital marketing strategies helped
            us reach a broader audience and significantly boosted our sales.
          </p>
          <div className="flex items-center space-x-4">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-14 h-14 rounded-full" />
            <div>
              <h4 className="text-lg font-semibold">Sarah Mitchell</h4>
              <p className="text-sm text-gray-400">Marketing Director</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex space-x-4 mt-8">
            <button className="bg-gray-900 hover:bg-gray-800 p-3 rounded-xl">
              <IoIosArrowBack size={24} />
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 p-3 rounded-xl">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
