import React from 'react'
import L1 from '../Layout/L1'
import cert1 from '../assets/Images/cert1.png'
import { Link } from 'react-router-dom'


const Certificates = () => {
  return (
    <L1>
       <div className="">
        <Link to='/'> Back to home</Link>
         <div className='text-4xl font-bold text-center '><h1 className='pt-6' >Certficates</h1> </div>      
       <div className='flex justify-center  mt-16 '> 
                <div>
                <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy for completeing <b className='text-teal-400'>Developer Essentials</b> program</span>
                <img className='ml-4 mt-6' src={cert1} alt="" width='240px' height='250px' />
                </div>
                {/* <div>
                <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy for completeing <b className='text-teal-400'>Developer Essentials</b> program</span>
                <img className='ml-4 mt-6' src={cert1} alt="" width='240px' height='250px' />
                </div>
                <div>
                <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy for completeing <b className='text-teal-400'>Developer Essentials</b> program</span>
                <img className='ml-4 mt-6' src={cert1} alt="" width='240px' height='250px' />
                </div>
                <div>
                <span className='text-teal-600'>Certificate Isssued by Kerala Blockchain Acadamy for completeing <b className='text-teal-400'>Developer Essentials</b> program</span>
                <img className='ml-4 mt-6' src={cert1} alt="" width='240px' height='250px' />
                </div> */}
        </div>  
                
         </div>
    </L1>
  )
}

export default Certificates