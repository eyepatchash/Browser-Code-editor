import AddFileButton from "./AddFileButton"
import { useParams, useLocation } from "react-router-dom"
import { useFolder } from "../../hooks/useFolder"
import { storage, database } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function downloadTxtFile() {
    const element = document.createElement("a");
    const file = new Blob([state.code],
        { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.c";
    document.body.appendChild(element);
    element.click();
}
function UploadTxtFile() {
    const element = document.createElement("a");
    const { currentUser } = useAuth()
    const file = new Blob([state.code],
        { type: 'text/plain;charset=utf-8' });
    const uploadTask = storage
        .ref(`/files/${currentUser.uid}/`)
        .put(file)

}


<Button onClick={downloadTxtFile} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faFileDownload} />
                        </Button>
                        
                        <AddFileButton currentFolder={folder} name={state.code} file={state.code}/>