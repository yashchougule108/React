import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import userInfo from "../utils/userContext";
import { useSelector } from "react-redux";


 const Header=()=>{
    const [btnName , setbtnName]=useState("Login");
    // if no dependency array =>useeffect is called on every render
    //if the dependency array is empty =>use effect is called on initial render(just once)
    //if dependency array is not empty then it is called everytime  is upadtes based on the dependencyf
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(userContext);
    //console.log(loggedInUser);
    //useEffect(()=>{

   // },[])
   //subscribing to the stor using selector
   const cartItems=useSelector((store)=>store.cart.items);
   console.log(cartItems);
    return (
        <div className="flex justify-between border border-black m-2" >
            <div className="m-4">
                <img  className="w-24 "   src="https://imgs.search.brave.com/VJ1DHWS78lCwvJ2yfowsKfU5ZmVjznAgKHz2oLxhCuk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzg4Lzg0LzIx/LzM2MF9GXzI4ODg0/MjE2OF9uaGdqZk1P/MHZ0QVJUczZvYlIz/aTliZmRSSXVhU0w1/Ni5qcGc"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li >
                        Online status:{onlineStatus?"✅":"🔴"}
                    </li>
                    <li ><Link style={{textDecoration:"none"}} to={"/"}>Home</Link></li>
                    <li><Link style={{textDecoration:"none"}} to={"/about"}>About Us</Link></li>
                    <li><Link style={{textDecoration:"none"}} to={"/contact"}>Contact Us</Link></li>
                    <li ><Link style={{textDecoration:"none"}} to={"/grocery"}>Grocery</Link></li>
                     
                    <li><Link to={"/cart"} >Cart - ({cartItems.length} items)</Link></li>
                    <button  onClick={()=>{
                        
                        btnName==="login"?setbtnName("logout"):setbtnName("login");
                    }}>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>

            </div>

        </div>
    )
};

export default Header;
