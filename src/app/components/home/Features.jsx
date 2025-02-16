import React from 'react'
import Image from 'next/image'

export default function Features() {
  return (
    <div className='mb-20'>
      <div className="text-center">
        <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Core Features</h3>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">
          The majority have suffered alteration in some form, by injected humour, 
          or randomised words which do not look even slightly believable.
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5'>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/team.svg" alt="Expert Team" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>Expert Team</h3>
        </div>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/time.svg" alt="Timely Delivery" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>Timely Delivery</h3>
        </div>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/support.svg" alt="24/7 Support" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>24/7 Support</h3>
        </div>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/equipment.svg" alt="Best Equipment" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>Best Equipment</h3>
        </div>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/check.svg" alt="100% Guarantee" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>100% Guarantee</h3>
        </div>
        <div className='border rounded-md p-5 text-center'>
          <Image src="/assets/icons/delivery.svg" alt="Fast Delivery" width={56} height={56} className='mb-3 mx-auto h-14 w-14' />
          <h3 className='text-sm font-semibold'>Fast Delivery</h3>
        </div>
      </div>
    </div>
  )
}
