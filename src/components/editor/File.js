import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React ,{useState}from "react"
import { Button, Modal, Form} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { BreadcrumbItem, ButtonDropdown ,DropdownItem,DropdownMenu,DropdownToggle} from "reactstrap"
import { Breadcrumb } from "react-bootstrap"



export default function File({  currentFolder,file }) {
  console.log(currentFolder)
  console.log(file.url)
  const [open, setOpen1] = useState(false)
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => {setOpen(!dropdownOpen)};
  function openModal() {
    setOpen1(true)
    navigator.clipboard.writeText(file.url)
  }

  function closeModal() {
    setOpen1(false)
  }

  return (
   
    
    
    <>
   <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      <FontAwesomeIcon icon={faFile} className="mr-2" />
      {file.name}

      </DropdownToggle>
      <DropdownMenu>
        
       
        <DropdownItem> <Button



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
Open


</Button></DropdownItem>
        <DropdownItem divider />
        <DropdownItem>

        <Button onClick={openModal}  variant="outline-info" >
        <FontAwesomeIcon  /> Share
      </Button>
      
      <Modal show={open} onHide={closeModal}>
      
  

  Link Copied

      </Modal>
     



        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    </>
  )
}
