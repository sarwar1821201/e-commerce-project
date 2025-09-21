import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { FaBars, FaSearch, FaShoppingBasket } from 'react-icons/fa'
import userImg from '../assets/banner/user.png'
import { FaBarsStaggered } from 'react-icons/fa6'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiUserLine } from 'react-icons/ri'

const Header = () => {
   
   const {user,setUser,navigate, searchQuery , setSearchQuery}=useContext(ShopContext)
    const [menuOpened, setMenuOpened]=useState(false);
    const [showSearch, setShowSearch]=useState(false);
    const location=useLocation();
    const isHomepage=location.pathname ==='/';
    const isCollectionPage=location.pathname.endsWith('/collection');

    const toggleMenu=()=> setMenuOpened((prev)=> !prev)

     useEffect(()=> {
       if(searchQuery.length > 0 && !isCollectionPage){
         navigate('/collection')
       }
     }, [searchQuery])

  return (
   <header className={`${!isHomepage && "bg-gradient-to-1 from-primary via-white to-primary "} absolute  top-0 left-0 right-0 mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between py-2 `}
 >
    <Link to={'/'} className='text-[22px] font-[700] uppercase'>
    E-ShopMart <span className='text-red-500 text-[28px] font-[700]'></span>
    </Link>

    <Navbar setMenuOpened={setMenuOpened} containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 z-50 " : "hidden lg:flex gap-x-5  xl:gap-x-1 medium-15 p-1"}`}></Navbar>
    <div className='flex gap-8 items-center'>
        <div className='relative hidden xl:flex'>

         <div className={`${showSearch ? "flex rounded-full bg-white w-[333px] p-3.5 pl-6":"hidden" } 
            ${!isHomepage && "!bg-primary"} `}  >

            <input
             onChange={(e)=>setSearchQuery(e.target.value)}
             type="text" placeholder='type here ...' className='bg-transparent w-full outline-none text-[14px]' /> 
         </div>

         <div onClick={()=> setShowSearch((prev)=> !prev)}
         className={`cursor-pointer bg-amber-500 text-white rounded-full p-2.5 text-sm  m-1 
         ${showSearch ? 'absolute top-0 right-0' : ''}` }
         >

            <FaSearch className='text-xl'></FaSearch>
         </div>

        </div>

       <div className='flex flex-1 items-center justify-end gap-x-2 xs:gap-x-8'>
          {/* Menu Toggle */}
          <>
          {
            menuOpened ? (
               <FaBarsStaggered  onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl' > 

               </FaBarsStaggered>
            ) :
            (
               <FaBars onClick={toggleMenu} className='lg:hidden cursor-pointer text-xl'  ></FaBars>
            )
          }

          </>
         {/* Cart */}
         <div onClick={()=> navigate('/cart')}  className='flex gap-2 items-center cursor-pointer p-2 rounded-full bg-white relative'>
            <FaShoppingBasket size={27} ></FaShoppingBasket>
            <label className='absolute bottom-8 -right-2 text-xs font-bold' >{0}</label>
         </div>
         {/* User Profile */}
         <div className='group relative'>
            <div>
            {user ? (
               <div className='flex gap-2 items-center cursor-pointer rounded-full bg-white'>
                  <img src={userImg} alt="" height={44} width={44}  />
               </div>
            ) : (
               <button className='medium-14 bg-red-500 text-white px-7 py-3.5 flex items-center justify-center gap-x-2 rounded-full '>
                  Login
                  <RiUserLine className='text-xl'></RiUserLine>
               </button>
            )}
            </div>
            {/* DropDown Menu */}
            {user && (
               <ul className='bg-white p-2 w-32 ring-1 ring-slate-900/5 rounded absolute right-0 top-7 hidden group-hover:flex flex-col medium-14 shadow-md z-50'>
                  <li onClick={()=> navigate('/my-orders')} className='p-2 text-tertiary rounded-md hover:bg-primary cursor-pointer'>Orders</li>
                  <li>Logout</li>
               </ul>
            )}
         </div>
       
       </div>

    </div>

   </header>
  )
}

export default Header