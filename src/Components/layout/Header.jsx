import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-around items-center p-10 text-white lg:px-32'>
        <div className='flex justify-around items-center p-10'>
            <div>
                <img className='w-[40px] h-[40px]' src="src/assets/tutor-icon.png" alt="training icon" />
            </div>
            
            <nav>
                <ul className='flex justify-evenly'>
                    <li className='px-2 md:px-6 hover:text-link'>
                        <NavLink to="/tutors">Tutors</NavLink>
                    </li>
                    <li className='px-2 md:px-6 hover:text-link'>
                        <NavLink to="/subjects">Subjects</NavLink>
                    </li>
                    <li className='px-2 md:px-6 hover:text-link'>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='flex space-x-5'>
            <button className='w-[90px] rounded-3xl border border-white p-2 px-4 hover:bg-button hover:border-none' onClick={() => navigate('/signup')}>Sign up</button>
            <button className='w-[90px] rounded-3xl p-2 px-4 text-top bg-white hover:bg-button hover:text-white' onClick={() => navigate('/login')} >Log in</button>

        </div>
    
    </div>
  )
}

export default Header