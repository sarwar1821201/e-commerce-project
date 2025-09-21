import React from 'react'
import Title from './Title'
import { blogs } from '../assets/data'

const Blog = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 py-16'>
      <Title
      title1={"Our Expert"} 
      title2={"Blog"}
      title1Styles={"pb-10"}
      para={"stay ahead of fashion trends with styling tips, product reviews, and expert advice helping you smarter"}
      // paraStyles={"block"}
      >
      </Title>

      {/* container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {blogs.map((blog)=>(
          <div key={blog.title} className='border-[11px] border-primary overflow-hidden relative'>
            <img src={blog.image} alt={blog.title} className='' />
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-black/30'></div>

            {/* Info */}
            <div className='absolute bottom-4 left-4 text-white text-[15px]'>
              <h3 className='font-[600] text-[16px] pr-4 leading-5'>{blog.title}</h3>
              <h4 className='medium-14 pb-3 pt-1 text-gray-300'>{blog.category}</h4>
              <button className='bg-white/30 py-0.5 p-5 medium-14 '>Continue Reading</button>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Blog