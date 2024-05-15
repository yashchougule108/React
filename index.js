
import React,{Suspense, lazy, useEffect, useState}from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appstore from "./src/utils/appStore";
import Cart from "./src/components/Cart"

//import Grocery from "./components/Grocery";

//chunking
//dynamic bundling
//code splitting
//lazy loading
//on demand loading
//dynamic import 

const Grocery=lazy(()=>import("./src/components/Grocery"));

const AppLayout=()=>{
    const [userInfo , setUserInfo]=useState();
    useEffect(()=>{
        const data={
            name:"yash"
        }
        setUserInfo(data.name);
    },[])
    return (
        <Provider store={appstore}>
        <userContext.Provider value={{loggedInUser:userInfo ,setUserInfo}}>
        <div className="app">
            <Header/>
            <Outlet/>
        

        </div>
        </userContext.Provider>
        </Provider>

    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[{
            path:"/",
            element:<Body/>
        },{
            path:"/about",
            element:<About/> 
        },{
            path:"/contact",
            element:<Contact/>
        },{
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },{
            path:"/cart",
            element:<Cart/>
        }

        ],
        errorElement:<Error/>
    }
])
ReactDOM.render(<RouterProvider router={appRouter}/>,document.getElementById("root"));
