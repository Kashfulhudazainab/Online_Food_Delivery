import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({name,price,id,image,type}) {
const dispatch = useDispatch()
  return (
    <div className="w-[250px] h-[300px] bg-white flex flex-col justify-center items-center gap-2 p-1 rounded-lg hover:border-4 hover:border-green-500 hover:transition-all hover:duration-200">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="font-semibold text-gray-500 text-sm ">{name}</div>
      <div className="flex justify-between items-center w-full text-green-400">
        <div className="text-2xl">Rs{price}/- </div>
        <div className="flex gap-2 items-center justify-center text-2xl">
           { type === "veg"?<LuLeafyGreen />:<GiChickenOven />}  
          <span>{type}</span>
        </div>
      </div>
      <div>
        <button className="w-full p-2 rounded-lg bg-green-500 text-gray-700 hover:bg-green-300px transition-all duration-200 hover:shadow-lg text-2xl" onClick={() => {dispatch(addToCart({id:id,name:name,price:price,image:image,quantity:1}));
      toast.success("Item added")}
      }>
        Add to Dish
        </button>
        </div>
    </div>
  );
}

export default Card;
