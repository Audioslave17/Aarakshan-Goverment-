import React from 'react';

const VideoUpload = () => {
  return (
    <div id="video-upload" className="min-h-screen bg-black p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="text-white space-y-6 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-2">
            आपका योगदान<br />
            आपके आसपास हो रहे इस प्रकार<br />
            आज ही अपलोड करें
          </h1>
          
          <p className="text-gray-300 text-base leading-relaxed">
            ऑडियो, विडियो, लेख एवं अन्य सदस्य साहक सहयोग को आमंत्रित करना, सोसल 
            मीडिया में उपलब्ध कराना, प्रतियोगिता आयोजन करना, सेमिनार और गोष्ठी का आयोजन 
            करवाना
          </p>

          {/* Statistics */}
          <div className="space-y-3 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                <span>40% planting trees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
                <span>35% cleanliness program</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
                <span>10% helping people</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                <span>10% animal safety</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-sm"></div>
              <span>5% feeding the poor</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">विडियो अपलोड करें</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">E-Mail ID</label>
                <input 
                  type="email"
                  required 
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Mobile No.</label>
                <input 
                  type="tel" 
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea 
                className="w-full p-2 border rounded-md h-32"
                required
                maxLength={500}
                placeholder="Type your Message"
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button 
                type="submit" 
                className="bg-[#70C174] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors w-[160px]"
              >
                Upload Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
