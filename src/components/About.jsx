import React from 'react';
import { useEffect, useState } from 'react';

const About=()=>{
    //const history=useHistory();
    const [userData,setUserData] =useState();

    const callAboutPage=async()=>{
       try{
         const res = await fetch("/about",{
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
         });
         const data=await res.json();
         setUserData(data);

         console.log(`this is useState daa: ${userData.name}`);
         if(!res.status===200){
             const error=new Error(res.err);
             throw error;
         }
       }catch(err){
           console.log(err);
           //history.push("/login");
       }
    }
    useEffect(()=>{
       callAboutPage();
    },[])
    
    if(userData){
        return(
            <>
            <form method="GET">
             <h2>Hello, <span>{userData.name}</span></h2>
            <h3>You live in {userData.address}</h3>
            <h3>Contact Information:</h3>
            <h4>Phone: {userData.phone}</h4>
            <h4>Email: {userData.email}</h4>
            </form> 
            </>
        );
    }
    else{
        return(
            <>
            <p>Unable to load data. Try to refresh or relogin.</p>
            </> 
        ); 
    }
}

export default About;