import React, { Component } from 'react'
import './Ide.css'
import { Button, Modal, Form } from "react-bootstrap"
import axios from 'axios'
import secret from './secret'
import MonacoEditor from '@monaco-editor/react';
import {code} from './defaultCode'
import AddFileButton from "./AddFileButton"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Navbar"





export default class Ide extends Component {
    
    constructor(props){
        super(props);
        this.state={
        code: code.c,
        result: 'Submit Code to See Result',
        lang: 'c',
        coder:null,
    };}

    async componentDidMount() {
        // Simple GET request using fetch
         await fetch(this.props.location.aboutprops.file.url)
            .then(response => response.blob())
            .then(coder => this.setState({ coder}));
            console.log(this.state.coder)
            
        if (this.props.location.aboutprops.file.url== undefined) {return }
        else{const blob=this.state.coder
        var text=blob.text()
        text.then(data => this.setState({ code: data}))}
        
    }
    
      
    
   
    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.code],
            { type: 'text/plain;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.c";
        document.body.appendChild(element);
        element.click();

        console.log(this.state.coder)
        const blob=this.state.coder
        var text=blob.text()
        text.then(data => this.setState({ code: data}))
        
        
    }
    change1 =() => {
        const blob=this.state.coder
        var text=blob.text()
        text.then(data => this.setState({ code: data}))
        
    }
    
    
    
    

    onSubmitHandler = (e) => {
        e.preventDefault()
        alert("submit code")
        axios.post(`${secret.url}code/submit`,this.state)
            .then(res=>{
                console.log(res.data)
                const data = res.data
                if(data.err){
                    // Error in user code
                    this.setState({
                        result: data.error
                    })
                }else{
                    this.setState({
                        result: data.output
                    })
                }

            })
            .catch(err=>{
                console.log(err)
            })

    
    }


    onCodeChangeHandler = (newCode, e) => {
        console.log(e)
        this.setState({
            code: newCode
        })
    }
    onInputChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    editorDidMount = (e) => {
        console.log("EDITOR MOUNTED")
    }


    onLangSelectHandler = (e) => {
        const lang = e.target.value
        this.setState({
            lang,
            code: code[lang]
        })
    }


    render() {
   
        const options = {
            selectOnLineNumbers: true,
            renderIndentGuides: true,
            colorDecorators: true,
            cursorBlinking: "blink",
            autoClosingQuotes: "always",
            find: {
                autoFindInSelection: "always"
            },
            snippetSuggestions: "inline"
          };
        console.log(this.props.location.aboutprops.currentFolder)
        // console.log(this.props.location.ap.currentFolder.currentFolder)
        console.log(this.props.location.aboutprops.file.url)
       
        return (
            <>
            <style type="css">
            {`.code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;}
        }
        `}
            </style>
            <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                        <select id="lang" onChange={(e) => this.onLangSelectHandler(e)}>
                         
                            <option value="c">C</option>
                           
                        </select>
                        &nbsp;
                        &nbsp;
                        <Button onClick={this.downloadTxtFile} variant="outline-success" size="sm">
                            <FontAwesomeIcon icon={faFileDownload} />  Download
                        </Button>
                        &nbsp;&nbsp;
                        
                        <AddFileButton currentFolder={this.props.location.aboutprops.currentFolder} code={this.state.code}/>
                             <p className="lead d-block my-0">Code your code here</p>
                             <div type="text" id="code" className="code">
                             <MonacoEditor
                                width="100%"
                                
                                height="30em"
                                language={this.state.lang}
                                theme="vs-dark"
                                value={this.state.code}
                                
                                options={options}
                                // onClick={this.change()}
                                onChange={this.onCodeChangeHandler}
                                editorDidMount={this.editorDidMount}
                            />
                             </div>
                        </div>
                        <div className="col-12 mt-3">
                            <p className="lead d-block my-0">Provide Input</p>
                             <textarea type="text" id="input" value={this.state.input} onChange={this.onInputChangeHandler}>
                             </textarea>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.onSubmitHandler}>Submit Code</button>
                    <div className="row ">
                        <div className="col-12 my-5">
                             <textarea type="text" id="result" value={this.state.result} disabled={true}>
                             </textarea>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}