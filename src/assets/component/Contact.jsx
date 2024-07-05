import React from 'react';
import { motion, useInView } from 'framer-motion';

export const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-gray-200' id='contact'>
      <div className='container mx-auto pt-32 pb-32'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col gap-4 lg:w-1/3'>
            <h1 className='text-3xl font-medium text-center'>CONTACT ME</h1>
            <p className='text-center text-[16px]'>Here list my social media that you can search for. Feel free when you contact me.</p>
          </div>
        </div>
        <div className='flex justify-center items-center pt-9'>
          <div ref={ref} className='flex flex-col gap-4 lg:w-1/3'>
            {isInView && (
              <>
                <motion.button
                  className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#A3E635' }}
                >
                  <div className='flex gap-3 justify-center items-center'>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                    <a href="https://mail.google.com/">utomorafi207@gmail.com</a>
                  </div>
                </motion.button>
                <motion.button
                  className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#A3E635' }}
                >
                  <div className='flex gap-3 justify-center items-center'>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                    <a href="https://www.linkedin.com/in/rafi-faridz-utomo/">rafi-faridz-utomo</a>
                  </div>
                </motion.button>
                <motion.button
                  className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#A3E635' }}
                >
                  <div className='flex gap-3 justify-center items-center'>
                    <i className="fa-brands fa-instagram fa-xl"></i>
                    <a href="https://www.instagram.com/rafifaridz_/">rafifaridz_</a>
                  </div>
                </motion.button>
                <motion.button
                  className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#A3E635' }}
                >
                  <div className='flex gap-3 justify-center items-center'>
                    <i className="fa-brands fa-github fa-xl"></i>
                    <a href="https://github.com/jalalbinotong">jalalbinotong</a>
                  </div>
                </motion.button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
