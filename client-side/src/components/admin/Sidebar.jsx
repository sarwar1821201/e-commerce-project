import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import {  FaSquarePlus } from 'react-icons/fa6'
import { MdFactCheck } from 'react-icons/md'
import { FaListAlt } from 'react-icons/fa'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {

    const {navigate}=useContext(ShopContext)

    const navItems=[
        {
            path:"/admin",
            label:"Add Item",
            icon:<FaSquarePlus></FaSquarePlus>
        },
        {
            path:"/admin/list",
            label:"List",
            icon:<FaListAlt></FaListAlt>
        },
        {
            path:"/admin/orders",
            label:"Orders",
            icon:<MdFactCheck></MdFactCheck>
        }
    ]

  return (
    <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row'>
        {/* Sidebar */}
        <div className='max-sm:flex items-center justify-center max-xs:pb-3 bg-pink-50 pb-3 m-2 sm:min-w-[20%] sm:min-h-[97vh] rounded-xl '>
            <div className='flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14 '>
                {/* LoGo */}
                <Link 
                 to={'/admin'}
                 className='text-[20px] font-[700] md:text-[24px]font-[700] uppercase lg:pl-[15%]'
                >
                    ShopMart <span className='text-gray-300 text-[28px] font-[700]'></span>
                </Link>
                <div className='flex sm:flex-col sm:gap-x-5 gap-y-8 sm:pt-10'>
                    {navItems.map((link)=>(
                        <NavLink to={link.path} key={link.label} end={link.path==='/admin'}
                         className={({isActive})=>
                         isActive ?
                         "flex items-center justify-start gap-x-2 p-5 lg:pl-12 medium-15 cursor-pointer h-10 text-red-500 max-sm:border-b-4 sm:border-r-4 border-gray-300" 
                         : "flex items-center justify-start gap-x-2 lg:pl-12 p-5 medium-15 cursor-pointer rounded-xl"
                        }
                        >
                            {link.icon}
                            <div className='hidden sm:flex'>{link.label}</div>
                        </NavLink>
                    ))}
                  
                  <div className='max-sm:ml-5 sm:mt-48'>
                    <button className='flex items-center justify-start gap-x-2 lg:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl text-blue-600 '>
                        <BiLogOut className='text-lg'></BiLogOut>
                        <div className="hidden sm:flex">
                            Logout
                        </div>
                    </button>
                  </div>

                </div>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Sidebar