
import { IoWalletOutline} from "react-icons/io5";
import { MdOutlineFoodBank,MdOutlineFreeBreakfast } from "react-icons/md";
import { CiPizza,CiBowlNoodles } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import {LuSoup} from "react-icons/lu";

const Categories=[
    {
        id:1,
        title:'All',
       image:<IoWalletOutline className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:2,
        title:'breakfast',
       image:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:3,
        title:'soups',
       image:<LuSoup className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:4,
        title:'pasta',
        image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:5,
        title:'main_course',
        image:<MdOutlineFoodBank className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:6,
        title:'pizza',
       image:<CiPizza className="w-[60px] h-[60px] text-green-500"/>
    },
{
    id:7,
    title:'burger',
   image:<GiHamburger className="w-[60px] h-[60px] text-green-500"/>
}
]

export default Categories