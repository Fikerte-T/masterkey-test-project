import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [message, setMessage] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {}
   
    if(storedUsers[formData.username]){
        setMessage('UserName already exists.')
        return
    }
    try {
        storedUsers[formData.username] = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        }
        localStorage.setItem('users', JSON.stringify(storedUsers))
        localStorage.setItem("currentUser", formData.username);
        navigate('/welcome')
        
    }
    catch(error) {
        setMessage('Error storing data.')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-50 font-manrope'>
        <div className='w-[340px] bg-white p-10 rounded-xl'>
            <h1 className='text-4xl pt-10 pb-2 font-bold'>Sign Up</h1>
            <p className='text-xs pb-10'>Create an account or <a href='/login' className='underline text-bottom'>login</a></p>
            {message && <p className='py-4 text-red-500 font-bold'>{message}</p>}
            <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-5'>
                <div>
                   <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">User name</label>
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-top">
                        <input id="username" type="text" name="username" placeholder="User name"
                         className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" 
                         required
                         value={formData.username}
                         onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-top">
                        <input id="email" type="email" name="email" placeholder="Your email"
                         className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" 
                         required
                         value={formData.email}
                         onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-top">
                        <input id="password" type="password" name="password" placeholder="Your password" 
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <button type='submit' className='text-sm font-medium rounded-full bg-bottom text-white py-2 px-10 my-10 w-fit hover:bg-button/50'>Sign Up</button>
            </form>
        </div>

    </div>
  )
}

export default SignupPage