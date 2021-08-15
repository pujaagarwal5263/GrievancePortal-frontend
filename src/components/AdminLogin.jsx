import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const AdminLogin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const history=useHistory();
    
    const getAccess=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
            window.alert("Login Successful");
            history.push("/aAbBcC");
        }else{
            window.alert("You don't have this access");
        }
    }
    return(
        <>
        <form method="GET">
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
                onClick={getAccess} value="Log In"/>
              </div>
        </form>
        </>
    )
} 

export default AdminLogin;