import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'

const ProductFeatures = () => {
  return (
    <div className='mt-12 bg-white'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl'>
            <div className='flex items-center justify-center gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <TbArrowBackUp className='mb-3 text-yellow-500'></TbArrowBackUp>
                </div>
                <div>
                    <h4 className='text-[16px] md:text-[17px] font-bold capitalize'>Easy Return</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur blanditiis non earum nostrum praesentium facilis consequuntur at, animi possimus?</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <TbTruckDelivery className='mb-3 text-red-500'></TbTruckDelivery>
                </div>
                <div>
                    <h4 className='text-[16px] md:text-[17px] font-bold capitalize'>Fast Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur blanditiis non earum nostrum praesentium facilis consequuntur at, animi possimus?</p>
                </div>
            </div>

            <div className='flex items-center justify-center gap-x-4 p-2 rounded-3xl'>
                <div className='text-3xl'>
                    <RiSecurePaymentLine className='mb-3 text-blue-500'></RiSecurePaymentLine>
                </div>
                <div>
                    <h4 className='text-[16px] md:text-[17px] font-bold capitalize'>Secure Payment</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae pariatur blanditiis non earum nostrum praesentium facilis consequuntur at, animi possimus?</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductFeatures