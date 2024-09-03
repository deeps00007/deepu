import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const roadmap = [
    { year: '2021', milestone: 'Started learning JavaScript' },
    { year: '2022', milestone: 'Built first React application' },
    { year: '2023', milestone: 'Worked on full-stack projects with Node.js and React' },
    { year: '2024', milestone: 'Mastered Tailwind CSS for responsive designs' },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">About Me</h1>

      {/* Roadmap Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">My Roadmap</h2>
        <div className="relative max-w-4xl mx-auto">
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12 p-6 bg-white shadow-md rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-0.5 h-full bg-blue-500"></div>
              <div className="flex items-center">
                <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{item.milestone}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
