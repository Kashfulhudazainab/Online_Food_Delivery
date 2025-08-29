import React, { useContext, useEffect } from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { dataContext } from "../context/userContext";
import { food_items } from "../food";
import{useSelector} from "react-redux"

function Nav() {
    let{input,setCategory,setInput,setshowcart}=useContext(dataContext)

    useEffect(() => {
     let updatedList = food_items.filter((x) => x.food_name.toLowerCase().includes(input.toLowerCase()))
     setCategory(updatedList);
    }, [input]);

    let items=useSelector(state=>state.cart)

  return (
    <div className="w-full h-[100px] flex items-center justify-between px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl">
        <IoFastFoodSharp className="w-[30px] h-[30px] text-green-400"/>
      </div>
      <form action="" className="w-[50%] md:w-[70%] h-[60px] bg-white flex items-center rounded-md shadow-xl px-5 gap-3" onSubmit={(e)=>e.preventDefault()}>
        <FaSearch className="w-[30px] h-[30px] text-green-400"/>
        <input type="text" placeholder="Search here..." className="w-full outline-none text-[18px] md:text-[20px]" onChange={(e)=>setInput(e.target.value)} value={input}/>
      </form>
      <div className="w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer"  onClick={() => 
            setshowcart(true)}>
          <GiShoppingBag className="w-[30px] h-[30px] text-green-400"/>
          <span className="absolute top-0 right-0 text-green-400 font-semibold">{items.length}</span>
        </div>
    </div>
  );
}

export default Nav;
