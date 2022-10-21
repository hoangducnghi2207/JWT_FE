import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import './Nav.scss'
const Nav = (props) => {
  let location = useLocation();
  let {user} =useContext(UserContext)
  const [isShow, setIsShow] = useState(true)
  // useEffect(() => {
  //   let session = sessionStorage.getItem('account')
  //   if (location.pathname=="/login") {
  //     setIsShow(false)
  //   }
    
  //   // if (session) {
  //   //   //checkrole
  //   //   setIsShow(true)
  //   // }
  // }, [])
  if(user && user.isAuthenticate==true || (location.pathname=='/')){
    return (
      <>
        {isShow == true &&
          <div className="topnav">
            <a class="active" href="/">Home</a>
            <a href="/user">Users</a>
            <a href="/project">Project</a>
            <a href="/about">About</a>
          </div>
        }
      </>
    );
  }
  else{
    return <></>
  }

}

export default Nav;