import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from 'react-icons/bs';

export default async function Services() {

    const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.find({}).toArray();
    
  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 lg:py-20'>
        <div className="text-center">
            <h3 className='text-base md:text-lg text-[#FF3811] font-bold mb-2'>Our Services</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Service Area</h2>
            <p className="text-[#737373] text-sm leading-6 text-center lg:w-1/2 mx-auto mb-10">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-12 gap-6 container mx-auto">
            {data.map((item) => {
                return (
                <div
                    className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full rounded-lg border"
                    key={item._id}
                >
                    <figure className="w-full h-3/4 flex justify-center items-center">
                    <Image
                        className="w-full h-full object-fit"
                        src={item.img}
                        width={314}
                        height={108}
                        alt={item.title}
                    />
                    </figure>
                    <h2 className='py-3 text-xl font-bold'>{item.title}</h2>
                    <div className='text-[#FF3811] font-bold text-base flex justify-between items-center'>
                        <p>Price: ${item.price}</p>
                        <Link
                        href={`/services/${item._id}`}
                        className="text-orange-500"
                        >                    
                        <button><BsArrowRightShort className='text-3xl'></BsArrowRightShort></button>
                        </Link>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
  );
}