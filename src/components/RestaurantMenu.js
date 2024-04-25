import {  useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const[showIndex,setShowIndex]=useState(null);

    //const[RestMenu,setRestMenu]=useState([]);

    const{resId}=useParams();

    const resInfo=useRestaurantMenu(resId);

    // useEffect(()=>{
    //     fetchMenu();
    // },[])
    // const fetchMenu= async()=>{
    //     const menus=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    //     const jsonMenu=await menus.json();
    //     setRestMenu(jsonMenu.data)
    //     //console.log(jsonMenu);
    // }

    if(resInfo.length===0){
        return <Shimmer/>
    }
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);
    
    return(
        <div className="text-center">
            <h1 className="font-bold my-3 text-lg">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>
            //controlled component controlled by rest menu 
              <RestaurantCategory key={category.card.card.title} data={category.card.card} showItems={index===showIndex?true:false}
              setShowIndex={()=>setShowIndex(index)}/>
        )}
           
        </div>
    )
}

export default RestaurantMenu;