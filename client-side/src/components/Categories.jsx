import React, { useContext } from 'react'
import Title from './Title'
import { categories } from '../assets/data'
import { ShopContext } from '../context/ShopContext'

const Categories = () => {

     const {navigate}= useContext(ShopContext)

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 pt-16'>
      <Title 
      title1={"Category"} 
      title2={"List"}
      title1Styles={"pb-10"}
      paraStyles={"hidden"}
      >
      </Title>

      {/* Container */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {categories.map((cat)=> (
          <div  key={cat.name} 
          onClick={()=> navigate(`/collection/${cat.name.toLocaleLowerCase()}`)}
          className='flex items-center justify-center flex-col cursor-pointer group'
          >
          <div className='bg-primary group-hover:bg-amber-400'>
            <img src={cat.image} alt="" height={201} width={201} className='object-cover'  />
          </div>
          <h5 className='text-[14px] md:text-[15px] mb-1 font-bold uppercase mt-6'>{cat.name}</h5>
          </div>
        ))}
      </div>

      </section>
  )
}

export default Categories