import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='bg-black text-white p-14 mb-20 rounded-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='flex gap-4 items-center'>
          <Image src="/assets/time.png" alt="Time Icon" width={50} height={50} />
          <div>
            <p className='text-xs'>We are open monday-friday</p>
            <h3 className='font-bold text-xl'>7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <Image src="/assets/phone.png" alt="Phone Icon" width={50} height={50} />
          <div>
            <p className='text-xs'>Have a question?</p>
            <h3 className='font-bold text-xl'>+2546 251 2658</h3>
          </div>
        </div>
        <div className='flex gap-4 items-center'>
          <Image src="/assets/map.png" alt="Map Icon" width={50} height={50} />
          <div>
            <p className='text-xs'>Need a repair? our address</p>
            <h3 className='font-bold text-xl'>Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
