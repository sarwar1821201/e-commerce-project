import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useParams } from 'react-router-dom'
import { TbHeart, TbShoppingBagPlus, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb'
import { FaTruckFast } from 'react-icons/fa6'
import ProductDescription from '../components/ProductDescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'

const ProductDetails = () => {
 
    const {products, currency} = useContext(ShopContext)
    const {id}=useParams()

    const product= products.find((item)=> item._id===id)
    const [image, setImage]=useState(null)
    const [size, setSize]=useState(null)

    useEffect(()=>{
       if(product){
        setImage(product.image[0])
       }
    }, [product])

  return (
    product && (
      <div className='mx-auto max-w-[1440px] px-6 lg:px-12 py-16 pt-28 bg-white'>
        <p>
          <Link to={'/'}>Home</Link> /
          <Link to={'/collection'}>Collection</Link> /
          <Link to={`/collection/${product.category}`}>{product.category}</Link> /
          <span className='text-gray-600'>{product.name}</span>
        </p>
        {/* product data */}
        <div className='flex gap-10 flex-col xl:flex-row my-6'>
          {/* Image */}
          <div className='flex flex-1 gap-x-2 max-w-[533px]'>
            <div className='flex-1 flex items-center justify-center flex-col flex-wrap gap-[7px]'>
              {product.image.map((item, i)=>(
                <div key={i} className='bg-white'>
                  <img onClick={()=> setImage(item)} src={item} alt={'productImg'} className='object-cover aspect-square' />
                </div>
              ))}
            </div>
            <div className='flex-[4] flex bg-white '>
              <img src={image} alt="productImg" />
            </div>
          </div>

          {/* product info */}
          <div className='flex-1 px-5 py-3 bg-white '>
            <h3 className='text-[24px] md:text-[28px] font-bold leading-none'>{product.name}</h3>
            {/* Rating & Price */}
            <div className='flex items-center gap-x-2 pt-2'>
              <div className='flex gap-x-2 text-yellow-400'>
                <TbStarFilled></TbStarFilled>
                <TbStarFilled></TbStarFilled>
                <TbStarFilled></TbStarFilled>
                <TbStarFilled></TbStarFilled>
                <TbStarHalfFilled></TbStarHalfFilled>
              </div>
              <p className='medium-14'>(22)</p>
            </div>

            <div className='text-[16px] md:text-[17px] font-bold flex items-baseline gap-4 my-2'>
              <h3 className='text-[24px] md:text-[28px] font-bold line-through text-gray-500'>{currency}{product.price}.00</h3>
              <h4 className='text-[16px] md:text-[17px] font-bold'>{currency}{product.price}.00</h4>
            </div>

            <p p className='max-w-[555px]'>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a,b)=>{
                  const order= ["S","M","L","XL","XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i)=>(
                  <button key={i}
                   onClick={()=>setSize(item)}
                   className={`${item===size ? 
                    "ring-1 ring-slate-900/20" : 
                    "ring-1 ring-slate-900/5"
                    } medium-14 h-8 w-10 bg-white rounded-none`}
                  >
                   {item}
                  </button>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-x-4'>
              <button className='medium-14 bg-black text-white px-7 py-3.5 sm:w-1/2 flex items-center justify-center gap-x-2 capitalize'> Add To Cart <TbShoppingBagPlus className=''></TbShoppingBagPlus> </button>
              <button className='medium-14 bg-primary ring-1 ring-slate-900/10 px-7 py-3.5 hover:bg-white transition-all duration-30 '><TbHeart className='text-lg'></TbHeart></button>
            </div>
            <div className='flex items-center gap-x-2 mt-3'>
              <FaTruckFast className='text-lg'></FaTruckFast>
              <span className='medium-14 '>Free Delivery on Orders over 500</span>
            </div>
            <hr className='my-3 w-2/3' />
            <div className='mt-2 flex flex-col gap-1 text-gray-30 text-[14px]'>
              <p>Authenticy you can trust</p>
              <p>Enjoy Cash On Delivery For your convenience</p>
              <p>Easy returns & exchange within 7days </p>
            </div>
          </div>
        </div>

      <ProductDescription></ProductDescription>
      <ProductFeatures></ProductFeatures>

      {/* Related Products */}
      <RelatedProducts product={product} id={id} ></RelatedProducts>

      </div>
    )
  )
}

export default ProductDetails