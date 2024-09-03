import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import myImage from '../../assets/myprofile.jpeg';
const Portfolio = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="devPic w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img 
            src={myImage} 
            alt="Your Name" 
            // className="w-80 h-80 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Introduction Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hello, I'm Deepanshu Bisht</h2>
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate developer with a knack for building engaging digital experiences.
            I specialize in frontend development, focusing on creating user-friendly and visually appealing web applications.
          </p>
          <Link 
            to='/projects'
            className="text-blue-500 hover:underline"
          >
            Learn more about my skills
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-16">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">My Skills</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">JavaScript</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">React</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">Tailwind CSS</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">HTML & CSS</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">Node.js</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            className="p-6 bg-white shadow-md rounded-lg text-center h-box"
          >
            <p className="text-xl font-semibold text-gray-700">Git & GitHub</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
