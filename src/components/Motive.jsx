import React from 'react';
import motiveImg from '../assets/motiveImg.png';
import { BiSolidBuildings } from "react-icons/bi";
import { FaHandHoldingHeart, FaWater } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";

const Motive = () => {
  const actionItems = [
    {
      icon: <BiSolidBuildings className="text-white w-8 h-8" />, // Increased icon size
      title: 'संविधान में आरक्षण की व्यवस्था की रक्षा करना'
    },
    {
      icon: <FaHandHoldingHeart className="text-white w-6 h-6" />,
      title: 'बाबा साहब भीम राव अम्बेडकर के द्वारा संविधान में की गयी आरक्षण की व्यवस्था को सही मायने में लागु  करवाना'
    },
    {
      icon: <FaWater className="text-white w-6 h-6" />,
      title: 'कोई भी ब्यक्ति एक बार आरक्षण के तहत कोई नौकरी या जनप्रतिनिधि के रूप में चुन लिया जाता है, तो उसके परिवार को क्रीमी लेयर के तहत आरक्षित जाती से बाहर करना, जिससे किसी दुसरे परिवार को मौका मिले'
    },
    {
      icon: <GiSittingDog className="text-white w-6 h-6" />,
      title: 'नारा लगाने वालों के स्थान पर नेतृत्व करने वाला बनाना'
    },
    {
      icon: <GiSittingDog className="text-white w-6 h-6" />,
      title: 'राष्ट्रिय एकता और अखंडता हेतु कार्य करना'
    },
    {
      icon: <GiSittingDog className="text-white w-6 h-6" />,
      title: 'वृहद् समाज का सहयोग लेना'
    },
    {
      icon: <GiSittingDog className="text-white w-6 h-6" />,
      title: 'सामाजिक संघर्ष के स्थान पर सामाजिक समरसता और सामाजिक सामंजस्य स्थापित करना'
    },
    {
      icon: <GiSittingDog className="text-white w-6 h-6" />,
      title: 'शिक्षा, स्वास्थ्य, रोजगार, जन जागरण और परंपराओं के संरक्षण हेतु कार्य करना'
    }
  ];

  return (
    <div id="motive" className="w-full min-h-screen bg-[#faf1f1] relative px-4 md:px-8 py-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="w-full lg:w-[608px] relative">
          {/* "What we do" with line */}
          <div className="flex items-center gap-4 mb-8 mt-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <span className="text-4xl font-extrabold font-roboto">हमारा उद्देश्य</span>
          </div>
          {/* Action Items with left border */}
          <div className="w-full lg:w-[644px] h-auto ml-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            <div className="pl-8 space-y-1"> {/* Reduced spacing here */}
              {actionItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer h-16"> {/* Set height for consistency */}
                  <div className="flex items-center justify-center bg-[#B50301] rounded-lg group-hover:bg-green-200 transition-colors"> {/* Set size and center icon */}
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-0 font-extrabold"> {/* Removed margin to reduce space */}
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-[644px] h-[521px] relative mt-8 lg:mt-24">
          <img 
            src={motiveImg}  
            alt="What we do illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Motive;
