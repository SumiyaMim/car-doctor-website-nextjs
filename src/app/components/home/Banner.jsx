import React from 'react';
import Image from 'next/image'; 
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';

export default function Banner() {
  return (
    <div className="carousel w-full rounded-md">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[380px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/assets/images/banner/1.jpg"
          alt="Banner 1"
          layout="fill"
          objectFit="center"
          className="rounded-md"
        />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-8 md:pl-12 w-11/12 md:w-4/5 lg:w-3/5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">Affordable Price For Car Servicing</h2>
            <p className="text-xs md:text-sm lg:text-base">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#FF3811] hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Discover More
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide4" className="relative btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowLeftShort className="text-2xl text-white" />
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowRightShort className="text-2xl text-white" />
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[380px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/assets/images/banner/2.jpg"
          alt="Banner 2"
          layout="fill"
          objectFit="center"
          className="rounded-md"
        />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-8 md:pl-12 w-11/12 md:w-4/5 lg:w-3/5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">Affordable Price For Car Servicing</h2>
            <p className="text-xs md:text-sm lg:text-base">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#FF3811] hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Discover More
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide1" className="relative btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowLeftShort className="text-2xl text-white" />
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowRightShort className="text-2xl text-white" />
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[380px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/assets/images/banner/3.jpg"
          alt="Banner 3"
          layout="fill"
          objectFit="center"
          className="rounded-md"
        />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-8 md:pl-12 w-11/12 md:w-4/5 lg:w-3/5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">Affordable Price For Car Servicing</h2>
            <p className="text-xs md:text-sm lg:text-base">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#FF3811] hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Discover More
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide2" className="relative btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowLeftShort className="text-2xl text-white" />
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowRightShort className="text-2xl text-white" />
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-[380px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/assets/images/banner/4.jpg"
          alt="Banner 4"
          layout="fill"
          objectFit="center"
          className="rounded-md"
        />
        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 pl-8 md:pl-12 w-11/12 md:w-4/5 lg:w-3/5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">Affordable Price For Car Servicing</h2>
            <p className="text-xs md:text-sm lg:text-base">
              There are many variations of passages available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#FF3811] hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Discover More
              </button>
              <button className="border border-white hover:bg-white hover:text-black px-5 py-3 rounded font-semibold text-white text-xs md:text-sm">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
          <a href="#slide3" className="relative btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowLeftShort className="text-2xl text-white" />
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#252525] border-[#252525] hover:bg-[#FF3811] hover:border-[#FF3811]">
            <BsArrowRightShort className="text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
