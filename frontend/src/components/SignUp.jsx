import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='border border-white/20 w-96 p-6 rounded-xl backdrop-blur-lg bg-white/10 shadow-2xl'>

        <h1 className='text-center text-3xl font-bold text-white drop-shadow-lg mb-5'>
          Sign Up
        </h1>

        <form className='flex flex-col'>

          <label htmlFor="fullname" className='mb-1 text-white font-medium drop-shadow'>
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            placeholder='Enter Full Name'
            className='mb-3 bg-white rounded-md p-2 outline-none'
          />

          <label htmlFor="username" className='mb-1 text-white font-medium drop-shadow'>
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder='Enter Username'
            className='mb-3 bg-white rounded-md p-2 outline-none'
          />

          <label htmlFor="email" className='mb-1 text-white font-medium drop-shadow'>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder='Enter Email'
            className='mb-3 bg-white rounded-md p-2 outline-none'
          />

          <label htmlFor="password" className='mb-1 text-white font-medium drop-shadow'>
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder='Enter Password'
            className='mb-3 bg-white rounded-md p-2 outline-none'
          />

          <div className='flex gap-5 mb-4 text-white font-medium drop-shadow'>
            <label className='flex items-center gap-2'>
              <input type="radio" name="gender" />
              Male
            </label>

            <label className='flex items-center gap-2'>
              <input type="radio" name="gender" />
              Female
            </label>
          </div>

          <button className='bg-white rounded-md p-2 hover:bg-gray-200'>
            Sign Up
          </button>

          <div className='flex justify-center items-center mt-4 gap-1'>
            <p className='text-white font-medium drop-shadow'>
              Already Have an account?
            </p>

            <Link
              to='/login'
              className='text-sky-300 font-semibold hover:underline drop-shadow'
            >
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp