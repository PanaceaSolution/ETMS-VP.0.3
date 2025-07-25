"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaApple, FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

function page() {

    const [showPassword, setShowPassword] = useState(false);

    const buttons = [
        { name: "Guest Login", path: "auth/guestlogin" },
        { name: "Sign Up", path: "auth/signup" },
        { name: "Log in", path: "login" },
    ]


    const socialLogin = [
        { name: "google", icon: <FcGoogle size={32} height={12} /> },
        { name: "facebook", icon: <FaFacebook color='blue' size={32} height={12} /> },
        { name: "appleId", icon: <FaApple size={32} height={12} /> },
    ]
    const { handleSubmit, reset, register } = useForm({
        defaultValues: {
            userName: "",
            password: ""
        }
    })

    interface Ilogin {

        userName: string,
        password: string
    }

    function onSubmit(data: Ilogin) {


        console.log(data)

        reset()
    }


    return (
        <main className='w-full h-screen md:flex md:justify-center md:items-center  md:content-center  '>

            <div className='shadow-md flex rounded-[10px] w-full flex-col sm:flex-row justify-center items-center md:ml-1 px-2 lg:w-[1249px] '>

                {/* image section */}
                <div className='md:w-1/2 ' >

                    <Image src="/assets/auth.png" alt='auth.png'

                        height={677} width={630}
                        className=" h-[225px] w-[209px] sm:h-[677px] sm:w-auto object-cover md:w-[1249px] md:h-[677px] "
                    />
                </div>


                <div className=' flex justify-center items-center '>
                    <div className='md:h-[528px] md:w-[376px] gap-[16px] flex text-center flex-col'>

                        <div className=' w-max-[376px] md:w-full flex justify-center'>

                            <Image src="/assets/eventix.png" alt='auth.png'
                                className=" h-[45px] w-[216px] sm:h-[677px] sm:w-auto object-cover md:w-[full] md:h-[60px] "

                                height={70} width={260} />
                        </div>

                        <h1>From screen to scene in seconds</h1>

                        <div className='md:gap-2 gap-[10px] flex  items-center text-center w-full justify-between'>

                            {
                                buttons.map((button, index) => (
                                    <Link href={button.path} key={index} className='min-w-[98px] py-[10px] px-[2px] md:min-w-[120px]  max-h-[42px] md:p-[10px] border rounded-lg border-black'>{button.name}</Link>
                                ))
                            }
                        </div>

                        <h1 className='font-[400] text-[24px]'>Begin with excitement</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-[14px]'>



                            <input {...register("userName")} placeholder='Username' className='w-full rounded-[10px] border-[#22B7D8] border-[1px] text-black max-w-[374px] h-[50px] px-2' />
                            <div className="relative w-full max-w-[374px]">
                                <input
                                    {...register("password")}
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full rounded-[10px] border-[#22B7D8] border-[1px] text-black h-[50px] px-2 pr-10"
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                                </div>
                            </div>




                            <div className='gap-[32px] flex flex-col'>

                                <div className=' flex justify-between'>
                                    <p>Remember Me</p>
                                    <Link href='/forgetpassword'> forget Password ?</Link>
                                </div>
                                <button className='w-full p-[10px] bg-[#4B91F1] rounded-[10px] text-white'>Lets Start</button>

                            </div>
                        </form>


                        <div className='flex justify-between items-center '>
                            <hr className='border-[#22B7D8] border border-1 w-1/3' />
                            <h1>Or</h1>
                            <hr className='border-[#22B7D8] border border-1 w-1/3' />

                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <h1 className='text-start'>Sign Up with open account</h1>

                            <div className=' flex lg:gap-[10px] justify-between pb-6'>

                                {
                                    socialLogin.map((logos) => (
                                        <button className='lg:w-[106px] lg:h-[42px] border border-[#22B7D8] rounded-[10px] flex justify-center px-2  py-1'>{logos.icon}</button>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </main>
    )
}

export default page