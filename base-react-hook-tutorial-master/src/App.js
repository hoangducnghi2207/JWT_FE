// import logo from './logo.svg';
import './App.scss';
import Nav from './components/navigation/Nav';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register/register';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav/> */}
        <Switch>
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="*">
            404 Not Found
          </Route>
        </Switch>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
    </Router>
  );
}

export default App;
