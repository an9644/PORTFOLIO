import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='shadow-xl shadow-teal-400' >      
      <ul className='md:flex md:justify-end gap-5 p-5 text-center' >
        <li><a href="#/" className="text-lg hover:text-teal-300">Home</a></li>
        {/* <li><a href="#skills" className="text-lg hover:text-teal-300">Service</a> </li> */}
        <li><a href="#skills" className="text-lg hover:text-teal-300">Skills</a> </li>
        <li><a href="#education" className="text-lg hover:text-teal-300">Education</a> </li>
        <li><a href="#projects" className="text-lg hover:text-teal-300">Projects</a> </li>
        <li><a href="#certificates" className="text-lg hover:text-teal-300">Certificates</a>
        </li>
      </ul>
    </div>
    
    </>
  )
}

export default Navbar

{/* <ul className="md:flex md space-x-8">
</ul> */}