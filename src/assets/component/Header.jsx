import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import TypeIt from "typeit-react";
import { motion } from 'framer-motion';

const Header = () => {
  const [name] = useState("Hi! it's Rafi Faridz")
  const [desc] = useState("I'm a junior web dev, ya know? Sometimes coding's like, cool vibes, but other times, it's like, nah, not feelin' it.")
  
  return (
    <div style={{ backgroundImage: "url('./img/hero.png')" }} id='home' className='w-screen h-screen'>
        <Navbar/>
        {/* <div className='w-full flex flex-col gap-10 justify-center items-center h-4/5'>
            <h1 className='text-6xl font-medium text-white'>Hi! its Rafi Faridz</h1>
            <p className='w-1/3 text-center text-white text-lg'>I'm a junior web dev, ya know? Sometimes coding's like, cool vibes, but other times, it's like, nah, not feelin' it.</p>
            <button className='bg-white w-52 text-slate-800 font-medium h-14 rounded-lg'>CONTACT ME</button>
        </div> */}
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto">
              <div className="flex flex-col justify-center items-center text-center space-y-4">
                <h1 className="text-white text-4xl">
                  <TypeIt>{name}</TypeIt>
                </h1>
                <p className="text-white lg:text-lg text-sm lg:w-1/3 w-4/5">
                  <TypeIt options={{speed: 50, nextStringDelay: 3000}}>{desc}</TypeIt>
                </p>
                <motion.button 
                  className="bg-white text-[#282828] px-4 py-2 rounded"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, backgroundColor: '#A3E635' }}
                >
                  <a href="#contact">Contact Me</a>
                </motion.button>
              </div>
            </div>
        </section>

    </div>
  )
}

export default Header