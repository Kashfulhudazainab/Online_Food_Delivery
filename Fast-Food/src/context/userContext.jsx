import React ,{createContext,useState} from 'react'
import { food_items } from '../food';
export const dataContext = createContext();


function UserContext({children}) {
   let [category, setCategory] = useState(food_items);
let[input,setInput]=useState("")
let [showcart,setshowcart]  = useState(false)   

    let data={
input,
category,
setCategory,
setInput,
showcart,
setshowcart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
            {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext
