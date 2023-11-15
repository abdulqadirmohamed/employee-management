
'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault()

    // if(!name || !email || !password){
    //   setError('All fields are required')
    //   return
    // }
    try {
      const res = await fetch('api/register/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      if(res.ok){
        const form = e.target;
      }else{
        console.log('user registration failed')
      }
    } catch (error) {
      console.log('error during registration', error)
    }
  }
  return (
    <div className='w-1/4 mx-auto h-screen mt-32'>
      <h1 className='mb-8 text-2xl'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter your name' className='border-[1px] rounded-md px-4 py-2 w-full outline-none my-2'
          onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter your email' className='border-[1px] rounded-md px-4 py-2 w-full outline-none my-2'
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='*************' className='border-[1px] rounded-md px-4 py-2 w-full outline-none my-2'
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='flex justify-between items-center my-3 text-sm'>
          <span>Remember</span>
          <span className='underline text-[#7B57DF] cursor-pointer'>Forget Password?</span>
        </div>
        <div className='flex flex-col'>
          <button className='bg-[#7B57DF] hover:bg-[#6848c2] px-4 py-2 rounded-md my-3'>Sign Up</button>
        </div>
        <div>
          {error && (
            <span className='text-red-700 text-sm'>{error}</span>
          )}
        </div>
        <div>
          <span className='text-sm'><Link href={"/login"} className='underline text-[#7B57DF] ml-4'>Login</Link></span>
        </div>
        
        </form>
      </div>
    
  )
}

export default SignUp