import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
    const navigate = useNavigate()
    const user = localStorage.getItem("currentUser");
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-5 font-manrope bg-gray-50'>
        <div className='w-[380px] flex flex-col'>
            <img className='h-auto' src="src/assets/illustration-1.jpg" alt="" />
            <div className='bg-white rounded-xl text-center flex flex-col justify-center items-center space-x-2 p-10'>
                <h1 className='text-3xl py-10 font-bold text-bottom'><span className='text-top/80'>Hi {user}</span>, Welcome to Tutor</h1>
                <p>We are excited to have you here. This walk trough will help you get started using <span className='text-bottom'>Tutor</span></p>
                <button className='text-sm font-medium rounded-full bg-bottom text-white py-2 px-10 my-10 w-fit hover:bg-button/50' onClick={() =>navigate('/')}>Back to Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default WelcomePage