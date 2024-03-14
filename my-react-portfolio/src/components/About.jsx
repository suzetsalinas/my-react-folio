import React from 'react';
import { motion } from 'framer-motion';
import headshot from '../assets/FullSizeRender.png';

function About() {
  return (
    <motion.div className="container my-24 mx-auto md:px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}>
      <section className="mb-32 text-center lg:text-left">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full lg:mb-0 lg:w-5/12">
            <div className="flex justify-center lg:justify-start lg:py-12">
              <img src={headshot} alt='Suzet headshot' className="z-10 w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-blue-400 p-6 text-white lg:pl-12">
              <div className="lg:pl-12" style={{ paddingLeft: '20px' }}> 
                <h1 className="mb-8 text-3xl font-bold">About Me</h1>
                <p className="mb-8 pb-2">
                  Description 1
                </p>
                <p className="mb-8 pb-2">
                  description 2
                </p>
                <p className="mb-8 pb-2">
                  description 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
      );
}

export default About;