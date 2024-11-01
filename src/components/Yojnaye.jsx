import React from 'react';
import { useNavigate } from 'react-router-dom';
import missionImage1 from '../assets/missionImage1.png';
import missionImage2 from '../assets/missionImage2.png';
import missionImage3 from '../assets/missionImage3.png';

// MissionCard Component
const MissionCard = ({ number, description, image }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg relative group">
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity group-hover:opacity-50" />
      </div>
      
      <div className="relative p-4 flex flex-col justify-between min-h-[250px]">
        <div className="flex-grow">
          <div className="text-white text-xl mb-2">{number}.</div>
          <p className="font-roboto text-md text-white font-extrabold leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-2">
          <button 
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }} 
            className="px-4 py-2 text-sm text-black bg-white hover:bg-gray-200 transition-all duration-300 font-roboto rounded"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

// Yojnaye Component
const Yojnaye = () => {
  const missionData = [
    {
      number: "1",
      description: "संविधान संशोधन के माध्यम से एक परिवार एक आरक्षण को लागू करने हेतु अभियान चलाना",
      image: missionImage1
    },
    {
      number: "2",
      description: "ऑडियो, विडियो, लेख एवं अन्य संदेश वाहक रचनाओं को आमंत्रित करना, सोशल मीडिया में उपलब्ध कराना, प्रतियोगिता आयोजन करना, सेमिनार और गोष्ठी का आयोजन करवाना",
      image: missionImage2
    },
    {
      number: "3",
      description: "संविधान संशोधन होने तक 5 वर्ष के कार्यकाल पूर्ण कर चुके विधायकों, सांसदों और उनके परिजनों को राजनीतिक दलों द्वारा आरक्षित सीटों से पुनः प्रत्याशी नहीं बनाने हेतु प्रेरित करना",
      image: missionImage3
    },
    {
      number: "4",
      description: "संविधान संशोधन होने तक आरक्षित सीटों से चुनाव लड़ने वाले 5 वर्ष के कार्यकाल पूर्ण कर चुके विधायकों और सांसदों और उनके परिजनों को वोट नहीं देने हेतु मतदाताओं को प्रेरित करना",
      image: missionImage3
    },
    {
      number: "5",
      description: "स्कूल और कॉलेजों में युवाओं को जगरूक करना और उन्हे अपने गाँव और समाज को अभियान से अवगत कराने हेतु प्रेरित करना",
      image: missionImage1
    },
    {
      number: "6",
      description: "वंचितों को आत्मनिर्भर बनाने हेतु व्यवसाय, उद्योग, उन्नत कृषि, मूल्य संवर्धन हेतु प्रशिक्षण शिविरों का आयोजन करना और करवाना",
      image: missionImage2
    },
    {
      number: "7",
      description: "उच्च शिक्षा, व्यावसायिक शिक्षा प्रवेश, प्रतियोगी परीक्षाओं की जानकारी, मार्गदर्शन और कोचिंग की व्यवस्था करना और करवाना",
      image: missionImage3
    },
    {
      number: "8",
      description: "समाज को भेदभाव से मुक्त करने हेतु बृहद समाजों के बीच बेटी-बेटों का रिश्ता जोड़ना और आदर्श सामाजिक-पारिवारिक सांस्कृतिक मूल्यों का प्रशिक्षण देना",
      image: missionImage3
    }
  ];

  return (
    <div id='yojnaye' className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-12">
          <div className="w-12 h-[2px] bg-black mr-4"></div>
          <h2 className="text-3xl font-bold">हमारी कार्य योजनायें</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {missionData.map((mission, index) => (
            <MissionCard
              key={index}
              number={mission.number}
              description={mission.description}
              image={mission.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Yojnaye;
