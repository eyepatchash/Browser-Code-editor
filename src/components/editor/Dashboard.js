import React from "react"
import { Container ,Card} from "react-bootstrap"
import { useFolder } from "../../hooks/useFolder"
import AddFolderButton from "./AddFolderButton"
import AddFileButton from "./AddFileButton"
import Folder from "./Folder"
import File from "./File"
import Navbar from "./Navbar"
import FolderBreadcrumbs from "./FolderBreadcrumbs"
import { useParams, useLocation } from "react-router-dom"
import Idebutton from "./Idebutton"


export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder)

  return (
    <div className="home">
      <div>
  
      <Navbar />&nbsp;
      <Container fluid >
        
        <div className="d-flex align-items-center ">
          <FolderBreadcrumbs currentFolder={folder} />
          <Idebutton currentFolder={folder} file="" />&nbsp;&nbsp;
          <AddFolderButton currentFolder={folder} />
          
        </div>
        {childFolders.length > 0 && (<h4 style={{color: "#17a2b8"}} > Projects</h4>)}
        {childFolders.length == 0 && (<h4 style={{color: "#B22222"}}> Add Project</h4>)}
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFolders.length === 0 || childFiles.length === 0 && <hr />}
        {childFiles.length > 0 && (<h4 style={{color: "#17a2b8"}} > Files</h4>)}
        {childFiles.length === 0 && (<h4 style={{color:"#B22222"}}>Add  File</h4>)}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            
            {childFiles.map(childFile => (console.log(childFile),
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File currentFolder={folder} file={childFile} />
                
              </div>
            ))}
          </div>
        )}
      </Container></div>
      </div>
      
    
  )
}
