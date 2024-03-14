import React, { useState } from 'react';
import { motion } from 'framer-motion';
import resolute from '../assets/resolute.png';
import workoutBuddy from '../assets/workoutBuddy.png'; 
import marvelQuiz from '../assets/marvelQuiz.png'; 
import forecast from '../assets/forecast.png';
import noterize from '../assets/noterize.png';
import scheduler from '../assets/scheduler.png';

function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const projects = [
    { img: marvelQuiz, name: 'Marvel Quiz', link: 'https://github.com/Donnie1129/marvel-character-personality-quiz' },
    { img: resolute, name: 'Resolute Fitness', link: 'https://github.com/suzetsalinas/health-tracker' },
    { img: workoutBuddy, name: 'Workout Buddy', link: 'https://workout-buddy-2.onrender.com/' },
    { img: forecast, name: 'Weather Forecast', link: 'https://suzetsalinas.github.io/weather-forecast/' },
    { img: noterize, name: 'Noterize', link: 'https://noterize-app-6adf8507c2a1.herokuapp.com/' },
    { img: scheduler, name: 'Schedule App', link: 'https://github.com/suzetsalinas/Challenge-5-repo' },

  ];


  const applyBlur = (index) => hoveredItem !== null && hoveredItem !== index ? 'filter blur-sm' : '';

  return (
    <div className="container my-24 mx-auto md:px-6">
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { delay: 0.4 } }
        }}
        className="mb-32 text-center"
      >
        <h1 className="text-3xl font-bold mb-12">My Work</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full md:w-5/12 px-4 mb-12 md:mb-0 ${applyBlur(index)}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className="rounded-lg shadow-lg dark:shadow-black/20" />
              </a>
              <h3>{project.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
export default Portfolio;