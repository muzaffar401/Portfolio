import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Muzaffar</h1>

            <div className='flex space-x-6 mt-4'>
                <a href="https://www.linkedin.com/in/muzaffar-ahmed-b8652b2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='hover:text-gray-300'>
                    <FaLinkedin size={24}/>
                </a>
                <a href="https://x.com/Muzaffar401?t=5Oo42XPN4flIP3PEomc2Vg&s=09" className='hover:text-gray-300'>
                    <FaTwitter size={24}/>
                </a>
                <a href="https://www.instagram.com/muzaffar______ahmed?igsh=MXN5amZzcWU4eDRtZg==" className='hover:text-gray-300'>
                    <FaInstagram size={24}/>
                </a>
            </div>
    </div>
  )
}

export default Footer