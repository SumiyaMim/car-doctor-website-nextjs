import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from 'react-icons/bs';
export default async function Services() {

    const data = [
        {
            "_id": "635a0c0b64a6d231228942ae",
            "service_id": "04",
            "title": "Engine Oil Change",
            "img": "https://i.ibb.co/T2cpBd5/888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635a0c0b64a6d231228942af",
            "service_id": "05",
            "title": "Battery Charge",
            "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b591a1dafe382a9da8c96",
            "service_id": "01",
            "title": "Full car Repair",
            "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
            "price": "200.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5afc1dafe382a9da8c98",
            "service_id": "02",
            "title": "Engine Repair",
            "img": "https://i.ibb.co/5MvmD2g/88.jpg",
            "price": "150.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5b691dafe382a9da8c99",
            "service_id": "03",
            "title": "Automatic Services",
            "img": "https://i.ibb.co/wh7t3N3/555.jpg",
            "price": "30.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5ba51dafe382a9da8c9a",
            "service_id": "06",
            "title": "Electrical System",
            "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        }
    ]
    
  return (
<div className='py-10 lg:py-20'>
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