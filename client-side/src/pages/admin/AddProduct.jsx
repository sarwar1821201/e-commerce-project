import React, { useState } from 'react'
import uploadIcon from '../../assets/banner/upload_icon.png'

const AddProduct = () => {

    const [files,setFiles]=useState([])
    const [name, setName]=useState("")
    const [description, setDescription]=useState("")
    const [price, setPrice]=useState("20")
    const [offerPrice, setOfferPrice]=useState("10")
    const [category, setCategory]=useState("Men")
    const [popular, setPopular]=useState(false)
    const [sizes, setSizes]=useState([])

  const onSubmitHandler=async(event)=>{
       event.preventDefault()
  }

  return (
    <div className='px-2 sm:px-6 py-12 m-2 h-[97vh] bg-pink-50 overflow-y-scroll w-full lg:w-4/5 rounded-xl'>
    <form 
    onSubmit={onSubmitHandler} className='flex flex-col gap-y-3 medium-14'>
     <div className='w-full'> 
     <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>
        Product Name:
     </h5>
     <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='write here..' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl'  />
     </div>

     <div className='w-full'> 
     <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>
        Product Description:
     </h5>
     <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" rows={5} placeholder='write here..' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl resize-none'  />
     </div>

      <div>
        <div className='flex flex-col sm:flex-row gap-4'>
            <div className="flex flex-row gap-4">
                <div>
                    <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Category</h5>
                    <select onChange={(e)=>setCategory(e.target.value)} className='max-w-20 px-3 py-2 text-amber-600 ring-1 ring-slate-900/10 bg-white rounded' >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                        <option value="Footwear">FootWear</option>
                        <option value="Winterwear">Winterwear</option>
                        <option value="Sportswear">Sportswear</option>
                    </select>
                </div>
            </div>
            <div>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Product Price</h5>
                <input onChange={(e)=>setPrice(e.target.value)} value={price}  type="number" placeholder='20' className='px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5' />
            </div>

            <div>
                <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Offer Price</h5>
                <input onChange={(e)=>setOfferPrice(e.target.value)} value={offerPrice}  type="number" placeholder='20' className='px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5' />
            </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h5 className='text-[14px] md:text-[15px] mb-1 font-bold'>Product Sizes</h5>
        <div className="flex gap-3 mt-2">
            <div onClick={()=>setSizes(prev=>prev.includes("S") ? prev.filter(item=>item !== "S"): [...prev, "S"] )} > <span className={`${sizes.includes("S") ? "bg-blue-500 text-white" : "bg-pink-50"} text-red-600 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer `}>S</span> </div>
            <div onClick={()=>setSizes(prev=>prev.includes("M") ? prev.filter(item=>item !== "M"): [...prev, "M"] )} > <span className={`${sizes.includes("M") ? "bg-blue-500 text-white" : "bg-pink-50"} text-red-600 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer `}>M</span> </div>
            <div onClick={()=>setSizes(prev=>prev.includes("L") ? prev.filter(item=>item !== "L"): [...prev, "L"] )} > <span className={`${sizes.includes("L") ? "bg-blue-500 text-white" : "bg-pink-50"} text-red-600 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer `}>L</span> </div>
            <div onClick={()=>setSizes(prev=>prev.includes("XL") ? prev.filter(item=>item !== "XL"): [...prev, "XL"] )} > <span className={`${sizes.includes("XL") ? "bg-blue-500 text-white" : "bg-pink-50"} text-red-600 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer `}>XL</span> </div>
            <div onClick={()=>setSizes(prev=>prev.includes("XXL") ? prev.filter(item=>item !== "XXL"): [...prev, "XXL"] )} > <span className={`${sizes.includes("XXL") ? "bg-blue-500 text-white" : "bg-pink-50"} text-red-600 rounded ring-1 ring-slate-900/5 py-1 px-3 cursor-pointer `}>XXL</span> </div>
        </div>
      </div>

      {/* Images */}
      <div className="flex gap-2 pt-2">
        {Array(4).fill('').map((_,index)=>(
            <label  key={index} htmlFor={`image${index}`} className='rounded overflow-hidden' >
                <input onChange={(e)=>{
                    const updatedFiles=[...files]
                    updatedFiles[index]=e.target.files[0]
                    setFiles(updatedFiles)
                }}
                 type='file' id={`image${index}`} hidden/>
                 <img src={files[index] ? URL.createObjectURL(files[index]): uploadIcon } alt="uploadImageArea"  height={67} width={67} className='bg-pink-100' />
            </label>
        ))}
      </div>

      <div className='flex items-center justify-start gap-2 my-2'>
        <input onChange={()=>setPopular(prev=>!prev)} type="checkbox" checked={popular} id="popular" />
        <label htmlFor='popular' className='cursor-pointer' >Add to Popular</label>
      </div>

      <button type='submit' className='medium-14 bg-tertiary text-white px-7 py-3.5 mt-3 max-w-44 sm:w-full rounded' >Add Product</button>

    </form>

    </div>
  )
}

export default AddProduct