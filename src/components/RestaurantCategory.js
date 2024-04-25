import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    //const[showRes,setShowRes]=useState(false);


    const handleClick=()=>{
       //setShowRes(!showRes);
       
       setShowIndex();
    }

    return (
        <div>
            {/* Header */}
        <div className="bg-gray-50 w-6/12 mx-auto my-4 p-4 shadow-lg " onClick={handleClick}>
            <div className="flex justify-between">
           <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span> 
           <span>⬇️</span>
           </div>
           {showItems&&<ItemList items={data.itemCards}/>}
            
        </div>
        {/* accordian body */}
        

        </div>
    )
}

export default RestaurantCategory;