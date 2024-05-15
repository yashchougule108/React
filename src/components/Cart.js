import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const dispatch=useDispatch();
    const handleClearCart=()=>{
         dispatch(clearCart());
    }
    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div className="text-center m-4 p-4" >
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-full" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0&&<h1>Cart is empty . Add items to the cart</h1>}
             <ItemList items={cartItems}/>
             </div>
         
        </div>
    )
}

export default Cart;