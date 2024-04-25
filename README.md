<!-- #namaste javascript
// import React from "react";
// import ReactDOM from 'react-dom';

// const myElement = <h1> I Love JSX! </h1>

// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement); 
//babel converts jsx to react element
//const name="yash";


//React Component
//class based components
//functonal component

//const myElement =<h1 className="head">hello jsx</h1>;
//const Title =()=>(
    //     <h1>title is called</h1>
    // )
    
    // const HeadingComponent=()=>(
    //     <div>
    //         {/* //{title()}
    //         <Title></Title>
    //          */}
    //         <Title/>
    //         <h1>hello react  jsx</h1>
    //     </div>
        
    // )

// const styleCard={
//     backgroundColor:"black",
// }

// conflict driven ui by incoming data through carusal ui by swiggy
//dontby  use index as key it is given by react standards
//not using keys (not accepted)<<<<<index as key<<<<<unique id
//key is compuslory used in map inorder identify elemt uniquely
// if key is not there then redering of all the elements will happen
// and key is present then it will render particluar elemt -->

two types of export/import
1)default(only one default export is valid in single component)

export default <name of component>
import <name of component> from <path>

2) named export
 export <name>
 import {<name>} from <path   >


 #React hooks
 (normal js utility functions)
 -useState()
 -useEffect( )

<!-- 
 after state chaange react will rerender 
 React is fast at rerendering 
 React is very fast and good at dom manipulation bbased on diff algorithm find differend=ce then chnage actual dom-->

 <!-- Reconciliation algorithm(react fiber) ->
 react will create virtul dom(js object)
 virtual dom is representation of actual dom
 -->

 whenever state variable upadte react will rerender whole componentab

 //use state
 //use usestate as local variable.
 //dont use usestate in conditional statements,loops ,functions 

 //react builds single page application that is it only change the component not whole page

 //2 types of routing in web apps
 -client side routing-->no any newtwork call it is just loading the component
 -server side routing
//react workflow
 //load-render-api calls -rerender
 
 //class workflow
 //parent constructor is called
 //parent render
 //then childrens constructor and render called
 // and at last children mounted is called in batches
 //react works in two phase
 //render and commit
 //render involves constructor and render
//commit involves actual dom manipiulation 
//react behaves like this beacuse dom manipulation is costilier


// style sheets
//material ui
//styled components
//bootstrap
//chakra ui
//ant design

//react context
//it is global place to put data that will be  accessible  from anywheref
