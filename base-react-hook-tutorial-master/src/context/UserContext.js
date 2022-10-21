import { useState, useEffect } from "react";
import React from "react";
import { getUserAccount } from "../components/service/userService";
import { useLocation } from "react-router-dom";

const UserContext = React.createContext(null);
const UserProvider = ({ children }) => {
  const location = useLocation
  // User is the name of the "data" that gets stored in context
  
  const [user, setUser] = useState({
    isLoading: true,
    isAuthenticate: false,
    token: "",
    account: {}
  });

  // Login updates the user data with a name parameter
  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
    console.log(21,userData);
    
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: '',
      auth: false,
    }));
  };
  const fetchUser = async () => {
    let response = await getUserAccount()
    if (response && response.errorcode == 0) {
      let groupWithRole = response.data.data.groupWithRole
      let email = response.data.data.email
      let username = response.data.data.username
      let token = response.data.data.access_token

      let data = {
        isLoading: false,
        isAuthenticate: true,
        token: token,
        account: { groupWithRole, email, username },

      }
      console.log(44,data);
      setUser(data)
    }
  }
  useEffect(() => {
    if (window.location.pathname !== '/') {
      fetchUser()
    }
  })
  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider }