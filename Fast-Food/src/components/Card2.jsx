import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {removeItem} from "../redux/cartSlice"
import {increaseQuantity} from "../redux/cartSlice"
import {decreaseQuantity} from "../redux/cartSlice"
import { toast } from "react-toastify";

function Card2({name,id,price,quantity,image}) {
    let dispatch= useDispatch()
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex items-center justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[50%] h-full flex items-center justify-center overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col justify-center items-center">
          <div className="text-lg font-semibold">{name}</div>
          <div className="w-[80%] h-[35px] flex items-center justify-between rounded-lg bg-pink overflow-hidden shadow-lg text-green-400 border-2 border-green-400">
            <button className="w-[30%] h-full bg-white flex items-center justify-center hover:bg-gray-200" onClick={() => dispatch(quantity>1?decreaseQuantity(id):1)}>
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex items-center justify-center hover:bg-gray-200">
              {quantity}
            </span>
            <button className="w-[30%] h-full bg-white  flex items-center justify-center hover:bg-gray-200"  onClick={() => dispatch(increaseQuantity(id))}>
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-start gap-6 text-lg text-green-400 font-semibold">
          <span>Rs {price}/-</span>
          <RiDeleteBin5Line className="flex items-center justify-center w-[30px] h-[30px] bg-white hover:bg-gray-200 rounded-full cursor-pointer text-red-400" onClick={() => {dispatch(removeItem(id));
                toast.success("Item deleted!")}
          }/>
        </div>
      </div>
    </div>
  );
}

export default Card2;
