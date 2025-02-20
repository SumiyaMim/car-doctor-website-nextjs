import Image from "next/image";
import React from "react";
import Link from "next/link";

export default async function ServiceDetailsPage({ params }) {

  const p = await params;
  const res = await fetch(
    `http://localhost:3000/api/service/${p.id}`
  );
  const data = await res.json();

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12'>
      {/* Banner Section */}
      <div className="relative w-full">
        <Image
          src="/assets/images/checkout/checkout.png"
          width={1137}
          height={300}
          alt="banner"
          className="w-full rounded-md"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent flex items-center px-8 md:px-12">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold">
            Service Details
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-20 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-6">
        {/* Left Side - Service Details */}
        <div className="col-span-2">
          <Image
            src={data?.img}
            width={400}
            height={280}
            alt={data.title}
            className="rounded-md h-72 w-full mb-10"
          />
          <h2 className="font-bold text-2xl mb-4">{data.title}</h2>
          <p className="text-sm leading-6 text-justify text-[#737373]">{data?.description}</p>
          
          {/* Facilities */}
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.facility?.map((facilityItem, id) => (
              <div key={id} className="bg-[#F3F3F3] p-8 rounded-md border-t-2 border-[#FF3811]">
                <h3 className="text-[#444] font-bold text-base mb-2">{facilityItem.name}</h3>
                <p className="text-sm leading-6 text-justify text-[#737373]">{facilityItem.details}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-6 text-justify text-[#737373]">{data?.description}</p>
        </div>
        
        {/* Right Side - Price & Checkout */}
        <div>
          <div className="bg-black rounded-md p-8">
            <Image src="/assets/logo2.png" width={80} height={30} alt="Logo" className="mx-auto mb-5" />
            <p className="text-white font-bold text-center">
              Need Help? We Are Here <br /> To Help You
            </p>
            <div className="my-5 mx-10 bg-white py-8 rounded-md relative">
              <h4 className="text-[#FF3811] text-base font-bold text-center mb-1">Car Doctor <span className="text-black">Special</span></h4>
              <p className="text-[#737373] font-semibold text-xs text-center">Save up to <span className="text-[#FF3811]">60% off</span></p>
              <div className="flex justify-center">
                <button className="bg-[#FF3811] text-white px-5 py-2 rounded-md text-sm font-medium absolute top-[90px]">
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
          <h2 className="font-bold text-xl my-6">Price: ${data?.price}</h2>
          <Link href={`/checkout/${data._id}`}>
            <button className="bg-[#FF3811] w-full text-white p-3 rounded-md text-base font-medium">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
