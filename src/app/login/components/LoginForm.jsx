"use client"
import React from 'react'
import Link from 'next/link'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

export default function LoginForm() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        toast("Submitting.....");

        try {
            const response = await signIn("credentials", {
              email,
              password,
              callbackUrl: "/",
              redirect: false,
            });
            if (response.ok) {
              toast.success("Successfully Login");
              router.push("/");
              form.reset();
            } else {
                toast.error("Failed to Login");
            }
            //console.log({ email, password });
          } catch (error) {
            console.log(error);
            toast.error("Failed to Login");
          }
    };

  return (
    <div>
       <h1 className="text-3xl text-center font-bold mb-10">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered outline-none focus:outline-none" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered outline-none focus:outline-none" />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="bg-[#FF3811] px-5 py-3 w-full rounded-md font-semibold text-white text-xs md:text-sm">
              Login
            </button>
          </div>
        </form>
        <p className="my-4 text-[#737373] text-sm text-center">
          Don't have an account? <Link className="text-[#FF3811] font-semibold" href="/register">Register</Link>
        </p>
    </div>
  )
}
