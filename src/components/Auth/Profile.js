import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CenteredContainer from "./CenteredContainer"

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <CenteredContainer>
      <style type="text/css">{
      `.link{
      
        color: black;
        text-decoration: none;
        position: relative;
      }
      
      .link::after{
        content: "";
        background: white;
        mix-blend-mode: exclusion;
        width: calc(90% + 18px);
        height: 0;
        position: absolute;
        bottom: -1px;
  
        left: -8px;
        transition: all .3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      
      .link:hover::after{
        height: calc(100% + 8px)
      }


    `

    }</style>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-dark w-100 mt-3" >
            Update Profile
          </Link>&nbsp;
          <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout} className="link" >
          Log Out
        </Button>
      </div>

        </Card.Body>
      </Card>
      
    </CenteredContainer>
  )
}
