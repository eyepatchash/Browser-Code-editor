import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"


export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    
    <CenteredContainer><style type="text/css">{
      `.link{
      
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


    `

    }</style>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <div className="text-center"><Button disabled={loading}  className="w-100" className=" w-50 justify-content-center" variant="dark" type="submit">
              Update
            </Button></div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2 mb-2">
        <Link to="/" className="link">Cancel</Link>
      </div>
      </Card>
      
    </CenteredContainer>
    
  )
}
