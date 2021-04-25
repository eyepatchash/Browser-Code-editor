import React, { useState}  from "react"
import { Navbar, Nav ,Button} from "react-bootstrap"
import { Link ,useHistory} from "react-router-dom"
import "../index.scss"
import logo  from "../logo.png"
import { useAuth } from "../../contexts/AuthContext"



export default function NavbarComponent() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  let user = useAuth().currentUser;
  var name = user.email.substring(0,user.email.lastIndexOf("@"));


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (<>
    {/* // <Navbar bg="dark" expanded="sm">
    //   
    //   <Navbar.Brand as={Link} to="/">
    //    <div className="navbar">Code Editor</div> 
    //   </Navbar.Brand>

    //   <Nav className="ml-auto">
    //     <Nav.Link as={Link} to="/user">
    //      <Nav.Item>
    //        Profile</Nav.Item> 
    //     </Nav.Link>
    //   </Nav>
    // </Navbar> */}
    <Navbar bg="dark" variant="dark">
  <Nav className="container-fluid">
    <Nav>
      <img className="icon" src={logo} width="55em"/> &nbsp;
       </Nav>
    <Nav.Item>
      <Navbar.Brand as={Link} to="/"><b style={{color:"#9A2A2A" } }>Code Editor</b></Navbar.Brand>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/user"><div className="profile"><h4>Profile</h4></div></Nav.Link>
    </Nav.Item>
    &nbsp;
    
    <Button variant="outline-danger" onClick= {handleLogout}>Log Out</Button>{' '}
      
  
    <Nav.Item className="ml-auto">
      <h6 style={{ color:"#29d863"}}>Happy Coding!, <em style={{color:"yellow"}}>{name}</em></h6>
      

    </Nav.Item>
  </Nav>
</Navbar>
</>
  )
}
