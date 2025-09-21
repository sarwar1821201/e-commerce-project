import React from 'react'
import Title from '../components/Title'
import user1 from '../assets/testimonials/user1.jpg'
import user2 from '../assets/testimonials/user2.jpg'
import user3 from '../assets/testimonials/user3.jpg'
import { FaStar } from 'react-icons/fa'


const Testimonial = () => {

    const testimonials=[
        {
    name:"Sarwar Dipo",
    date:"2025-09-20",
    message:"Hello, this is my first message!",
    image:user1
  },
  {
    name:"Ayesha Khan",
    date:"2025-09-19",
    message:"Excited to join this project.",
    image:user2
  },
  {
    name:"Mayesha Ahmed",
    date:"2025-09-18",
    message:"Working hard to finish the task.",
    image:user3
  }
    ]
  return (
    <div className='mx-auto max-w-[1440px] px-6 lg:px-12 py-16 pt-28 bg-pink-50'>
      <Title
      title1={"People"} 
      title2={"Says"}
      title1Styles={"pb-10"}
      para={"stay ahead of fashion trends with styling tips, product reviews, and expert advice helping you smarter"}
      // paraStyles={"block"}
      >
      </Title>

       <div className='flex flex-wrap gap-6 pb-12'>
       {testimonials.map((testimonial, index)=>(
          <div key={index} className='bg-white w-full max-w-[422px] space-y-4 p-3 border border-gray-300/60 text-gray-500 text-sm'>
           <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
                {[...Array(5)].map((_,i)=>(
                    <FaStar key={i} size={16} className='text-[#ff532e]' ></FaStar>
                ))}
            </div>
            <p>{testimonial.date}</p>
           </div>
           <p>{testimonial.message}</p>
           <div className='flex items-center gap-2'>
            <img src={testimonial.image} alt={testimonial.name} className='h-8 w-8 rounded-full'  />
            <p className='font-medium text-gray-800'>{testimonial.name}</p>
           </div>
          </div>
       ) )}
       </div>

      </div>
  )
}

export default Testimonial