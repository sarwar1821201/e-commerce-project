import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {


    const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);



  return (
     <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Products"}
        heading={"Our Recommendation Products"}
      ></SectionTitle>
    
     <div className="grid md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className=" text-center btn btn-outline border-0 border-b-4 mt-4 ">View More</button>

    </section>

  )
}

export default PopularMenu