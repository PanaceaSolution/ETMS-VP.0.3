'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [data , setData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('After submission data yaha aauxa hai:', data);
    }   
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg flex max-w-6xl w-full overflow-hidden">
        <div className="w-1/2 bg-white p-10 flex items-center justify-center border-r border-blue-400">
          <div className="max-w-md">
            <img
            src="/assets/Screenshot 2025-07-24 154415.png"
            alt="Payment Illustration"
            className="w-full"
            />
          </div>
        </div>

        <div className="w-1/2 bg-white p-10">
          <h1 className="text-3xl font-bold text-center text-blue-600 font-sans">
            THE <span className="text-[#4C9DF0]">EVENTIX</span>
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1 mb-6">
            From screen to scene in seconds
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <Link href='/auth/guestLogin'><button className="border border-gray-400 text-sm px-4 py-1 rounded">Guest Login</button></Link>
            <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">Sign Up</button>
            <Link href='/auth/login'><button className="border border-gray-400 text-sm px-4 py-1 rounded">Log In</button></Link>
          </div>

          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Begin with excitement
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
              type="text"
              name='fullName'
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            onChange={handleChange}
              type="text"
              name='mobileNumber'
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            onChange={handleChange}
              type="email"
              name='email'
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            onChange={handleChange}
              type="password"
              name='password'
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            onChange={handleChange}
              type="password"
              name='confirmPassword'
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex items-start">
              <input
              name='terms'
                type="checkbox"
                className="mt-1 mr-2 accent-blue-500"
              />
              <p className="text-sm text-gray-700">
                Agree to all the <a className="text-blue-600 underline">Terms</a> and{' '}
                <a className="text-blue-600 underline">Privacy Policy</a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default page