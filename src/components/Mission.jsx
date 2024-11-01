import React from 'react';
import { useNavigate } from 'react-router-dom';
import missionImage1 from '../assets/missionImage1.png';

const VisionMissionCard = ({ type, titleHindi, description }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-[480px] h-[500px] rounded-lg overflow-hidden shadow-md relative group">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${missionImage1})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity group-hover:opacity-70" />
      </div>
      
      <div className="relative h-full p-10 flex flex-col justify-between">
        <div className="flex-grow">
          <div className="flex flex-col items-start mb-6">
            <h2 className="font-roboto text-3xl md:text-[32px] font-bold leading-tight text-white mb-2">
              {type}
            </h2>
            <h3 className="font-roboto text-2xl md:text-[28px] font-bold leading-tight text-white self-end mr-20">
              {titleHindi}
            </h3>
          </div>
          <p className="font-roboto text-lg text-white leading-relaxed mb-4 text-center max-w-[400px] mx-auto mt-10">
            {description}
          </p>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }} 
            className="w-[132px] h-[51px] bg-white text-black rounded-lg hover:bg-opacity-90 transition-all duration-300 font-roboto font-medium flex items-center justify-center"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

const Mission = () => {
  const cardsData = [
    {
      type: "OUR VISION",
      titleHindi: "हमारा विज़न",
      description: "वंचितों को हर पहलु में सक्षम, ताकतवर, आत्मनिर्भर और स्वाभिमानी बनाना"
    },
    {
      type: "OUR MISSION",
      titleHindi: "हमारा मिशन",
      description: "रिजर्वेशन का लाभ किसी परिवार तक सिमित न रखकर युक्ति युक्त रूप से हर वंचितों तक पहुँचाना, समान अवसर की व्यवस्था बनवाना, जाती के ठेकेदारों के शोषण से मुक्ति दिलाना"
    }
  ];

  return (
    <div id='mission' className="w-full min-h-screen bg-white flex items-center justify-center">
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {cardsData.map((card, index) => (
            <VisionMissionCard
              key={index}
              type={card.type}
              titleHindi={card.titleHindi}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mission;