'use client';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const page = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    paymentMethod: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    paymentMethod: '',
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'firstName':
        return value.trim() ? '' : 'First name is required';
      case 'lastName':
        return value.trim() ? '' : 'Last name is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Enter a valid email';
      case 'mobileNumber':
        return /^9[78]\d{8}$/.test(value)
          ? ''
          : 'Enter a valid number';
      case 'paymentMethod':
        return value ? '' : 'Select a payment method';
      default:
        return '';
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: any = {};
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof typeof data];
      newErrors[key] = validateField(key, value);
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== '');
    if (hasErrors) {
      console.log('Validation failed:', newErrors);
      return;
    }

    console.log('Submitted data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row max-w-6xl w-full overflow-hidden">
        <div className="md:w-1/2 bg-white p-6 md:p-10 items-center justify-center border-b md:border-b-0 hidden md:flex">
          <img
            src="/assets/Screenshot 2025-07-24 154415.png"
            alt="Payment Illustration"
            className="w-full max-w-md"
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
            <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded">
              Guest Login
            </button>
            <Link href="/auth/signUp">
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">
                Sign Up
              </button>
            </Link>
            <Link href="/auth/login">
              <button className="border border-gray-400 text-sm px-4 py-1 rounded">
                Log In
              </button>
            </Link>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {[
              { name: 'firstName', label: 'First Name', type: 'text' },
              { name: 'lastName', label: 'Last Name', type: 'text' },
              { name: 'email', label: 'Email', type: 'email' },
              { name: 'mobileNumber', label: 'Mobile Number', type: 'text' },
            ].map((field) => (
              <div key={field.name}>
                <fieldset
                  className={`border rounded px-3 py-1 ${
                    errors[field.name as keyof typeof errors]
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } focus-within:border-blue-500`}
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
                {errors[field.name as keyof typeof errors] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[field.name as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <fieldset
                className={`border rounded px-3 py-1 ${
                  errors.paymentMethod ? 'border-red-500' : 'border-gray-300'
                } focus-within:border-blue-500`}
              >
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
              {errors.paymentMethod && (
                <p className="text-sm text-red-500 mt-1">{errors.paymentMethod}</p>
              )}
            </div>

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

export default page;
