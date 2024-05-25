import React from 'react'

export const Contact = () => {
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
                <div className='flex flex-col gap-4 lg:w-1/3'>
                    <button className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'>
                        <div className='flex gap-3 justify-center items-center'>
                            <i class="fa-solid fa-envelope fa-xl"></i>
                            <a href="https://mail.google.com/">utomorafi207@gmail.com</a>
                        </div>
                    </button>
                    <button className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'>
                        <div className='flex gap-3 justify-center items-center'>
                            <i class="fa-brands fa-instagram fa-xl"></i>
                            <a href="https://www.instagram.com/rafifaridz_/">rafifaridz_</a>
                        </div>
                    </button>
                    <button className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'>
                        <div className='flex gap-3 justify-center items-center'>
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                            <a href="https://www.linkedin.com/in/rafi-faridz-233595298/">rafi-faridz</a>
                        </div>
                    </button>
                    <button className='bg-lime-950 text-white lg:h-14 py-4 px-8 rounded-lg'>
                        <div className='flex gap-3 justify-center items-center'>
                            <i class="fa-brands fa-github fa-xl"></i>
                            <a href="https://github.com/jalalbinotong">jalalbinotong</a>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact