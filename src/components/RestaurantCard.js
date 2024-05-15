import { useContext } from "react";
import userContext from "../utils/userContext"
export const RestaurantCard=(props)=>{
    const {loggedInUser}=useContext(userContext)

    const {restData}=props;
    const {name,sla,cuisines,avgRating,costForTwo,deliveryTime}=restData?.info;
    
    return (
        <div className="res-card w-[200px] p-4 m-4   rounded-lg  bg-gray-100 hover:bg-gray-200 " /*style={styleCard}*/ >
            <img  className="res-card-img w-[190px] rounded-lg" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>Name:{loggedInUser}</h4>
            {/* <h4>{sla.deliveryTime} min</h4>
 */}


        </div>
    )
}

//higher order components

 export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
        <div>
            <label className=" absolute bg-black text-white">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    )
  }
}

export default RestaurantCard;