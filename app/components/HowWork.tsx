import React from 'react';

interface Step {
  title: string;
  description: string;
  icon: string;
  number: string;
}

const steps: Step[] = [
  {
    title: "Choose a Challenge",
    description: "Select from a variety of exciting physical challenges that suit your interests and fitness level.",
    icon: "/Howwork/search.png", // Placeholder for the icon URL
    number: "01",
  },
  {
    title: "Set Your Goal",
    description: "Set a fundraising goal and share your challenge with friends and family to gain support.",
    icon: "/Howwork/setting.png", // Placeholder for the icon URL
    number: "02",
  },
  {
    title: "Track Your Progress",
    description: "Use our app to track your activity and see your progress in real-time.",
    icon: "/Howwork/Progress.png", // Placeholder for the icon URL
    number: "03",
  },
  {
    title: "Make an Impact",
    description: "Complete the challenge and see the difference you've made by supporting a good cause.",
    icon: "/Howwork/Impact.png", // Placeholder for the icon URL
    number: "04",
  },
];

const HowWorks: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-8" id='works'>
      <h2 className="text-center text-3xl font-bold text-primary font-tomorrow mt-14 mb-14">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-lg rounded-lg p-4 flex flex-col justify-start h-[330px] "
          >
            <div className="mt-6 mb-6">
              <img src={step.icon} alt={step.title} className="w-14 h-14" />
            </div>
            <div className='flex justify-between mb-6'>
              <h3 className="font-tomorrow  mb-2 ">{step.title}</h3>
              <div className="bg-gray-300 font-normal text-xl px-1.5 rounded-full">
                {step.number}
              </div>
            </div>
            <p className="text-gray-500 mb-4">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWorks;
