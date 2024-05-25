import React from 'react'

export const Main = () => {
  return (
    <div className='bg-gray-200' id='about'>
        <div className='container max-w-6xl mx-auto h-4/5 pt-12 pb-32'>
            <div className='lg:flex lg:flex-row lg:justify-between lg:items-center p-6'>
                <div className='flex flex-col gap-4'>
                    <p className='text-lime-900'>ABOUT ME</p>
                    <h1 className='text-4xl font-medium'>Junior Web Developer</h1>
                    <p className='lg:w-4/6 font-normal'>I am a 6th semester Software Engineering Technology student from Politeknik Negeri Bali with professional experience in Backend Developer and System Analyst.</p>
                    <p className='lg:w-4/6 font-normal'>One more fact about me is that I love gym, because good body is life like larry😅</p>
                    <button  className='bg-lime-900 text-slate-300 w-20 font-medium h-10 rounded-lg'><a href="#project">NEXT</a></button>
                </div>
                <div className='flex justify-center lg:w-1/2 mt-12'>
                    <img src="./img/Group 2.png" alt="" className='h-96'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Main