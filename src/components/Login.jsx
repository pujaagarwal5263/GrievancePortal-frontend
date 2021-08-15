import React, {useContext, useState} from 'react';
import login from '../images/login.gif';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Login=()=>{
  const {state,dispatch} = useContext(UserContext);

  const history=useHistory();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(e)=>{
     e.preventDefault();

     const res= await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
        },
        
        body:JSON.stringify({
            email,password
        })
     });
     const data=await res.json();
     
     if(res.status===400 || !data){
       window.alert("Invalid Credentials");
     }else{
      dispatch({type:"USER",payload:true})
      window.alert("Login Successful");
      history.push("/");
     }
  }
  return(
    <>
      <section className="signup">
       <div className="container mt-5">
         <div className="signup-content">
           <div className="signup-form row">
             <div className="signup-image col-md-6">
              <figure>
              <img src={login} alt="not found"/>
              </figure>
              <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT</NavLink>
             </div>
             <div className="col-md-6">
             <h2>Log In</h2>
             <form method="POST" className="register-form" id="register-form">
            
              <div className="form-group">
                <label htmlFor="email">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here"></input>
              </div>
              
              <br />
              <div className="form-group">
                <label htmlFor="password">
                <i className="fa fa-lock" aria-hidden="true"></i>
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"></input>
              </div>
<br />
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit"
                onClick={loginUser} value="Log In"/>
              </div>
             </form>
             </div>
           </div>
         </div>
       </div>
      </section>
      
    </>
  )
}

export default Login;