import React from 'react'
import { Link } from 'react-router-dom'
import git from '../assets/Images/git.png'
import mail from '../assets/Images/mail.png'
import linkedin from '../assets/Images/linkedin.png'

const Footer = () => {
  return (
    <>
    <div className='bg-slate-800 h-[400px] w-screen font-mono text-slate-400'>
        <div className='grid grid-cols-2'>
            <div>
                <h1 className='pt-4 text-5xl text-white ml-4  ' >About Me?</h1>
                <div className='ml-4'>
                <span className=''>If you're looking for a dedicated and innovative web developer to bring your project to life, I'd love to hear from you!.</span>
                </div>
                    <div className='w-[900px] grid grid-cols-2 mt-12 text-xl ml-4'>
                        <div>Name <span className='text-white ml-24 '>Anju B Prakash</span></div>
                        <div >Phone No   <span  className='text-white ml-7'>+91 999 569 2846</span></div>  

                        <div className='mt-4'>Experience <span  className='text-white ml-6'>Fresher</span></div>
                        <div className='mt-4'>Email  <span  className='text-white ml-16'>5unni4plr@gmail.com</span></div> 

                        <div className='mt-4'>Nationality<span  className='text-white ml-6'>Indian</span></div>
                        <div className='mt-4'>Languages <span  className='text-white ml-4'>English ,Malayalam</span></div> 
                    </div>
             </div>
             <div className='flex flex-col justify-center items-center mt-16 ml-4 gap-7'>
                  <div className="w-80 h-16 bg-slate-900 border-2 rounded-xl shadow-xl hover:scale-110 transition duration-300  text-center">
                      <Link className="grid grid-cols-2 transition duration-300 " to='https://github.com/an9644' ><h1 className="mt-4 text-end transition duration-300">My Github </h1>
                        <img src={git} width="50px"  className=" mt-1 ml-2 transition duration-300" />
                      </Link>
                  </div>
                  <div className="w-80 h-16 bg-slate-900 border-2 rounded-xl shadow-xl hover:scale-110 transition duration-300  text-center">
                      <Link className="grid grid-cols-2 transition duration-300 " to="https://www.linkedin.com/in/anju-b-prakash-41ba9b316" ><h1 className="mt-4 ml-1 text-end transition duration-300">LinkedIn Account  </h1>
                        <img src={linkedin} width="50px"  className=" mt-1 m transition duration-300" />
                      </Link>
                  </div>
                  <div className="w-80 h-16 bg-slate-900 border-2 rounded-xl shadow-xl hover:scale-110 transition duration-300  text-center">
                      <Link to="mailto:5unni4plr@gmail.com" className="grid grid-cols-2 transition duration-300 " ><h1 className="mt-4 text-end transition duration-300">CONTACT ME  </h1>
                        <img src={mail} width="50px"  className=" mt-1 ml-2 transition duration-300" />
                      </Link>
                  </div>
                
              </div>
        </div>


    </div>
    </>
  )
}

export default Footer