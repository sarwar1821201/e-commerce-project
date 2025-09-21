import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles, setMenuOpened}) => {

  const navLinks= [

     {path:'/', title:'Home'},
     {path:'/collection', title:'Collection'},
     {path:'/testimonial', title:'Testimonial'},
     {path:'/contact', title:'Contact'},
  ]

  return (
    <nav className={`${containerStyles}`} >
      {navLinks.map((link)=> (
        <NavLink 
        onClick={()=> setMenuOpened(false)}
         key={link.title}
         to={link.path}
         className={({isActive})=> `${isActive ? "relative after:w-2/5 after:h-1 after:rounded-full after:bg-secondary after:absolute after:-bottom-0.5 after:right-3" : ""} px-3 py-2 rounded-full uppercase text-sm font-bold `}
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar