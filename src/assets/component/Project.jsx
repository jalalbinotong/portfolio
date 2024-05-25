import React from 'react'

export const Project = () => {
  return (
    <div className='bg-white w-full' id='project'>
        <div className='container mx-auto pt-14 pb-24'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col gap-4 w-2/3'>
                    <h1 className='text-3xl font-medium text-center'>PROJECT</h1>
                    <p className='text-center'>Want to know about the projects I've created? Here are the projects that I have made (more precisely, the collaborative projects that i have made)</p>
                </div>
            </div>
     
            <div className='lg:grid lg:grid-cols-3 gap-8 m-6 pt-5'>
                <div className='card max-w-md shadow-lg mb-5'>
                    <a href="">
                        <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?web-developer" alt="" />
                        <div className='p-6 gap-4 flex flex-col'>
                            <h2 className='text-lg font-medium'>Portfolio Website</h2>
                            <p>As you can see, the website is very simple, I just made it using Reactjs with Tailwind.</p>
                        </div>
                    </a>
                </div>
                <div className='card max-w-md shadow-lg mb-5'>
                    <a href="https://github.com/jalalbinotong/SIRENMO">
                        <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?coding" alt="" />
                        <div className='p-6 gap-4 flex flex-col'>
                            <h2 className='text-lg font-medium'>Rent Car Website</h2>
                            <p>The project you are referring to is my 5th semester final project, I made it using laravel with tailwind.</p>
                        </div>
                    </a>
                </div>
                <div className='card max-w-md shadow-lg mb-5'>
                    <a href="https://simlsp2.lab-trpl.id/cmain/tampilberanda">
                        <img className='lg:min-w-full' src="https://source.unsplash.com/random/400x300?hacker" alt="" />
                        <div className='p-6 gap-4 flex flex-col'>
                            <h2 className='text-lg font-medium'>Project Based Learning</h2>
                            <p>This is my Project Based Learning with a real case called SIM LSP (Professional Certification Institute System), I made it using CodeIgniter with Bootstrap 5.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project