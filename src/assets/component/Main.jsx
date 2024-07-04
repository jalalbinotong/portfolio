import React from 'react';
import { motion, useInView } from 'framer-motion';

export const Main = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-gray-200' id='about'>
      <div className='container max-w-6xl mx-auto h-4/5 pt-12 pb-32'>
        <div className='lg:flex lg:flex-row lg:justify-between lg:items-center p-6' ref={ref}>
          <motion.div
            className='flex flex-col gap-4'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className='text-lime-900'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              ABOUT ME
            </motion.p>
            <motion.h1
              className='text-4xl font-medium'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Junior Web Developer
            </motion.h1>
            <motion.p
              className='lg:w-4/6 font-normal'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              I am a 6th semester Software Engineering Technology student from Politeknik Negeri Bali with professional experience in Website Developer and System Analyst.
            </motion.p>
            <motion.p
              className='lg:w-4/6 font-normal'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              I am a graduate of the Independent Study Program Batch 6 of the Kampus Merdeka initiative at PT Amanah Karya Indonesia.
            </motion.p>
            <motion.p
              className='lg:w-4/6 font-normal'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 2, duration: 0.5 }}
            >
              One more fact about me is that I love gym, because good body is life like larry😅
            </motion.p>
            <motion.button
              className='bg-lime-900 text-slate-300 w-20 font-medium h-10 rounded-lg'
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <a href="#project">NEXT</a>
            </motion.button>
          </motion.div>
          <motion.div
            className='flex justify-center lg:w-1/2 mt-12'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <img src="./img/Group 2.png" alt="" className='h-96' />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main;
