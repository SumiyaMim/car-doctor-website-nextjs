// "use client";
// import { useEffect, useState } from "react";
import React from 'react'
import Image from "next/image";
import MyOrderTable from '@/components/tables/MyOrderTable';
import { headers } from 'next/headers';

// Get Order for Single User
const fetchMyOrder = async () => {
  const res = await fetch("https://car-doctor-website-nextjs.vercel.app/api/service", 
  {
    headers: new Headers(await headers()),
  });
  const d = await res.json();
  // setData(d);
  return d;
};

export default async function MyOrderPage() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchMyOrder = async () => {
    //         const res = await fetch("https://car-doctor-website-nextjs.vercel.app/api/service");
    //         const d = await res.json();
    //         setData(d);
    //     };
    //     fetchMyOrder()
    // }, []);

    const data = await fetchMyOrder()

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
      <div className="carousel-item relative w-full">
        <Image 
            src="/assets/images/order/order.png" 
            alt="Order" 
            width={1137}
            height={300} 
            className="w-full rounded-md"
        />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-8 md:pl-12">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
                    Order Details
                </h2>
            </div>
        </div>
      </div>

      {/* My Order Table */}
      <MyOrderTable data={data}/>
    </div>
  )
}
