"use client"
import React from 'react'
import Home from './(routes)/home/page'
import { Provider } from 'react-redux'
import store from '@/store/store'
import Header from '@/components/features/shared/Header'

const page = () => {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Home/>
      </Provider>
      
    </div>
  )
}

export default page