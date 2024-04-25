import { useEffect, useState,useParams } from "react";


const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState([]);
    

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data);

    };
     return resInfo;

}

export default useRestaurantMenu