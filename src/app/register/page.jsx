import React from 'react';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage() {

  return (
    <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20'>
      <div className="flex justify-between items-center flex-col md:flex-row gap-10 md:gap-4">
        {/* Left Section */}
        <div className="md:w-1/2">
          <img src="/assets/images/login/login.svg" alt="Sign Up" className='w-full lg:w-96 h-full' />
        </div>

        {/* Right Section */}
        <div className="border p-10 w-full md:w-1/2 rounded-md">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}
