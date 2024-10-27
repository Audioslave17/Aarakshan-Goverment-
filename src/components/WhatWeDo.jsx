import React from 'react';
import whatWeDoImage from '../assets/whatWeDoImage.png';
import { BiSolidBuildings } from "react-icons/bi";
import { FaHandHoldingHeart, FaWater } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";

const WhatWeDo = () => {
  const actionItems = [
    {
      icon: <BiSolidBuildings className="w-6 h-6 text-green-600" />,
      title: 'संविधान में की गयी आरक्षण की व्यवस्था को सही मायने में लागू करवाना',
      description: 'कोई भी व्यक्ति एक बार आरक्षण के तहत कोई नौकरी या जनप्रतिनिधि के रूप में चुन लिया जाता है, तो उसके परिवार को तीसरी पीढ़ी के तहत आरक्षित जाति से बाहर करना, जिससे अन्य दूसरे परिवार को मौका मिले'
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6 text-green-600" />,
      title: 'आरक्षित जातियों के ठेकेदारों से उन्ही के जाति के वंचितों की मुक्ति',
      description: 'वर्तमान स्वरूप में आरक्षित जातियों के ठेकेदार ही अपने वंचित समाज का शोषण कर रहे है, उनसे मुक्ति दिलाना'
    },
    {
      icon: <FaWater className="w-6 h-6 text-green-600" />,
      title: 'सामाजिक समसरता और सामाजिक',
      description: 'सामाजिक, राष्ट्र के ध्यान पर सामाजिक समरसता और सामाजिक समावेश स्थापित करना'
    },
    {
      icon: <GiSittingDog className="w-6 h-6 text-green-600" />,
      title: 'संरक्षण हेतु कार्य करना',
      description: 'शिक्षा, स्वास्थ्य, रोजगार, जन जागरण और पर्यावरण के संरक्षण हेतु कार्य करना'
    }
  ];

  return (
    <div id="what-we-do" className="w-full min-h-screen bg-[#EFF7F2] relative px-4 md:px-8 py-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="w-full lg:w-[608px] relative">
          {/* "What we do" with line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-black"></div>
            <span className="text-lg font-roboto font-medium">What we do</span>
          </div>

          {/* Heading and Subheading Section */}
          <div className="mb-12 ml-16">
            <h2 className="font-UnifrakturCook text-[48px] font-bold leading-[57.6px] text-left mb-6">
              हम वंचितों को अधिकार कैसे दिला सकते हैं ?
            </h2>
            
            <p className="font-roboto text-base font-normal leading-[25.6px] text-left text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Action Items with left border */}
          <div className="w-full ml-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            <div className="pl-8 space-y-8">
              {actionItems.map((item, index) => (
                <div key={index} className="flex gap-4 group cursor-pointer">
                  <div className="mt-1 p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 flex items-center gap-2 font-extrabold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-[644px] h-[521px] relative mt-8 lg:mt-24">
          <img 
            src={whatWeDoImage}  
            alt="What we do illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
