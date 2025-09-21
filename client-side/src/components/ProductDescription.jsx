import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-14 bg-white'>
         <div className='flex gap-3'>
          <button className='medium-14 p-3 w-32 border-b-2 '>Description</button>
          <button className='medium-14 p-3 w-32'>Color Guide</button>
           <button className='medium-14 p-3 w-32'>Size Guide</button>
         </div>
         <hr className='h-[1px] w-full' />

         <div className="flex flex-col gap-3 p-3">
            <div>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Derail</h5>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga nam, harum, dolores veritatis quasi adipisci aspernatur ipsam provident repudiandae animi voluptas dolorem distinctio voluptatibus rem perspiciatis aliquam odio dolor praesentium blanditiis vero illo ipsa dolore enim? Eos velit nemo quibusdam nam hic facilis ex perspiciatis, quas, laboriosam unde obcaecati.</p>

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam est quidem velit pariatur molestias sunt cumque earum quas! Possimus fuga vero tempore incidunt nesciunt!</p>
            </div>
         </div>
         <div className="flex flex-col gap-3 p-3">
            <div>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Benefit</h5>
                <ul className='list-disc pl-5 text-lg text-gray-300 flex flex-col gap-1 '>
                    <li>High Quality materials ensure long lasting</li>
                    <li>Design to meet the needs of modern, active lifestyles </li>
                    <li>Available in wide range of colors </li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default ProductDescription