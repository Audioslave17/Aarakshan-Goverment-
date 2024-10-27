import React from 'react';
import missionImage1 from '../assets/missionImage1.png';
import missionImage2 from '../assets/missionImage2.png';
import missionImage3 from '../assets/missionImage3.png';

const MissionCard = ({ image, title, description }) => (
    <div className="w-full md:w-[411px] rounded-lg overflow-hidden shadow-lg relative group">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity group-hover:opacity-70" />
      </div>
      
      {/* Adjusted padding and added min-height with less height */}
      <div className="relative p-6 flex flex-col justify-between min-h-[380px]">
        <div className="flex-grow">
          <h3 className="font-roboto text-2xl md:text-[28px] font-bold leading-tight text-white mb-2">
            {title}
          </h3>
          <p className="font-roboto text-base text-white leading-relaxed mb-4 mt-10">
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

const ProjectsDone = () => {
  const cardData = [
    {
      image: missionImage1,
      title: "Mission 40K: Tree plantation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      image: missionImage2,
      title: "Weekly cleanliness program in city",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    },
    {
      image: missionImage3,
      title: "Wildlife safety program 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
    }
  ];

  return (
    <div id="projects-done" className="w-full min-h-screen overflow-hidden flex flex-col">
      <section className="max-w-[1280px] mx-auto px-4 py-9 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-black"></div>
          <span className="text-lg font-roboto font-medium">PROJECTS WE HAVE DONE</span>
        </div>
        <h1 className='text-4xl font-bold ml-16'>
          We are Creating sustainable <br /> society, for everyone and <br /> forever.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
}

export default ProjectsDone;
