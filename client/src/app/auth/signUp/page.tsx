'use client'
import Link from 'next/link'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Page = () => {
  const [data, setData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!data.fullName.trim()) newErrors.fullName = 'Full Name is required';

    if (!/^\d{10}$/.test(data.mobileNumber)) newErrors.mobileNumber = 'Enter a valid 10-digit number';

    if (!/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = 'Invalid email address';

    if (data.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (!data.terms) newErrors.terms = 'You must agree to Terms and Privacy Policy';

    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted Data:', data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row max-w-6xl w-full overflow-hidden">

        <div className="md:w-1/2 bg-white p-10 hidden md:flex items-center justify-center">
          <div className="max-w-md">
            <img
              src="/assets/authLogo.png"
              alt="Payment Illustration"
              className="w-full"
            />
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center text-blue-600 font-sans">
            THE <span className="text-[#4C9DF0]">EVENTIX</span>
          </h1>
          <p className="text-center text-sm text-gray-600 mt-1 mb-6">
            From screen to scene in seconds
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <Link href='/auth/guestLogin'>
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">Guest Login</button>
            </Link>
            <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">Sign Up</button>
            <Link href='/auth/login'>
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">Log In</button>
            </Link>
          </div>

          <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Begin with excitement
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              { name: "fullName", type: "text", label: "Full Name" },
              { name: "mobileNumber", type: "text", label: "Mobile Number" },
              { name: "email", type: "email", label: "Email" },
              { name: "password", type: "password", label: "Password" },
              { name: "confirmPassword", type: "password", label: "Confirm Password" },
            ].map((input) => (
              <div key={input.name}>
                <fieldset
                  className={`relative border rounded px-2 pt-1 transition-colors ${
                    errors[input.name] ? 'border-red-500' : 'border-gray-300 focus-within:border-blue-400'
                  }`}
                >
                  <legend className="text-sm text-gray-500 px-1">{input.label}</legend>
                  <input
                    type={input.type}
                    name={input.name}
                    value={(data as any)[input.name]}
                    onChange={handleChange}
                    className="w-full px-1 py-1 focus:outline-none bg-transparent"
                  />
                </fieldset>
                {errors[input.name] && (
                  <p className="text-red-500 text-xs mt-1">{errors[input.name]}</p>
                )}
              </div>
            ))}

            <div className="flex items-start">
              <input
                name='terms'
                type="checkbox"
                checked={data.terms}
                onChange={handleChange}
                className="mt-1 mr-2 accent-blue-500"
              />
              <p className="text-sm text-gray-700">
                Agree to all the <a className="text-blue-600 underline">Terms</a> and{' '}
                <a className="text-blue-600 underline">Privacy Policy</a>
              </p>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
            )}

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
  );
};

export default Page;
