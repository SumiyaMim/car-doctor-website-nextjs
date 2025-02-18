import React from 'react'
import Image from 'next/image'

export default function Team() {
  return (
    <div className='mb-20'>
      <div className="text-center">
        <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Team</h3>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">
          The majority have suffered alteration in some form, by injected humour, 
          or randomised words which do not look even slightly believable.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='rounded-md border p-5 text-center'>
          <div className="w-full h-auto mb-3">
            <Image src="/assets/images/team/1.jpg" alt="John Smith" width={500} height={500} className='rounded-md w-full object-cover' />
          </div>
          <h2 className='font-bold text-lg text-[#444] mb-1'>John Smith</h2>
          <p className='text-sm text-[#737373] font-semibold mb-3'>Parts Technicians</p>
          <Image src="/assets/social.png" alt="Social Icons" width={112} height={28} className='w-28 mx-auto' />
        </div>
        <div className='rounded-md border p-5 text-center'>
          <div className="w-full h-auto mb-3">
            <Image src="/assets/images/team/2.jpg" alt="James Brown" width={500} height={500} className='rounded-md w-full object-cover' />
          </div>
          <h2 className='font-bold text-lg text-[#444] mb-1'>James Brown</h2>
          <p className='text-sm text-[#737373] font-semibold mb-3'>Engine Expert</p>
          <Image src="/assets/social.png" alt="Social Icons" width={112} height={28} className='w-28 mx-auto' />
        </div>
        <div className='rounded-md border p-5 text-center'>
          <div className="w-full h-auto mb-3">
            <Image src="/assets/images/team/3.jpg" alt="Michael Davis" width={500} height={500} className='rounded-md w-full object-cover' />
          </div>
          <h2 className='font-bold text-lg text-[#444] mb-1'>Michael Davis</h2>
          <p className='text-sm text-[#737373] font-semibold mb-3'>Car Detailer</p>
          <Image src="/assets/social.png" alt="Social Icons" width={112} height={28} className='w-28 mx-auto' />
        </div>
      </div>
    </div>
  )
}
