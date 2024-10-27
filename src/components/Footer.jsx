import React from 'react';

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    // Add your click handling logic here
  };

  return (
    <footer id="contact" className="bg-black text-white py-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-3">
        {/* Logo Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold">{'{Finsweet'}</h2>
        </div>

        {/* Our Team Section */}
        <div>
          <h3 className="font-medium mb-4">Our team</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">About us</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Team</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">What we do</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Contact</button></li>
          </ul>
        </div>

        {/* More Section */}
        <div>
          <h3 className="font-medium mb-4">More</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Projects</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Events</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Donate</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Blog</button></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="font-medium mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Facebook</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Instagram</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">Twitter</button></li>
            <li><button onClick={handleClick} className="text-gray-400 hover:text-white">LinkedIn</button></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-medium mb-4">Subscribe to get latest updates</h3>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border border-gray-700 rounded px-3 py-2 w-full focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
