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

  return (<div className="signup">
    <CenteredContainer>
  
  
  <div className="d-flex bd-highlight example-parent " >
      <div className=" w-100 col-example">
      <div className="opa">
        <Card.Body>
          <div className="d-flex justify-content-center"><img src={loginImg} width="180"  height=""/></div>
          <h1 className="text-center mb-4">Sign Up</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label></Form.Label>
              <div><input type="email" ref={emailRef} required  className="inputr2"/><label className="label"><b>&nbsp;&nbsp;&nbsp;&nbsp;Email</b></label></div>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label></Form.Label>
              <div><input type="password" ref={passwordRef} required  className="inputr3"/><label className="label"><b>&nbsp;&nbsp;&nbsp;&nbsp;Password</b></label></div>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label></Form.Label>
              <div> <input type="password" ref={passwordConfirmRef} required  className="inputr4"/><label className="label"><b>&nbsp;&nbsp;&nbsp;&nbsp;Password Confirmation</b></label></div>
            </Form.Group>
            <div className="text-center"><Button disabled={loading} className="w-50" type="submit" variant="outline-success"  >
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
      </div>
      </div>
    {/* <Link to="/login" className="w-25 text-center min-vh-100 justify-content-between" text="login"><Card className="">Login</Card></Link> */}
      
     
      
      </div>
      
    </CenteredContainer></div>
  )
}
