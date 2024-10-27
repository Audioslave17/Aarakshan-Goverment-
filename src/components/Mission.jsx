import React from 'react';
import missionImage1 from '../assets/missionImage1.png';
import missionImage2 from '../assets/missionImage2.png';
import missionImage3 from '../assets/missionImage3.png';

const MissionCard = ({ image, title, description }) => (
  <div className="w-full md:w-[411px] h-[421px] rounded-lg overflow-hidden shadow-lg relative group">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 transition-opacity group-hover:opacity-70" />
    </div>
    
    <div className="relative h-full p-8 flex flex-col justify-between">
      <div className="flex-grow">
        <h3 className="font-roboto text-2xl md:text-[28px] font-bold leading-tight text-white mb-4">
          {title}
        </h3>
        <p className="font-roboto text-base text-white leading-relaxed mb-4">
          {description}
        </p>
      </div>
      
      <div className="mt-4">
        <button className="w-[132px] h-[51px] bg-white text-black rounded-lg hover:bg-opacity-90 transition-all duration-300 font-roboto font-medium">
          See More
        </button>
      </div>
    </div>
  </div>
);

const Mission = () => {
  const cardData = [
    {
      image: missionImage1,
      title: "संविधान में आरक्षण की व्यवस्था की रक्षा करना",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      image: missionImage2,
      title: "आरक्षित जातियों के ठेकेदारों से उन्ही के जाति के वंचितों की मुक्ति",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      image: missionImage3,
      title: "सामाजिक संघर्ष के स्थान पर सामाजिक समरसता और सामाजिक सामंजष्य स्थावित करना",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  return (
    <div id="mission" className="w-full overflow-x-hidden">
      <section className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="mb-16 text-center">
          <h2 className="font-roboto text-3xl md:text-[35px] font-bold leading-tight tracking-[2px] text-[#EA772A] mb-8">
            Our Mission हमारा मिशन
          </h2>
          
          <p className="font-UnifrakturCook text-2xl md:text-[28px] font-bold leading-relaxed text-[#EA772A] max-w-[1162px] mx-auto">
            रिजर्वेसन का लाभ किसी परिवार तक सिमित न रखकर युक्ति युक्त रूप से हर वंचितों तक पहुँचाना, समान अवसर की व्यवस्था बनवाना, 
            जाती के ठेकेदारों के शोषण से मुक्ति दिलाना
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <MissionCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mission;