import React from "react"
import Signup from "./Auth/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./editor/Dashboard"
import Profile from "./Auth/Profile"
import Login from "./Auth/Login"
import PrivateRoute from "./Auth/PrivateRoute"
import ForgotPassword from "./Auth/ForgotPassword"
import UpdateProfile from "./Auth/UpdateProfile"
import ide from "./editor/Ide";
import './index.css';
import Navbar from "./editor/navbar1"




export const BackgroundImagePage = () => {
  return (
      <div className="bg"></div>
  );
}



function App() {
  
  return (<><Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/user" component={Profile} />
              <PrivateRoute name="ide" path="/ide" component={ide} />
              <PrivateRoute name="ide" path="/folder/ide" component={ide} />
              <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            
      
          </AuthProvider>
        </Router>
    {/* <Router><Navbar />
        <Switch>
          <Route path='/ide' exact component={ide} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch></Router> */}
    
    
    </>
  )
}

export default App
