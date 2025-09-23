import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const AdminLogin = () => {
    
    const {isAdmin, setIsAdmin,navigate}=useContext(ShopContext)
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const onSubmitHandler= async (event)=>{
        event.preventDefault()
        setIsAdmin(true)
    }

    useEffect(()=>{
        if(isAdmin){
            navigate('/admin')
        }
    }, [isAdmin])

  return !isAdmin && (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center text-sm text-[80%]'>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-pink-50' >

            <h3 className='text-[28px] font-[700] mx-auto mb-3'>
                
                <span className='capitalize text-red-600'> Admin </span>Login
            </h3>

             <div className='w-full'>
                    <p className='text-[14px] font-[700]'>Email</p>
                    <input type="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    placeholder='type here...'
                    className='border border-gray-200 rounded w-full p-2 mt-1 outline-gray-500'
                    required
                    />
                </div>

                <div className='w-full'>
                    <p className='text-[14px] font-[700]'>Password</p>
                    <input type="password" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    placeholder='type here...'
                    className='border border-gray-200 rounded w-full p-2 mt-1 outline-gray-500'
                    required
                    />
                </div>

                

          <button type="submit" className='medium-14 bg-red-500 text-white px-7 py-3.5 transition-all rounded w-full mt-2 '>
            Login
          </button>

        </form>

    </div>
  )
}

export default AdminLogin