import React from 'react';
import navimg from '../assets/navimg.png';

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Add your click handling logic here
  };

  return (
    <footer id='contact' className="bg-black text-white py-8">
      {/* Horizontal Line */}
      <div className="border-t border-gray-700 mb-4" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo Section */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-4">
            <img src={navimg} alt="Logo" className="h-12" />
          </div>
          <h2 className="text-xl font-normal mb-1">एक परिवार,</h2>
          <h2 className="text-xl font-normal ml-10">एक आरक्षण</h2>
        </div>

        {/* Navigation Sections */}
        <div>
          <h3 className="text-white font-normal mb-4">Our team</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">About us</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Team</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">What we do</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-normal mb-4">More</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Projects</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Events</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Donate</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Blog</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-normal mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Facebook</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Instagram</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">Twitter</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">LinkedIn</button></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="md:col-span-1">
          <h3 className="text-white font-normal mb-4">Subscribe to get latest updates</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border border-gray-700 rounded px-3 py-2 flex-grow focus:outline-none focus:border-white text-sm"
            />
            <button 
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
