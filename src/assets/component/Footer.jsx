import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-black/90'>
        <div className='container mx-auto pt-10 pb-5'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='w-auto lg:w-2/4 p-2'>
                    <p className='text-center text-white text-[15px]'>If there are projects or job openings, let's work together. Together, let's achieve our goals and have a positive impact on our company and community.</p>
                </div>
                <button className='bg-slate-400 h-9  text-center rounded-lg px-8'>Let's Talk Now</button>
            </div>
            <div className='pt-4'>
                <hr />
                <p className='text-center text-white text-[13px] pt-4 lg:pt-7'>@Copyright - Rafi Faridz 2024 </p>
            </div>
        </div>
    </div>
  )
}

export default Footer