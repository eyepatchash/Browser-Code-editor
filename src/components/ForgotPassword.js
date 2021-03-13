import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" variant="submit" variant="flat">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login" className="link">Login</Link>
          </div>
        </Card.Body>
     
      <div className="w-100 text-center mt-2">
        Need an account? &nbsp;&nbsp; <Link to="/signup" className="link">Sign Up</Link>
      </div> </Card>
    </>
  )
}
