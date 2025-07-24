'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const page = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        paymentMethod: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted data:', data);
    };
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row max-w-6xl w-full overflow-hidden">
        <div className="md:w-1/2 bg-white p-6 md:p-10 items-center justify-center border-b md:border-b-0 hidden md:flex">
          <img
            src="/assets/Screenshot 2025-07-24 154415.png"
            alt="Payment Illustration"
            className="w-full max-w-md "
          />
        </div>

        <div className="md:w-1/2 bg-white p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center text-blue-600 font-sans">
            THE <span className="text-[#4C9DF0]">EVENTIX</span>
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1 mb-6">
            From screen to scene in seconds
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">Guest Login</button>
            <Link href="/auth/signUp">
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">Sign Up</button>
            </Link>
            <Link href="/auth/login">
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">Log In</button>
            </Link>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
            name='firstName'
            onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            name='lastName'
            onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            name='email'
            onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
            onChange={handleChange}
            name='mobileNumber'
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
            onChange={handleChange}
            name='paymentMethod'
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-500"
            >
              <option value="">Please Select</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Khalti">Khalti</option>
              <option value="Esewa">Esewa</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default page