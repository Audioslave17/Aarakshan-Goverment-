import React, { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';
import questionsImg from '../assets/questionsImg.png';

const Questions = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "1. एक परिवार एक आरक्षण क्या है?",
      answer: "आरक्षित वर्ग में किसी भी परिवार में आरक्षण के तहत नौकरी का लाभ प्रतिनिधि करने का मौका किसी एक व्यक्ति तक सीमित करना है।"
    },
    {
      id: 2,
      question: "2. एक परिवार एक आरक्षण क्यों आवश्यक है?",
      answer: "यह सुनिश्चित करने के लिए आवश्यक है कि आरक्षण का लाभ एक ही परिवार के कुछ सदस्यों तक सीमित न रहे और समाज के अधिक से अधिक परिवारों तक पहुंच सके।"
    },
    {
      id: 3,
      question: "3. परिवार में कौन आते हैं?",
      answer: "परिवार में माता-पिता, पति/पत्नी, अविवाहित पुत्र/पुत्री और आश्रित सदस्य शामिल होते हैं।"
    },
    {
      id: 4,
      question: "4. किस प्रकार के आरक्षण के लाभ को लाभ माना जायेगा?",
      answer: "सरकारी नौकरियों, शैक्षणिक संस्थानों में प्रवेश और अन्य सरकारी योजनाओं में मिलने वाले आरक्षण के लाभ को माना जाएगा।"
    },
    {
      id: 5,
      question: "5. क्या एक बार चुनाव जीतने के बाद पुनः चुनाव लड़ सकता है?",
      answer: "हाँ, वर्तमान नियमों के अनुसार एक बार चुनाव जीतने के बाद भी व्यक्ति पुनः चुनाव लड़ सकता है, बशर्ते वह सभी पात्रता मानदंडों को पूरा करता हो।"
    },
    {
      id: 6,
      question: "6. सरपंच का चुनाव जीत कर क्या अन्य पद का चुनाव लड़ सकता है?",
      answer: "हाँ, सरपंच पद से त्यागपत्र देने के बाद अन्य पदों के लिए चुनाव लड़ा जा सकता है, लेकिन एक समय में केवल एक पद पर ही रह सकते हैं।"
    },
    {
      id: 7,
      question: "7. क्या अनारक्षित सीट से चुनाव लड़ सकते हैं?",
      answer: "हाँ, कोई भी व्यक्ति अपनी योग्यता के आधार पर अनारक्षित सीट से चुनाव लड़ सकता है, चाहे वह किसी भी वर्ग से संबंधित हो।"
    },
    {
      id: 8,
      question: "8. क्या अनारक्षित सीट से नौकरी भी प्राप्त कर सकते हैं?",
      answer: "हाँ, आरक्षित वर्ग के व्यक्ति भी अपनी योग्यता के आधार पर अनारक्षित श्रेणी में नौकरी प्राप्त कर सकते हैं।"
    },
    {
      id: 9,
      question: "9. एक परिवार एक आरक्षण क्या विभिन्न संस्थाओं में भी लागू होगा?",
      answer: "नहीं, विभिन्न संस्थाओं में यह प्रावधान अलग-अलग हो सकता है।"
    },
    {
      id: 10,
      question: "10. क्या बार बार एक परिवार अपनी स्थिति बदल कर किसी प्रकार के अनुसूचित वर्ग का आरक्षण लागू होगा?",
      answer: "नहीं, एक बार निर्धारित स्थिति के बाद बार-बार परिवर्तन नहीं किया जा सकता।"
    },
    {
      id: 11,
      question: "11. एक परिवार एक आरक्षण में किसी एक सदस्य के सम्मिलित होने से परिवार के अन्य सदस्य का उसके समान के साथ सम्बन्ध होगा?",
      answer: "नहीं, प्रत्येक सदस्य की पात्रता अलग-अलग मानी जाएगी।"
    },
    {
      id: 12,
      question: "12. समान्य यह है कि भीलवा जन्म से नहीं जाने है?",
      answer: "हाँ, यह जन्म से निर्धारित नहीं होता है।"
    },
    {
      id: 13,
      question: "13. गोत्र किस लिहाज जोड़ा करते है?",
      answer: "गोत्र वंशावली और पारिवारिक परंपराओं के आधार पर जोड़ा जाता है।"
    },
    {
      id: 14,
      question: "14. महिला, श्रीमान और उनका कार्य को भोजन करने वाला क्या कहा जाता है?",
      answer: "उन्हें परिवार के सदस्य या घरेलू इकाई के रूप में जाना जाता है।"
    },
    {
      id: 15,
      question: "15. क्या है और असली व्यवस्था क्या है?",
      answer: "मूल व्यवस्था नियमों और कानूनों पर आधारित है, जो समानता और न्याय सुनिश्चित करती है।"
    },
    {
      id: 16,
      question: "16. क्या साहब का सवाल के बाद के बेटा बाद कर?",
      answer: "साहब के प्रश्न के बाद उनके बेटे की स्थिति का निर्धारण नियमानुसार किया जाता है।"
    },
    {
      id: 17,
      question: "17. क्या ग्राम, नए ग्राम का नाम लिखना पड़ी है?",
      answer: "हाँ, प्रशासनिक और रिकॉर्ड के उद्देश्यों के लिए ग्राम का नाम लिखना आवश्यक है।"
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="questions" className="flex flex-col lg:flex-row min-h-screen bg-[#F3F5F6]">
      {/* Left side illustration */}
      <div className="lg:w-1/2 w-full p-8 flex items-center justify-center">
        <img
          src={questionsImg}
          alt="FAQ Illustration"
          className="max-w-full h-auto rounded-lg"
        />
      </div>

      {/* Right side FAQ section */}
      <div className="lg:w-3/5 w-full p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Top Heading */}
          <h1 className="font-inter font-bold text-2xl md:text-3xl text-[#525560] mb-6">
            सामान्यतः पूछे जाने वाले प्रश्न
          </h1>

          {/* Scrollable FAQ container */}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
            {faqItems.map((item) => (
              <div key={item.id} className="mb-4 border-b border-gray-200 last:border-0">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="font-extrabold text-gray-700 text-lg">{item.question}</span>
                  {openItem === item.id ? (
                    <IoCloseOutline className="w-6 h-6 text-gray-500" />
                  ) : (
                    <IoChevronDownOutline className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                
                {openItem === item.id && (
                  <div className="pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;