import React, { useState } from 'react';
import home from '../assets/home.png';
import navimg from '../assets/navimg.png';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `url(${home})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'top center', 
          backgroundRepeat: 'no-repeat',
          zIndex: 1, 
        }}
      ></div>

      {/* Navbar */}
      <nav className="absolute top-3 left-0 right-0 h-[67px] bg-white z-20 shadow-md flex justify-between items-center px-4 mx-auto">
        {/* Left side of the navbar */}
        <div className="flex items-center gap-2">
          <img src={navimg} alt="Logo for the family reservation initiative" className="w-[80px] h-[45px] md:w-[100px] md:h-[58px] opacity-100" />
          <h1 className="font-UnifrakturCook text-[24px] md:text-[40px] font-bold leading-[30px] md:leading-[60px] text-[#EA772A]">
            एक परिवार, एक आरक्षण
          </h1>
        </div>

        {/* Toggle Button for Small Screens */}
        <button
          className="md:hidden text-3xl text-[#EA772A] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Navbar Links (Dropdown for Small Screens, Inline for Larger Screens) */}
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:relative top-[67px] md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-4 md:py-0 px-4 md:px-0">
            <Link to="home" smooth={true} duration={700} className="text-[#EA772A] cursor-pointer hover:scale-105 duration-200 hover:text-orange-700 text-sm md:text-base">Home</Link>
            <Link to="mission" smooth={true} duration={700} className="text-[#EA772A] cursor-pointer hover:scale-105 duration-200 hover:text-orange-700 text-sm md:text-base">अभियान के बारे में</Link>
            <Link to="projects-done" smooth={true} duration={700} className="text-[#EA772A] cursor-pointer hover:scale-105 duration-200 hover:text-orange-700 text-sm md:text-base">अभियान के सूत्रधार</Link>
            <Link to="questions" smooth={true} duration={700} className="text-[#EA772A] cursor-pointer hover:scale-105 duration-200 hover:text-orange-700 text-sm md:text-base">सामान्यतः पूछे जाने वाले प्रश्न</Link>
            <Link to="contact" smooth={true} duration={700} className="text-[#EA772A] cursor-pointer hover:scale-105 duration-200 hover:text-orange-700 text-sm md:text-base">हमसें संपर्क करें</Link>
            
            {/* Button to navigate to Video Upload */}
            <Link to="video-upload" smooth={true} duration={700}>
              <button className="bg-[#EA772A] text-white px-3 md:px-4 py-1 md:py-2 rounded hover:scale-105 duration-200 text-sm md:text-base">
                आपका योगदान
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Box with Follow Us Section */}
      <div 
        className="absolute bg-red-500 z-20 w-[95%] md:w-[345px] h-[51px] flex justify-between items-center px-4"
        style={{
          bottom: '3%',
          right: '2%',
          maxWidth: 'calc(100% - 16px)'
        }}
      >
        <p className="text-white font-semibold text-lg md:text-2xl">Follow Us:</p>

        <div className="flex items-center gap-5 md:gap-7">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-4xl hover:text-gray-200">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-4xl hover:text-gray-200">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl md:text-4xl hover:text-gray-200">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
