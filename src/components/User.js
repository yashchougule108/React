const User=(props)=>{

    // useEffect(()=>{
    //     console.log("useeffect");
        
    //     return()=>{
    //     //it behaves like componentwillunmount
    //     //it will works when we render another component
    //     };
        
    // },[])
    return(
        <div className="user-card border border-black">
            
            <h1>Name:{props.name}</h1>
            <h3>Location:Kolhapur</h3>
            <h3>Email:yashchougule31@gmail.com</h3>
        </div>
    )
}

export default User;