"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams()
  return (
    <div className='flex items-center justify-center h-screen w-screen text-4xl'>
        <h1>GET EVENT BY ID {id}</h1>
    </div>
  )
}

export default page