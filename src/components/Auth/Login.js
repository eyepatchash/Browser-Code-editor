import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Loginimg from "../5-things-that-developers-dislike-doing.svg";
import "../index.css"
import CenteredContainer from "./CenteredContainer"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer> <style type="text/css">
    {`

    
    .btn-flat {
      background-color: black;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .link{
      
      color: black;
      text-decoration: none;
      position: relative;
    }
    
    .link::after{
      content: "";
      background: white;
      mix-blend-mode: exclusion;
      width: calc(90% + 20px);
      height: 0;
      position: absolute;
      bottom: -2px;
      left: -10px;
      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    
    .link:hover::after{
      height: calc(100% + 8px)
    }
    .link1{
      
      color: black;
      text-decoration: none;
      position: relative;
    }
    
    .link1::after{
      content: "";
      background: white;
      mix-blend-mode: exclusion;
      width: calc(90% + 30px);
      height: 0;
      position: absolute;
      bottom: -2px;
      left: -10px;
      transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    
    .link1:hover::after{
      height: calc(100% + 8px)
    }
    
    
    /* The End */
    
    
    
    
    `}
  </style>
      <Card>
        <Card.Body>
          <div className=" d-flex justify-content-center"><img src={Loginimg} width="250" className=""/></div>
          
          <h2 className="text-center mb-4">Log In</h2><img className="image ">
          </img>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div className="text-center"><Button disabled={loading} className="w-100" className=" w-50 justify-content-center" type="submit" variant="flat" type="submit">
              Log In
            </Button></div>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" className="link1" >Forgot Password?</Link>
          </div>
        </Card.Body>
    
      <div className= "  w-100 text-center mt-2">
        Need an account?&nbsp;&nbsp; <Link to="/signup" className="link">Sign Up</Link>
      </div>  </Card>
      
    </CenteredContainer>
  )
}

