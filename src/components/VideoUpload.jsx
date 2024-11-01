import React, { useState, useRef } from 'react';
import { db, storage } from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Upload } from 'lucide-react';

const VideoUpload = () => {
  const [showUploader, setShowUploader] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isUploading, setIsUploading] = useState(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    try {
      let videoURL = '';
      if (selectedFile) {
        const videoRef = ref(storage, `videos/${selectedFile.name}`);
        await uploadBytes(videoRef, selectedFile);
        videoURL = await getDownloadURL(videoRef);
      }

      await addDoc(collection(db, 'submissions'), {
        ...formData,
        videoURL,
        timestamp: serverTimestamp(),
      });

      alert('Video uploaded successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setSelectedFile(null);
      setShowUploader(false);
    } catch (error) {
      console.error("Error submitting form: ", error.message);
      alert(`Error submitting the form: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div id="video-upload" className="min-h-screen bg-[#B50301] p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-white space-y-6 flex flex-col justify-center">
          <h1 className='text-7xl font-extrabold'>आपका योगदान</h1>
          <h1 className="text-5xl font-semibold mb-2">
            आपके पास उपलब्ध<br />
            परिवार वाद के अनुभवों को<br />
            विडियो के माध्यम से साझा कर
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-xl">उदाहरण हेतु, इस लिंक के विडियो को देखें</p>
            <a href="https://www.youtube.com/watch?v=YYZCpJmHAqI" target="_blank" rel="noopener noreferrer" className="relative inline-block">
              <img 
                src={`https://img.youtube.com/vi/YYZCpJmHAqI/default.jpg`}
                alt="Video thumbnail"
                className="rounded-lg shadow-lg w-32"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
                Click Here
              </span>
            </a>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">विडियो अपलोड करें</h2>
          <form className="space-y-4" onSubmit={handleFinalSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input 
                  required
                  name="firstName"
                  type="text" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input 
                  required
                  name="lastName"
                  type="text" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">E-Mail ID</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Mobile No.</label>
                <input 
                  required
                  name="mobile"
                  type="tel" 
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md h-32"
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
                    className="bg-[#B50301] text-white py-2 px-8 rounded-md hover:bg-[#70C174] transition-colors"
                    disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Submit Form'}
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-start">
                <button 
                  type="button"
                  onClick={handleShowUploader}
                  className="bg-[#fa3c38] text-white py-2 px-4 rounded-md hover:bg-[#70C174] transition-colors w-[160px]"
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