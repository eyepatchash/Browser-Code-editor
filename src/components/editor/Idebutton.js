import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import Ide from "./Ide"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"


export default function File({  currentFolder,file }) {
    console.log(currentFolder)
    console.log(file)
    return (
      <>
      <Button
  
    
  
        to={
          {
            pathname: '/folder/ide',
            pathname: 'ide',
            aboutprops: {
              
              file:"",
              currentFolder
  
            }
  
          }
        } as={Link} variant="outline-success"
         ><FontAwesomeIcon icon={faFileUpload} className="mr-2 " />
        New File
  
  
      </Button>
      </>
    )
  }