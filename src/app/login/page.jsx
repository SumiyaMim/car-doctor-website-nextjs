import React from 'react';
import Link from 'next/link';

export default function LoginPage() {

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20'>
      <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-4">
        {/* Left Section */}
        <div className="md:w-1/2">
          <img src="/assets/images/login/login.svg" alt="Sign In" className="w-full lg:w-96 h-full" />
        </div>

        {/* Right Section */}
        <div className="border p-10 w-full md:w-1/2 rounded-md">
          <h1 className="text-3xl text-center font-bold mb-10">Login</h1>
          <form>
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
                Sign In
              </button>
            </div>
          </form>
          <p className="my-4 text-[#737373] text-sm text-center">
            Don't have an account? <Link className="text-[#FF3811] font-semibold" href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
