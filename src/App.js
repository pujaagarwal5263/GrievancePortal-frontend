import React, { createContext, useReducer } from 'react';
import {  Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Grievance from './components/Grievance';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Logout from './components/Logout';
import Error from './components/Error';
import GrievanceStatus from './components/GrievanceStatus';

import { initialState, reducer } from "./reducer/UseReducer";
import AdminLogin from './components/AdminLogin';

//we need to create context API for toggling
export const UserContext = createContext();

  const Routing = ()=>{
    return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/grievance" component={Grievance}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/AdminLogin" component={AdminLogin}/>
      <Route exact path="/aAbBcC" component={GrievanceStatus}/>
      <Route component={Error} />
      </Switch>
    );
  }
  
const App=()=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return(
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
    <Routing />
    </UserContext.Provider>
    </>
  )
};

export default App;
