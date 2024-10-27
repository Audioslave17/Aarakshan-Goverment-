import React, { useState } from 'react';

const Discuss = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Predefined comments
  const initialComments = [
    { email: "rajput123@example.com", comment: "Aarakshan is a necessary step towards equality in our society." },
    { email: "student45@example.com", comment: "Reservation should focus on economically weaker sections." },
    { email: "socialjustice2023@example.com", comment: "It's essential to ensure that the benefits of Aarakshan reach the right people." },
    { email: "advocate234@example.com", comment: "I believe Aarakshan helps to uplift marginalized communities." },
    { email: "researcher98@example.com", comment: "There should be a thorough evaluation of the reservation policies." },
    { email: "activist555@example.com", comment: "Aarakshan should not be seen as a divide but a bridge to opportunity." },
    { email: "concernedcitizen@example.com", comment: "I'm concerned about the misuse of reservation benefits." },
    { email: "youthvoice@example.com", comment: "Education should be the primary focus of Aarakshan." },
    { email: "meritfirst@example.com", comment: "Aarakshan is important, but it should not compromise merit." },
    { email: "debateforum@example.com", comment: "The debate around Aarakshan is vital for our democracy." }
  ];

  const [commentsList, setCommentsList] = useState(initialComments);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (email && comment) {
      setCommentsList([
        { 
          email, 
          comment
        }, 
        ...commentsList
      ]);
      setEmail('');
      setComment('');
      setShowForm(false);
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
                  placeholder="Enter your comment (max 500 words)"
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
            {commentsList.map((item, index) => (
              <div 
                key={index} 
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