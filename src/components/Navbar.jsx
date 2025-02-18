"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsHandbag } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; 
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {

  const pathname = usePathname(); 
  const { data: session, status } = useSession();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.name) {
      setUserName(session.user.name);
    }
  }, [session, status]);

  const navMenu = () => {
    return (
      <>
        <li className={pathname === "/" ? "text-xs md:text-sm font-semibold text-[#FF3811]" : "text-xs md:text-sm font-semibold"}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={pathname === "/about" ? "text-xs md:text-sm font-semibold text-[#FF3811]" : "text-xs md:text-sm font-semibold"}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={pathname === "/services" ? "text-xs md:text-sm font-semibold text-[#FF3811]" : "text-xs md:text-sm font-semibold"}>
          <Link href={"/services"}>Services</Link>
        </li>{" "}
        <li className={pathname === "/blogs" ? "text-xs md:text-sm font-semibold text-[#FF3811]" : "text-xs md:text-sm font-semibold"}>
          <Link href={"/"}>Blogs</Link>
        </li>{" "}
        <li className={pathname === "/my-bookings" ? "text-xs md:text-sm font-semibold text-[#FF3811]" : "text-xs md:text-sm font-semibold"}>
          <Link href={"/"}>My Bookings</Link>
        </li>
      </>
    );
  };

  return (
    <div>
      <div className="navbar max-w-7xl mx-auto pl-3 md:pl-5 pr-8 lg:px-12 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-7 rounded-box z-[1] w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            <Image
              src={"/assets/logo.svg"}
              width={60}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center justify-center gap-10 font-medium text-sm menu-horizontal px-1">
            {navMenu()}          
          </ul>
        </div>
        <div className="navbar-end items-center gap-5">
            <i><BsHandbag></BsHandbag></i>
            <i><FiSearch></FiSearch></i>
            {status === "authenticated" ? (
              <div className="dropdown dropdown-end">
               <label tabIndex={0} className="avatar">
                 <p className="font-semibold">{userName}</p>
               </label>
               <ul
                 tabIndex={0}
                 className="menu-sm dropdown-content mt-10 z-[1] p-4 shadow text-center bg-base-100 rounded-box w-52"
               >
                 <li>
                   <button onClick={() => signOut()} className="text-xs lg:text-sm font-bold hover:text-[#FF3811]">Log out</button>
                 </li>
               </ul>
              </div> 
            ) : (
              <Link href={"/login"}>
                <button className="border border-[#FF3811] hover:bg-[#FF3811] hover:text-white px-4 py-2 rounded font-semibold text-[#FF3811] text-xs md:text-sm">Sign in</button>
            </Link>
            )}

           
        </div>
      </div>
    </div>
  );
}
