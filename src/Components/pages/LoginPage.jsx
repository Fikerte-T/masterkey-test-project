import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {}
    const user = storedUsers[formData.username]
    // console.log(user.password)
   
    if(!user){
        setMessage('UserName not found.')
        return
    }
    if(user.password !== formData.password) {
      setMessage('Incorrect Password.')
      return
    }
    if(user.email !== formData.email) {
      setMessage('Incorrect Email.')
      return
    }

    localStorage.setItem('currentUser', user.username)
    // console.log(currentUser)
    navigate('/welcome')
  }
  return (
  <div className='min-h-screen flex justify-center items-center bg-gray-50 font-manrope'>
        <div className='w-[340px] bg-white p-10 rounded-xl'>
            <h1 className='text-4xl py-10 font-bold'>Log In</h1>
            {message && <p className='py-4 text-red-500 font-bold '>{message}</p>}
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
                <button type='submit' className='text-sm font-medium rounded-full bg-bottom text-white py-2 px-10 my-10 w-fit hover:bg-button/50'>Log in</button>
            </form>
           <p className='text-xs'>Not a member? <a href='/signup' className='underline text-bottom'>Sign up</a></p>
        </div>
    </div>
  )
}

export default LoginPage