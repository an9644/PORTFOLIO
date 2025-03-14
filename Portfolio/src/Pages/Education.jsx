import React from 'react'
import L1 from '../Layout/L1'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <>
    <L1>    
    <div className=''>
        <div className=' '>
          <Link to='/' className='ml-12 font-bold text-teal-400 '>Back to home </Link> 
        </div>

        {/* Body part of education */}
        <span>My education..</span> <br />
        <span>something</span>
        {/* 1 */}
        <div className='flex justify-center  gap-24 text-slate-400'>
            <div className='bg-slate-800 w-96 h-80 rounded-xl ml-16 shadow-xl shadow-teal-800 hover:shadow-2xl hover:shadow-teal-400 hover:scale-105 transition duration-300 ease-in-out  '>
              <h1 className='mt-12 ml-4 text-teal-300 '>2024-Present</h1>
              <h2 className='ml-4 mt-2 text-2xl font-bold text-white '>PG Diploma in Blockchain</h2>
              <h3 className='ml-6 mt-4'>--MERN Stalk Devlopment</h3>
              <h3 className='ml-6'>--Docker</h3>
              <h3 className='ml-6 mt-4'>Kerala Blockchain Acadamy (KBA) </h3>
              <h3 className='ml-6'>Thiruvananthapuram</h3>              
            </div>
            <div className='bg-slate-800 w-96 h-80 rounded-xl ml-16 shadow-xl shadow-teal-800 hover:shadow-2xl hover:shadow-teal-400 hover:scale-105 transition duration-300 ease-in-out  '>
              <h1 className='mt-12 ml-4 text-teal-300 '>2021-2024</h1>
              <h2 className='ml-4 mt-2 text-2xl font-bold text-white '>Bachelor's in Computer Application</h2>
              {/* <h3 className='ml-6 mt-4'>--</h3>
              <h3 className='ml-6'>--Docker</h3>*/}
              <h3 className='ml-6 mt-8'>Musaliar College of Arts and Science </h3> 
              <h3 className='ml-6 mt-2 '>Pathanamhtitta</h3>              
            </div>
            <div className='bg-slate-800 w-96 h-80 rounded-xl ml-16 shadow-xl shadow-teal-800 hover:shadow-2xl hover:shadow-teal-400 hover:scale-105 transition duration-300 ease-in-out  '>
              <h1 className='mt-12 ml-4 text-teal-300 '>2019-2020</h1>
              <h2 className='ml-4 mt-2 text-2xl font-bold text-white '>Diploma in Computer Application</h2>
              <h3 className='ml-6 mt-4'>--MS Office</h3>
              <h3 className='ml-6'>--Basics of Computer World</h3>
              <h3 className='ml-6 mt-4'>NSS Computer Center </h3>
              <h3 className='ml-6'>Punalur,Kollam</h3>              
            </div>
          </div>
          <div className='flex justify-center mt-12  gap-24 text-slate-400'>
          <div className='bg-slate-800 w-96 h-80 rounded-xl ml-16 shadow-xl shadow-teal-800 hover:shadow-2xl hover:shadow-teal-400 hover:scale-105 transition duration-300 ease-in-out  '>
              <h1 className='mt-12 ml-4 text-teal-300 '>2019-2021</h1>
              <h2 className='ml-4 mt-4 text-2xl font-bold text-white '>Higher Scondary </h2>
              <h3 className='ml-6 mt-8'>HSS for Boys </h3>
              <h3 className='ml-6 mt-2'>Punalur,Kollam</h3>              
            </div>
            <div className='bg-slate-800 w-96 h-80 rounded-xl ml-16 shadow-xl shadow-teal-800 hover:shadow-2xl hover:shadow-teal-400 hover:scale-105 transition duration-300 ease-in-out  '>
              <h1 className='mt-12 ml-4 text-teal-300 '>2019</h1>
              <h2 className='ml-6 mt-2 text-2xl font-bold text-white '>S.S.L.C</h2>
              <h3 className='ml-6 mt-4'>Chemmanthoor High School (CHS) </h3>
              <h3 className='ml-6 mt-4'>Punalur,Kollam</h3>              
            </div>
          </div>

          {/* <div className='w-[900px] h-[600px]  ml-[450px] mt-44  ' >
          <img src={cv} alt="" />
        </div> */}

     </div>
    
        
        </L1>
    </>
  )
}
export default Education