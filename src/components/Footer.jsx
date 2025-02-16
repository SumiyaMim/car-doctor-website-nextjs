import React from 'react'
import Image from 'next/image'
import { BiLogoGoogle } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="bg-[#151515]">
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-8 lg:px-12 flex flex-col md:flex-row gap-6 md:gap-4 justify-between">
        
        {/* Logo and Social Icons Section */}
        <div className="md:w-72 lg:w-96">
          <Image 
            src="/assets/logo2.png" 
            alt="Logo" 
            width={80} 
            height={20} 
            className="mb-6" 
          />
          <p className="text-xs text-white font-light leading-6 mb-6">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur.
          </p>
          <div className="text-white text-base flex items-center gap-4">
            <i className="bg-[#2f2f2f] rounded-full p-3"><BiLogoGoogle /></i>
            <i className="bg-[#2f2f2f] rounded-full p-3"><AiOutlineTwitter /></i>
            <i className="bg-[#2f2f2f] rounded-full p-3"><FaInstagram /></i>
            <i className="bg-[#2f2f2f] rounded-full p-3"><BsLinkedin /></i>
          </div>
        </div>
        
        {/* About Section */}
        <div>
          <h2 className="text-sm text-white font-semibold mb-8">About</h2>
          <p className="text-xs text-white font-light mb-4">Home</p>
          <p className="text-xs text-white font-light mb-4">Service</p>
          <p className="text-xs text-white font-light mb-4">Contact</p>
        </div>
        
        {/* Company Section */}
        <div>
          <h2 className="text-sm text-white font-semibold mb-8">Company</h2>
          <p className="text-xs text-white font-light mb-4">Why Car Doctor</p>
          <p className="text-xs text-white font-light mb-4">About</p>
        </div>
        
        {/* Support Section */}
        <div>
          <h2 className="text-sm text-white font-semibold mb-8">Support</h2>
          <p className="text-xs text-white font-light mb-4">Support Center</p>
          <p className="text-xs text-white font-light mb-4">Feedback</p>
          <p className="text-xs text-white font-light mb-4">Accessibility</p>
        </div>
      </div>
    </div>
  )
}
