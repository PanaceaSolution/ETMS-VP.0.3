'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Page = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row max-w-6xl w-full overflow-hidden">
        {/* Left Side Illustration */}
        <div className="md:w-1/2 bg-white p-6 md:p-10 items-center justify-center border-b md:border-b-0 hidden md:flex">
          <img
            src="/assets/Screenshot 2025-07-24 154415.png"
            alt="Payment Illustration"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side Form */}
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
            {[
              { name: 'firstName', label: 'First Name', type: 'text' },
              { name: 'lastName', label: 'Last Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'mobileNumber', label: 'Mobile Number', type: 'text' }
            ].map((field) => (
              <fieldset
                key={field.name}
                className="border border-gray-300 rounded px-3 py-1 focus-within:border-blue-500"
              >
                <legend className="text-sm text-gray-500 px-1">{field.label}</legend>
                <input
                  name={field.name}
                  type={field.type}
                  value={data[field.name as keyof typeof data]}
                  onChange={handleChange}
                  className="w-full px-1 py-1 focus:outline-none"
                />
              </fieldset>
            ))}

            {/* Payment Method Select */}
            <fieldset className="border border-gray-300 rounded px-3 py-1 focus-within:border-blue-500">
              <legend className="text-sm text-gray-500 px-1">Payment Mode</legend>
              <select
                name="paymentMethod"
                value={data.paymentMethod}
                onChange={handleChange}
                className="w-full px-1 py-1 text-gray-500 focus:outline-none"
              >
                <option value="">Please Select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Khalti">Khalti</option>
                <option value="Esewa">Esewa</option>
              </select>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
