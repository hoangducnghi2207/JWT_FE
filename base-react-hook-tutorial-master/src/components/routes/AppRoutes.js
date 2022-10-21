import Login from "../login/login";
import Register from "../register/register"
import User from "../user/user"
import PrivateRoute from "./privateRoute";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const AppRoutes = (props) => {
    const Project=()=>{
        return(
            <div>project</div>
        )
         
        
    }
    return (
        <>
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
                {/* <Route path="/user">
                    <User />
                </Route> */}
               <PrivateRoute path="/user" component={User} />
               <PrivateRoute path="/project" component={Project} />
                <Route path="/" exact>
                    home
                </Route>
                <Route path="*">
                    404 Not Found
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes