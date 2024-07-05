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
                  <img className='lg:min-w-full' src="https://img.freepik.com/free-photo/desk-flat-lay-with-tablet_52683-86163.jpg?ga=GA1.1.1704216411.1716215800&semt=sph" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Portfolio Website</h2>
                    <p>As you can see, this website is very simple, I just made it using Reactjs with Tailwind CSS.</p>
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
                <a href="https://github.com/jalalbinotong/mini-project">
                  <img className='lg:min-w-full' src="https://img.freepik.com/free-photo/side-shot-code-editor-using-react-js_181624-61842.jpg?ga=GA1.1.1704216411.1716215800&semt=sph" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Social Media Website</h2>
                    <p>This is an individual Mini Project for participants of the Independent Study Program Batch 6 of the Kampus Merdeka initiative at PT Amanah Karya Indonesia. This mini project was created using the Laravel 10 framework and Bootstrap 5.</p>
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
                <a href="https://github.com/jalalbinotong/Final_Project">
                  <img className='lg:min-w-full' src="https://img.freepik.com/free-photo/workplace-violence-taking-place-colleagues_23-2149361846.jpg?ga=GA1.1.1704216411.1716215800&semt=sph" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Online Student Report</h2>
                    <p>This final project is a team project for participants of the Independent Study Program Batch 6 of the Kampus Merdeka initiative at PT Amanah Karya Indonesia. My role in the team is as a Back-End Developer. This final project was created using the Laravel 10 framework and Bootstrap 5.</p>
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
                  <img className='lg:min-w-full' src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1704216411.1716215800&semt=sph" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Rent Car Website</h2>
                    <p>This final project is a team project from the 5th semester. My role in this project was System Analyst and Back-End Developer. This final project called 'SIRENMO' (Sistem Rental Mobil), was created using Laravel 8 and Tailwind CSS.</p>
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
                  <img className='lg:min-w-full' src="https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?ga=GA1.1.1704216411.1716215800&semt=sph" alt="" />
                  <div className='p-6 gap-4 flex flex-col'>
                    <h2 className='text-lg font-medium'>Project Based Learning</h2>
                    <p>This is a Project Based Learning completed in the 4th semester by a team, involving a real case called SIM LSP (Professional Certification Institute System). This project was created using the CodeIgniter 3 and Bootstrap 5.</p>
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
