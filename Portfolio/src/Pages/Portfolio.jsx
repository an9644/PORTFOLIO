import React from 'react'
import me from '../assets/Images/image.jpg'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

import git from '../assets/Images/git.png'
import mail from '../assets/Images/mail.png'
import linkedin from '../assets/Images/linkedin.png'
import cert1 from '../assets/Images/cert1.png'
import cert2 from '../assets/Images/cert2.jpg'
import cert3 from '../assets/Images/cert3.jpg'
import cert4 from '../assets/Images/cert4.jpg'
import cv from "../assets/Images/ANJUNPRAKASH-CV.pdf"
import career from '../assets/Images/career.png'
import kba from '../assets/Images/kba.png'
import lms from '../assets/Images/lms.png'
import getcerti from '../assets/Images/getcerti.png'
 

const Portfolio = () => {

  return (
    <>
    <div className='bg-slate-900 md:w-screen w-[400px] h-auto font-mono text-white'>
    {/* <!-- Navbar --> */}
    <Navbar />
     <div className="md:grid md:grid-cols-2 ">
            <div className=" md:mt-44 mt-6 p-4 text-white font-mono ml-6">
              <h1 className="text-sm p-2 ">Full Stalk Developer</h1>
              <h2 className="md:text-6xl text-3xl mt-4 " >Hello I'm <br /></h2>
                <span className="md:text-7xl text-5xl mt-4 text-teal-400">Anju B Prakash..</span>   <br/>
              <div className="mt-9"> I am a MERN stalk developer with a strong foundation of <br/>MongoDB,Express,React,Node.js, Docker and git. I am skilled <br/> at developing front-end interfaces to back-end
                services.
              </div>
              <div className="mt-8">  As a recent graduate.I am eager to apply my skills in  <br/>a dynamic team environment and continue learning
                and growing as a developer. </div>  
                        
                <div className="flex justify-start md:ml-4  mt-4">
                <div className="rounded-full border-2 p-2 border-teal-400 shadow-lg shadow-teal-500 w-32  mr-4 h-16 pt-4 "  ><a href={cv} download="ANJUNPRAKASH-CV.pdf" style={{borderRadius:"10px"}} className="bg-[#5f99be;">
                        Download CV <i className="fa-solid fa-download"></i> </a> </div>
                 <Link className="rounded-full border-2 p-2 border-teal-400 shadow-lg shadow-teal-500 mr-4 " to="https://github.com/an9644" ><img src={git} width="50px" /></Link>
                <Link className="rounded-full border-2 p-2 border-teal-400 shadow-lg shadow-teal-500 mr-4" to="mailto:5unni4plr@gmail.com"  ><img src={mail} width="50px" />  </Link>
                <Link className="rounded-full border-2 p-2 border-teal-400 shadow-lg shadow-teal-500" to="https://www.linkedin.com/in/anju-b-prakash-41ba9b316" > <img src={linkedin} width="50px" />  </Link>
</div>         
              </div>
            <div className="md:mt-44 mt-12 md:ml-64 ml-24" >
              <img className="md:rounded-full rounded-[100px] md:w-96 w-[190px] h-[190px]  md:h-96 border-4 p-2 border-teal-400 border-dashed  " src={me}  />         
               </div>
     </div>
     <div className="border-2 h-12 w-full  bg-teal-800 mt-24"></div>

     {/* <!-- Skills --> */}
      <section id='skills' className="p-4 mr-4 mt-32 border-2 border-teal-400 h-auto  rounded-lg shadow-lg shadow-teal-500  ">
        <div id="skills" className="py-4">
        <div className="text-3xl text-white  font-bold border-2 border-teal-400 w-56 md:ml-[890px]  p-2 rounded-lg ">
          <h1 className="sm:ml-8 ">  <span> &nbsp;Skills</span>    </h1>
        </div>

       <div className="text-center mt-3">
                    <span className="">FRONTEND/UI DEVELOPMENT </span>   <br/>
              <div className="text-center mt-2 flex justify-center   space-x-4">
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">HTML</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">CSS</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-36 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">JavaScript</span>  </div> 
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-36 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Tailwind</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">React</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-36 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">BootStrap</span>  </div>
              </div>
              <div className="mt-4">  <span className="text-center ">BACKEND DEVELOPMENT</span>   <br/>        </div>
              <div className="text-center mt-2 flex justify-center space-x-4">
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">MongoDB</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Node.js</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Express</span>  </div>
              </div>
              <div className="mt-4">  <span className="text-center ">VERSION CONTROL</span>   <br/></div>
              <div className="text-center mt-2 flex justify-center space-x-4">
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">GitHub</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Git</span>  </div>
              </div>
              <div className="mt-4"> <span className="text-center ">OTHER TOOLS & SERVICES</span>   <br/>              </div>
              <div className="text-center mt-2 flex justify-center space-x-4">
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Docker</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">VS Code</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-24 h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">Linux</span>  </div>
                <div className="mt-4  border-2 border-teal-400 bg-teal-400 w-auto h-8 rounded-xl p-1 justify-center"> <span className=" p-1  text-black font-bold">MS-Office</span>  </div>
              </div>
       </div>
     </div></section>

{/* <!-- Education -->
    <div>
      <div id="education" className="py-4">


      </div>
    </div> */}

     {/* <!-- Projects --> */}
     <section id="projects" className='mt-12 ml-4 '>
      <h1>  <span className='text-5xl font-bold ml-[75vh] '>My <b className='text-teal-400 '>P</b>roj<b className='text-teal-400'>e</b>cts...</span>      </h1>
  <div className='text-center mr-4 sm:mt-5'>
    <span>In my portfolio, I am showcasing my recent projects that demonstrate my skills and expertise. Below, you'll find my latest works....</span>
  </div>
  <div className="md:p-4  md:ml-6">
    {/* Project 1 */}
    <div className="mt-8 mr-2 border-2 border-teal-400 shadow-lg shadow-teal-800 md:w-[188vh] md:h-80 md:grid md:grid-cols-2 hover:scale-102 transition duration-400  rounded-xl">
      <div className="mt-12 ml-4">
        <span className="text-2xl font-bold">CAREER GUIDANCE APP</span> <br/>
        <hr className="w-72 mt-2"/>  <hr className="w-72 border-teal-400"/>    <hr className="w-72 mb-4"/>
        <span className='md:text-center'>&nbsp; &nbsp; &nbsp;This is the project that students will get personalized career guidance from best career counselors and they can explore more high paying jobs student can book a live div and personalized guidance for better future.</span> <br/>
        <h3 className="mt-6">  <a className="p-2 bg-teal-400 rounded-xl text-black font-bold shadow-lg hover:shadow-teal-600 " href="https://github.com/an9644/Career-Guidence-App">GO TO REPOSITORY</a>           </h3>
      </div>
      <div className="m-4 flex justify-center mt-8">
        <img className="md:w-[500px] w-[300px] rounded-xl h-56 bg-cover object-cover border-4 border-teal-600"  src={career} alt=""/>
      </div>
    </div>
    {/* Project 2 */}
    <div className="mt-24 mr-2 border-2 border-teal-400 shadow-lg shadow-teal-800 md:w-[188vh] md:h-80 md:grid md:grid-cols-2 hover:scale-102 transition duration-400  rounded-xl">
      <div className="md:m-4 flex justify-center mt-8">
        <img className="md:w-[500px] w-[300px] rounded-xl h-56 mt-6 bg-cover object-cover  border-4 border-teal-600"  src={kba} alt="" />
      </div>
      <div className="md:mt-12 mt-6 ml-4">
        <span className="text-2xl font-bold">KBA WEBSITE</span> <br/>
        <hr className="w-44 mt-2" />  <hr className="w-44 border-teal-400"/>    <hr className="w-44 mb-4"/>
        <span className='md:text-center'>&nbsp; &nbsp; &nbsp;This is the Kerala Blockchain Academy website that user can see courses available in here and their details .</span> <br/>
        <h3 className="mt-6 mb-4">  <a className="p-2 bg-teal-400 rounded-xl text-black font-bold shadow-lg hover:shadow-teal-600 " href="https://github.com/an9644/KBA-Website">GO TO REPOSITORY</a>           </h3>
      </div>
    </div>
    {/* Project 3 */}
    <div className="mt-24 mr-2 border-2 border-teal-400 shadow-lg shadow-teal-800 md:w-[188vh] md:h-80 md:grid md:grid-cols-2 hover:scale-102 transition duration-400  rounded-xl">
      <div className="md:mt-12 mt-8 ml-4">
        <span className="text-2xl font-bold">LIBRARY MS</span> <br/>
        <hr className="w-44 mt-2"/>  <hr className="w-44 border-teal-400"/>    <hr className="w-44 mb-4"/>
        <span>&nbsp; &nbsp; &nbsp;Its a Website we can see books, all the details about books , can see them with different categories. admin can add book details, update and remove them . </span> <br/>
        <h3 className="mt-6">  <a className="p-2 bg-teal-400 rounded-xl text-black font-bold shadow-lg hover:shadow-teal-600 " href="https://github.com/an9644/LIBRARY-MS">GO TO REPOSITORY</a>           </h3>
      </div>
      <div className="m-4 flex justify-center mt-8">
        <img className=" md:w-[500px] w-[300px] rounded-xl h-56 bg-cover object-cover  border-4 border-teal-600"  src={lms} alt=""/>
      </div>
    </div>
    {/* Project 4 */}
    <div className="mt-24 mr-2 border-2 border-teal-400 shadow-lg shadow-teal-800 md:w-[188vh] md:h-80 md:grid md:grid-cols-2 hover:scale-102 transition duration-400  rounded-xl">
      <div className="m-4 flex justify-center mt-8">
        <img className="md:w-[500px] w-[300px] rounded-xl h-56 bg-cover object-cover  border-4 border-teal-600"  src={getcerti} alt="" />
      </div>
      <div className="md:mt-12 mt-7 ml-4">
        <span className="text-2xl font-bold">GET CERTIFICATE APP</span> <br/>
        <hr className="w-72 mt-2"/>  <hr className="w-72 border-teal-400"/>    <hr className="w-72 mb-4"/>
        <span>&nbsp; &nbsp; &nbsp;It is a app user will get their certificate buy searching them on here, the certificate was added by admin and user can see their details like name , mark , <br />grade,course ,passing date also.</span> <br/>
        <h3 className="mt-6 mb-4">  <a className="p-2 bg-teal-400 rounded-xl text-black font-bold shadow-lg hover:shadow-teal-600 " href="https://github.com/an9644/GetCertificate-App">GO TO REPOSITORY</a>           </h3>
      </div>
    </div>
  </div>
</section>

   {/* Body part of education */}
<section id='education' className='mt-12 ml-4 sm:ml-8 md:ml-12  '>
  <div className='text-center mt-4 mb-4'>  <span className='text-5xl font-bold '>My <b className='text-teal-400'>E</b>d<b className='text-teal-400'>u</b>cation..</span> <br />  </div>
  <div className='text-center mb-12 '>
    <span>Throughout the years, I studied various subjects and institutions. <br /> I gained a wealth of knowledge and experience from these places, which shaped who I am today. </span>
  </div>
  {/* 1 */}
  <div className='flex justify-center mr-44  gap-24 text-slate-400'>
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
  <div className='flex justify-center mt-12 mr-44  gap-24 text-slate-400 pb-12'>
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
</section>
          {/* <div className='w-[900px] h-[600px]  ml-[450px] mt-44  ' >
          <img src={cv} alt="" />
        </div> */}


  
              {/* Certification */}
              <section id="certificates" className='mx-4'>
        <div className='text-4xl font-bold text-center   '>
          <h1 className='pt-6 font-bold text-5xl pr-9' >
            <b className='text-teal-400'>C</b>ert<b className='text-teal-400'>f</b>icates
          </h1> 
        </div>      
        <div className='grid grid-cols-4  mt-16  gap-12 pb-12'> 
          <div className='w-[45vh] text-center'>
            <span className='text-teal-600 text-center'>Certificate Isssued by Kerala Blockchain Acadamy  for completeing <b className='text-teal-400'>Developer Essentials</b> program.</span>
            <img className='ml-24 mt-6 ' src={cert1} alt="" width='240px' height='250px' />
          </div>
          <div className='w-[45vh] text-center'>
            <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy  for participating in the online session <b className='text-teal-400'>Blockchain for Agriculture-Fresh Produce Traceability</b> program.</span>
            <img className='ml-24 mt-6' src={cert2} alt="" width='240px' height='250px' />
          </div>
          <div className='w-[45vh] text-center'>
            <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy  for participating the Hackathone name<b className='text-teal-400'> BlockHack 2024</b>.</span>
            <img className='ml-24 mt-6' src={cert4} alt="" width='240px' height='250px' />
          </div>
          <div className='w-[45vh] text-center'>
            <span className='text-teal-600'>Certificate Isssued by Freedom with AI for participating in the online session <b className='text-teal-400'>Freedom with AI Masterclass </b> Program.</span>
            <img className='ml-24 mt-6' src={cert3} alt="" width='240px' height='250px' />
          </div>
        </div>   
      </section>
    <Footer />
    </div>
    </>
  )
}

export default Portfolio
