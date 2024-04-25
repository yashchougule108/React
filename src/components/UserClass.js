import React from "react"
//state var contains all the state varibales as object and
//after setState only setstate included variables are only updated

//when class is instanced that means called it firstly calls
//constructor-->render-->jsx
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"sdjbjd",
                id:"6556",
            }
        };

    }
    async componentDidMount(){
        //it is called when it is completely mounted
        //used to make api calls 
        const data= await fetch("https://api.github.com/users/yashchougule108");
        const json= await data.json();
        //console.log(json);
        this.setState({
            userInfo:json
        })

    }
    componentDidUpdate(){
       //it will exexute after every update phase 
    }
    componentWillUnmount(){
        //used for unmount the component; 
    }
    render(){
        const {login,id}=this.state.userInfo;
        
        return(
            <div className="user-card">
               
                <h1>Name:{login}</h1>
                <h3>Location:{id}</h3>
                <h3>Email:yashchougule31@gmail.com</h3>
            </div>
        )
    }
}

export default Userclass;