import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"


export default function File({  currentFolder,file }) {
  console.log(currentFolder)
  console.log(file)
  return (
    <>
    <Button

      className="btn-outline-dark text-truncate w-100"

      to={
        {
          pathname: '/folder/ide',
          pathname: 'ide',
          aboutprops: {
            
            file,
            currentFolder

          }

        }
      } as={Link} variant="outline-dark"
      className="text-truncate w-100" ><FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}


    </Button>
    </>
  )
}
