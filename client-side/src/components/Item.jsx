import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Item = ({product}) => {
    const {navigate}=useContext(ShopContext)
    const [hovered, setHovered]=useState(false)
  return (
    <div className='overflow-hidden p-5 bg-white'>
    {/* Image */}
    <div onClick={()=> {navigate(`/collection/${product.category.toLocaleLowerCase()}/${product._id}`); scrollTo(0,0)} }
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}
    className='flex items-center justify-center bg-[#f5f5f5] overflow-hidden relative'>
       <img src={product.image.length> 1 && hovered ? product.image[1] : product.image[0] } alt="productImage" className='group-hover:bg-primaryDeep transition-all duration-300' />
    </div>
    {/* info */}
    <div className='pt-3'>
        <h4 className='bold-15 line-clamp-1 py-0 uppercase'>{product.name}</h4>
        <p className='line-clamp-1'>{product.description}</p>
        <div className='flex items-center justify-between pt-2 gap-2'>
            <p className='text-[14px] md:text-[15px] mb-1 font-bold'>{product.category}</p>
            <button className='medium-14 bg-white ring-1 ring-slate-900/10 px-7 py-3.5 hover:bg-primary transition-all duration-300 py-2 px-0 w-full text-xs '>Add to Cart | ${product.offerPrice}.00</button>
        </div>
    </div>
    </div>
  )
}

export default Item