import React from 'react';
import { motion, useInView } from 'framer-motion';

export const Project = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-white w-full' id='project'>
      <div className='container mx-auto pt-14 pb-24'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col gap-4 w-2/3'>
            <h1 className='text-3xl font-medium text-center'>PROJECT</h1>
            <p className='text-center'>
              Want to know about the projects I've created? Here are the projects that I have made (more precisely, the collaborative projects that I have made)
            </p>
          </div>
        </div>

        <div ref={ref} className='lg:grid lg:grid-cols-3 gap-8 m-6 pt-5'>
          {isInView && (
            <>
              <motion.div
                className='card max-w-md shadow-lg mb-5'
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.8 }}
              >
                <a href="">
                  <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?web-developer" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Portfolio Website</h2>
                    <p>As you can see, the website is very simple, I just made it using Reactjs with Tailwind.</p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className='card max-w-md shadow-lg mb-5'
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <a href="https://github.com/jalalbinotong/SIRENMO">
                  <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?coding" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Rent Car Website</h2>
                    <p>The project you are referring to is my 5th semester final project, I made it using laravel with tailwind.</p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className='card max-w-md shadow-lg mb-5'
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a href="https://simlsp2.lab-trpl.id/cmain/tampilberanda">
                  <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?hacker" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Project Based Learning</h2>
                    <p>This is my Project Based Learning with a real case called SIM LSP (Professional Certification Institute System), I made it using CodeIgniter with Bootstrap 5.</p>
                  </div>
                </a>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
