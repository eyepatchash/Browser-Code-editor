import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import {useAuth}  from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import loginImg from "../70259506.svg";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '../index.css';
import CenteredContainer from "./CenteredContainer"



// export const BackgroundImagePage = () => {
//   return (
//       // <div className="bg"></div>
//   );
// }

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <CenteredContainer>
    <style type="text/css">
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

    `}
  </style>
  
  <div className="d-flex bd-highlight example-parent " classname="bg">
      <div className=" w-100 col-example">
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-center"><img src={loginImg} width="180"  height=""/></div>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div className="text-center"><Button disabled={loading} className="w-50" type="submit" variant="flat"  >
              Sign Up
            </Button></div>
            {/* <div className="text-center">
          <MDBBtn>Login</MDBBtn>
        </div> */}
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
        Already have an account?&nbsp;&nbsp; <Link to="/login"className="link">Log In</Link>
      </div>
      </Card>
      </div>
    {/* <Link to="/login" className="w-25 text-center min-vh-100 justify-content-between" text="login"><Card className="">Login</Card></Link> */}
      
     
      
      </div>
      
    </CenteredContainer>
  )
}
