import React, { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import Ide from "./Ide"


export default function Idebutton(currentFolder) {
    console.log(currentFolder)
    return (
        
        <>

            <Button variant="outline-dark" size="s"><Link to ={
                {
                    pathname:'/folder/ide',
                    pathname:'ide',
                    aboutprops:{
                        currentFolder

                    }
                }
            } >ide
            </Link>
                 
      </Button>
        </>
    )
}
