import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { MdCurrencyExchange } from 'react-icons/md'
import { TbPackageImport } from 'react-icons/tb'

const Features = () => {
  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 mt-10'>
     <div className='grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-8'>

      <div className='flex-center gap-x-4'>
        <LiaShippingFastSolid className='text-4xl'></LiaShippingFastSolid>
        <div>
          <h5 className='medium-15'>Free Shipping</h5>
          <p>on above $100 order</p>
        </div>
      </div>
      
      <div className='flex-center gap-x-4'>
        <MdCurrencyExchange className='text-4xl'></MdCurrencyExchange>
        <div>
          <h5 className='medium-15'>Member Discount</h5>
          <p>discount for elite members</p>
        </div>
      </div>

      <div className='flex-center gap-x-4'>
        <BiSupport className='text-4xl'></BiSupport>
        <div>
          <h5 className='medium-15'>Fast Support</h5>
          <p>24/7 customer support</p>
        </div>
      </div>

      <div className='flex-center gap-x-4'>
        <TbPackageImport className='text-4xl'></TbPackageImport>
        <div>
          <h5 className='medium-15'>Easy Return</h5>
          <p>14days easy returns</p>
        </div>
      </div>

     </div>
    </section>
  )
}

export default Features