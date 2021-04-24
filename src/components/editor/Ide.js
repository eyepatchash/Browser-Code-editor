import React, { Component } from 'react'
import './Ide.css'
import { Button, Modal, Form } from "react-bootstrap"
import axios from 'axios'
import secret from './secret'
import MonacoEditor from '@monaco-editor/react';
import {code} from './defaultCode'
import AddFileButton from "./AddFileButton"
import { faFileDownload } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "./Navbar"
import cicon from "../../cicon.png"





export default class Ide extends Component {
    
    constructor(props){
        super(props);
        this.state={
        code: code.c,
        result: '',
        lang: 'c',
        coder:null,
        vs:"vs-light"
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
    darkmode = () => {
        
        this.setState({
            
            vs: "vs-dark"
        })
    }
    lightmode = () => {
        
        this.setState({
            
            vs: "vs-light"
        })
    }


    render() {
   
        const options = {
            selectOnLineNumbers: true,
            renderIndentGuides: true,
            colorDecorators: true,
            cursorBlinking: "blink",
            autoClosingQuotes: "always",
            opacity:0.5,
            find: {
                autoFindInSelection: "always"
            },
            snippetSuggestions: "inline"
          };
        console.log(this.props.location.aboutprops.currentFolder)
        // console.log(this.props.location.ap.currentFolder.currentFolder)
        console.log(this.props.location.aboutprops.file.url)
       
        return (
            <><div className="ide">
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
                        
                         
                           <img src={cicon}/>
                           
                        
                        &nbsp;
                        &nbsp;
                        <Button onClick={this.downloadTxtFile} variant="success" size="sm">
                            <FontAwesomeIcon icon={faFileDownload} />  Download
                        </Button>
                        &nbsp;&nbsp;
                        
                        
                        <AddFileButton currentFolder={this.props.location.aboutprops.currentFolder} code={this.state.code}/> 
                        {this.state.vs == "vs-light" && (<div  style={{ marginLeft: "1060px" }}><Button variant="dark" onClick={this.darkmode} className="ml-90" >
                                <FontAwesomeIcon icon={faMoon}/>
                            </Button></div>)}
                        {this.state.vs == "vs-dark" && (<div  style={{ marginLeft: "1060px" }}><Button variant="light" onClick={this.lightmode} className="ml-90" >
                                <FontAwesomeIcon icon={faSun}/>
                            </Button></div>)}
                        
                             <div type="text" id="code" className="code">
                             <MonacoEditor
                                width="100%"
                                
                                height="30em"
                                language={this.state.lang}
                                theme={this.state.vs}
                                value={this.state.code}
                                
                                options={options}
                                // onClick={this.change()}
                                onChange={this.onCodeChangeHandler}
                                editorDidMount={this.editorDidMount}
                            />
                             </div>
                        </div>
                        <div className="col-12 mt-3">
                            <p className="lead d-block my-0" style={{color:"white"}}><b>Provide Input</b></p>
                             <textarea type="text" id="input" value={this.state.input} onChange={this.onInputChangeHandler }   className="textarea">
                             </textarea>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.onSubmitHandler}>Submit Code</button>
                    <div className="row ">
                    {this.state.result != "" && (<div className="col-12 my-5">
                             <textarea type="text" id="result" value={this.state.result} disabled={true} className="textarea" >
                             </textarea>
                        </div>)}
                        &nbsp;
                        
                    </div>
                </div></div>
            </>
        )
    }
}