import React, { useState, useRef } from 'react';
import { db, storage } from "../firebase.js";  // Import Firebase configuration
import { collection, addDoc, serverTimestamp } from "firebase/firestore";  // Import Firestore methods
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";  // Import Storage methods
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
  const [isUploading, setIsUploading] = useState(false); // New state for loading
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
    setIsUploading(true); // Set uploading state to true
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

      alert('Video uploaded successfully!'); // Alert after successful upload
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setSelectedFile(null);
      setShowUploader(false);
    } catch (error) {
      console.error("Error submitting form: ", error.message);
      alert(`Error submitting the form: ${error.message}`);
    } finally {
      setIsUploading(false); // Reset uploading state
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div id="video-upload" className="min-h-screen bg-black p-8 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
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
                    className="bg-[#70C174] text-white py-2 px-8 rounded-md hover:bg-green-600 transition-colors"
                    disabled={isUploading} // Disable button while uploading
                  >
                    {isUploading ? 'Uploading...' : 'Submit Form'} {/* Show uploading message */}
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