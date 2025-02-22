import React from "react";
import Image from 'next/image';
import CheckoutForm from "@/components/forms/CheckoutForm";

export default async function CheckoutPage({ params }) {
  
  const p = await params;
  const res = await fetch(
    `https://car-doctor-website-nextjs.vercel.app/api/service/${p.id}`
  );
  const data = await res.json();

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
      <div className="carousel-item relative w-full">
      <Image
        src="/assets/images/checkout/checkout.png" 
        alt="Checkout"
        className="w-full rounded-md"
        width={1137}
        height={300}
      />
      <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-8 md:pl-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">{data.title}</h2>
        </div>
      </div>
    </div>

    {/* Checkout Form */}
    <CheckoutForm data={data} />
    </div>
  );
}