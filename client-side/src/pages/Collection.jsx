import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item'

const Collection = () => {

   const {products,searchQuery}=useContext(ShopContext)
   const [filteredProducts, setFilteredProducts]=useState([])
   const[currentPage, setCurrentPage]=useState(1)
   const itemsPerPage=10

   useEffect(()=>{
     if(searchQuery.length >0){
       setFilteredProducts(
         products.filter((product)=> product.name.toLowerCase().includes(searchQuery.toLowerCase()))
       )
     } else{
      setFilteredProducts(products)
     }

    setCurrentPage(1)  //reset to first page on filter/search

   }, [products,searchQuery])

    const totalPages=Math.ceil(filteredProducts.filter(p=> p.inStock).length/itemsPerPage)

    useEffect(()=>{
      window.scrollTo({top:0, behavior:'smooth'})
    }, [currentPage])


  return (
    <div className='mx-auto max-w-[1440px] px-6 lg:px-12 py-16 pt-28 bg-pink-50'>
      <Title 
      title1={"All"} 
      title2={"Products"}
      title1Styles={"pb-10"}
      // paraStyles={"block"}
      >
      </Title>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        {filteredProducts.length > 0 ? (
          filteredProducts.filter((product)=> product.inStock).slice((currentPage-1)* itemsPerPage, currentPage*itemsPerPage).map((product)=>(
            <Item key={product._id} product={product}>
           </Item>
          ))
        ) : (
          <h4 className='text-[16px] md:text-[17px] font-bold text-red-500'>Sorry !! Nothing Matched with your search</h4>
        )}
      </div>

       {/* Pagination */}
       <div className='flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-14 mb-10'>
        <button disabled={currentPage===1} 
         onClick={()=>setCurrentPage((prev)=> prev-1)}
         className={`${currentPage === 1 && "opacity-75 cursor-not-allowed "} medium-14 bg-white text-amber-700 px-3 py-1 `}
        >
          Previous
        </button>
        {Array.from({length:totalPages}, (_, index)=>(
          <button 
          key={index+1}
          onClick={()=>setCurrentPage(index+1)}
          className={`${currentPage=== index+1 && "bg-amber-500 text-white "} medium-14 bg-white text-tertiary px-3 py-1 `}
          > 
            {index+1}
          </button>
        ))}

        <button disabled={currentPage===totalPages} 
         onClick={()=>setCurrentPage((prev)=> prev+1)}
         className={`${currentPage ===totalPages && "opacity-50 cursor-not-allowed "} medium-14 bg-white text-tertiary px-3 py-1 `}
        >
          Next
        </button>
       </div>

    </div>
  )
}

export default Collection