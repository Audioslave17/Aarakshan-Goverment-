import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js'; // Import your firebase configuration
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

const Discuss = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'comments'), (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setCommentsList(commentsData);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (email && comment) {
      try {
        await addDoc(collection(db, 'comments'), {
          email,
          comment,
          timestamp: new Date(),
        });
        setEmail('');
        setComment('');
        setShowForm(false);
      } catch (error) {
        console.error("Error adding comment: ", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-4xl mx-auto h-screen flex flex-col bg-gray-900 rounded-lg shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Discussion Forum</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {showForm ? 'Cancel' : 'Add Comment'}
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 p-4 flex flex-col overflow-hidden">
          {/* Comment Form */}
          {showForm && (
            <div className="mb-4 p-4 bg-gray-800 rounded-lg">
              <form onSubmit={handleCommentSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  required
                />
                <textarea
                  placeholder="Enter your comment (max 2000 words)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                  rows="3"
                  maxLength="2000"
                  required
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-red-400">
                    This site is monitored. Please be mindful of your words.
                  </p>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {commentsList.map((item) => (
              <div 
                key={item.id} 
                className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex flex-col">
                  <p className="text-sm text-gray-400 mb-2">{item.email}</p>
                  <p className="text-gray-100">{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discuss;
