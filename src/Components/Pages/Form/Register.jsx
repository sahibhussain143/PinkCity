

import React from 'react';
import {  FaMailBulk, FaPhoneAlt,  } from 'react-icons/fa';


function Register() {
  return (
    <div className="p-12 pt-[200px] flex items-center justify-center bg-gray-100  ">
      <div className="flex w-full max-w-7xl bg-white p-8 rounded-lg shadow-lg">
        
        <div className="w-full lg:w-1/2 pr-4">
          <h2 className="text-2xl  text-center text-pink-700 mb-6 font-bold">Register Here!</h2>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="number"
                id="mobile no."
                name="number"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your Mobile No."
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email address"
                required
              />
            </div>


            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-pink-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="hidden lg:block w-1/2 pl-4">
       <h1 className='text-2xl font-semibold text-pink-500 p-2 text-center '>Get in Touch</h1>
       <h2 className='text-xl font-sans font-light pb-4'>Connect with us for <strong >  adventures and tours guidance</strong>. Fill out the form below, and our team will assist you promptly.</h2>
       <a href="#"  className="text-xl " ><FaPhoneAlt className='text-pink-500'/> <span className='absolute -mt-6 ml-12 text-xl text-pink-500'>+91 800067579</span>  </a>
       <h4 className='pt-8 font-light text-xl'>Want to know more about services? <strong> Drop your queries here </strong> .</h4>
       <br />
              <a href="#"  className="text-xl " ><FaMailBulk className='text-pink-500'/> <span className='absolute -mt-6 ml-12 text-xl text-pink-500'>info@pinkcityadventures.com</span>  </a>
                <div className='mt-24 text-center text-lg'>
          <p className='text-gray-700'> If You Have Already an Account <a href="/login" className='font-bold text-blue-600 hover:text-blue-500'> LogIn</a></p>

           </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

