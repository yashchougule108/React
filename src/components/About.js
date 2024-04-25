import User from './User'
import Userclass from './UserClass';
const About=()=>{
    return(
        <div>
           <h1 className='font-extrabold text-2xl '>About</h1>
           <h2>Welcome to react</h2> 
           <User name={"yash (functional)"}/>
           <Userclass name={"yash (classes)"}/>
        </div>
    )
}
export default About;