import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-black/90'>
        <div className='container mx-auto pt-10 pb-5'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='w-auto lg:w-2/4 p-2'>
                    <p className='text-center text-white text-[15px]'>If there are projects or job openings, I would be eager to collaborate. Together, we can achieve our goals and make a positive impact on our company and community.</p>
                </div>
                <button className='bg-slate-400 h-9  text-center rounded-lg px-8'><a href="https://mail.google.com/">Let's Talk Now</a></button>
            </div>
            <div className='pt-5'>
                <hr />
            </div>
            <div className='flex gap-1 justify-center items-center pt-1'>
                <p className='text-center text-white text-[15px] pt-4 lg:pt-7 font-bold'>copyright</p>
                <p className='text-center text-white text-[15px] pt-4 lg:pt-7'>© {new Date().getFullYear()} Rafi Faridz</p>
            </div>

        </div>
    </div>
  )
}

export default Footer