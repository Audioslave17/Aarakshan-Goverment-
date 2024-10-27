import React from 'react';
import yojnaImg from '../assets/yojnaImg.png';

const Yojnaye = () => {
  const yojnaTexts = [
    "1. एक परिवार एक आरक्षण की व्यवस्था लागु कराने हेतु संविधान में संसोधन कराने हेतु अभियान चलाना",
    "2. ऑडियो, विडियो, लेख एवं अन्य सन्देश वाहक रचनाओं को आमंत्रित करना, सोसल मीडिया में उपलब्ध कराना, प्रतियोगिता आयोजन करना, सेमिनार और गोष्ठी का आयोजन करवाना",
    "3. राजनीतीक दलों को जितने वाले विधायकों और सांसदों को दुबारा टिकट नहीं देने हेतु प्रेरित करना",
    "4. जीत चुके विधायक या सांसद को छोड़कर किसी अन्य प्रत्यासियों को ही वोट करना",
    "5. स्कुल और कॉलेजों में युवाओं को जागरूक करना और उन्हें अपने गाँव और समाज को अभियान से अवगत कराने हेतु प्रेरित करना",
    "6. वंचितों को आत्मनिर्भर बनाने हेतु, व्यवसाय, उद्योग, उन्नत कृषि, मूल्य संवर्धन हेतु प्रशिक्षण शिविरों का आयोजन करना और करवाना",
    "7. उच्च शिक्षा, व्यवसायीक शिक्षा, प्रतियोगी परीक्षाओं की जानकारी, जागरूकता और कोचिंग की व्यवस्था करना और करवाना"
  ];

  return (
    <div id="yojnaye" className="flex flex-col items-center mt-6">
      {/* Heading */}
      <div className="w-full lg:w-[800px] h-[60px] px-4">
        <h1 className="font-UnifrakturCook font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-tight lg:leading-[60px] text-[#553B7A] text-center">
          कार्य योजनायें
        </h1>
      </div>

      {/* Content Divs */}
      <div className="space-y-4 mt-6 w-full px-4">
        {yojnaTexts.map((text, index) => (
          <div
            key={index}
            className="relative flex items-center h-[150px] max-w-full lg:w-[900px] rounded-[10px] bg-black bg-opacity-30 mx-auto"
          >
            <img
              src={yojnaImg}
              alt="Yojna"
              className="w-full h-full object-cover opacity-75 rounded-[10px]"
              style={{ filter: 'brightness(0.4)' }}
            />
            <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl lg:text-2xl font-bold px-4 text-center">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yojnaye;
