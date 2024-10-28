import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const VideoUpload = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a video file');
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a video file');
    }
  };

  const handleShowUploader = (e) => {
    e.preventDefault();
    setShowUploader(true);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Handle the final form submission with all data including the video
    console.log('Form submitted with video:', selectedFile);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

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
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">विडियो अपलोड करें</h2>
          <form className="space-y-4" onSubmit={handleFinalSubmit}>
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

            {showUploader ? (
              <>
                <div 
                  className={`border-2 border-dashed rounded-lg p-4 text-center h-32 flex flex-col items-center justify-center ${
                    dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
                  } ${selectedFile ? 'bg-green-50' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <div className="space-y-1">
                      <Upload className="mx-auto h-8 w-8 text-green-500" />
                      <p className="text-sm text-gray-600">Selected: {selectedFile.name}</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="text-sm text-gray-600">
                        Drag and drop your video here or{" "}
                        <button
                          type="button"
                          onClick={onButtonClick}
                          className="text-green-500 hover:text-green-600"
                        >
                          browse files
                        </button>
                      </p>
                      <p className="text-xs text-gray-500">Supported formats: MP4, AVI, MOV</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center pt-2">
                  <button 
                    type="submit" 
                    className="bg-[#70C174] text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Submit Form
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-start">
                <button 
                  type="button"
                  onClick={handleShowUploader}
                  className="bg-[#70C174] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors w-[160px]"
                >
                  Upload Video
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;