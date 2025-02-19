"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/login/components/SocialLogin';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function RegisterForm() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password });
        toast.success("Successfully Register");

        router.push("/login");
        form.reset();
    };

  return (
    <div>
        <h1 className="text-3xl text-center font-bold mb-10">Register</h1>
        <form onSubmit={handleSubmit} >
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered outline-none focus:outline-none" />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered outline-none focus:outline-none" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered outline-none focus:outline-none" />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="bg-[#FF3811] px-5 py-3 w-full rounded-md font-semibold text-white text-xs md:text-sm">
              Register
            </button>
          </div>
          <p className="text-center my-4 text-[#4c4c4c] text-sm">or login with</p>
          <SocialLogin/>
        </form>
        <p className='my-4 text-[#737373] text-sm text-center'>
          Already have an account? <Link className='text-[#FF3811] font-semibold' href="/login">Login</Link>
        </p>
    </div>
  )
}
