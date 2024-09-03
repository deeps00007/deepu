import React, { useState } from 'react';
import { motion } from 'framer-motion';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('JavaScript');

  const projects = {
    JavaScript: [
      {
        title: 'JavaScript Project 1',
        description: 'Description of JavaScript Project 1',
        imageUrl:project1,
        link: 'https://www.vraddhifinserve.com/',
      },
      {
        title: 'JavaScript Project 2',
        description: 'Description of JavaScript Project 2',
        imageUrl:project2,
        link: 'https://www.work4clients.in/hygieneplus/beta/',
      },
    ],
    React: [
      {
        title: 'React Project 1',
        description: 'Description of React Project 1',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://linktoyourproject.com',
      },
      {
        title: 'React Project 2',
        description: 'Description of React Project 2',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://linktoyourproject.com',
      },
    ],
    Fullstack: [
      {
        title: 'Fullstack Project 1',
        description: 'Description of Fullstack Project 1',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://linktoyourproject.com',
      },
      {
        title: 'Fullstack Project 2',
        description: 'Description of Fullstack Project 2',
        imageUrl: 'https://via.placeholder.com/300',
        link: 'https://linktoyourproject.com',
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">My Projects</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        {['JavaScript', 'React', 'Fullstack'].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 mx-2 font-semibold text-lg rounded ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
            } shadow-md`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-8 justify-center"
      >
        {projects[activeTab].map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 w-80">
            <img src={project.imageUrl} alt={project.title} className="rounded-t-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
