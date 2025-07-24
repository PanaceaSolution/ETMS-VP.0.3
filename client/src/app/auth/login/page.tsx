import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {


    const buttons = [
        { name: "Guest Login", path: "/login" },
        { name: "Sign Up", path: "/login" },
        { name: "Log in", path: "/login" },
    ]
    return (
        <main className='w-full h-full flex justify-center items-center'>

            <div className='shadow-md m-16 flex w-[1249px] h-[677px] rounded-[10px]'>

                {/* image section */}
                <div className='w-1/2 h-[677px]' >

                    <Image src="/assets/auth.png" alt='auth.png'

                        height={677} width={630} />
                </div>


                <div className=' flex justify-center w-1/2 items-center'>
                    <div className=' h-[528px] w-[376px] gap-[16px] flex text-center flex-col'>

                        <div className='w-full w-max-[376px]  flex justify-center'>

                            <Image src="/assets/eventix.png" alt='auth.png'

                                height={70} width={260} />
                        </div>

                        <h1>From screen to scene in seconds</h1>

                        <div className='gap-6 flex  items-center text-center '>

                            {
                                buttons.map((button, index) => (
                                    <button id='index' className='w-[112px] max-h-[42px] p-[10px] border rounded-lg border-black'>{button.name}</button>
                                ))
                            }
                        </div>

                        <h1 className='font-[400] text-[24px]'>Begin with excitement</h1>

                        <div className='w-full flex flex-col gap-[14px]'>

                            <input placeholder='Username' className='w-full rounded-[10px] border-[#22B7D8] border-[1px] text-black max-w-[374px] h-[50px] px-2' />
                            <input placeholder='password' className='w-full rounded-[10px] border-[#22B7D8] border-[1px] text-black max-w-[374px] h-[50px] px-2' type='password' />

                        </div>

                        <div className='gap-[32px] flex flex-col'>

                            <div className=' flex justify-between'>
                                <p>Remember Me</p>
                                <Link href='/forgetpassword'> forget Password ?</Link>
                            </div>

                            <button className='w-full p-[10px] bg-[#4B91F1] rounded-[10px]'>Lets Start</button>
                        </div>
                    </div>
                </div>

            </div>

        </main>
    )
}

export default page