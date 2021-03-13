import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./style.scss";
import './index.css';
import { Fragment } from "react";

export default function ide() {
    var require = {
        paths: {
        "vs": "https://unpkg.com/monaco-editor/min/vs",
    "monaco-vim": "https://unpkg.com/monaco-vim/dist/monaco-vim",
    "monaco-emacs": "https://unpkg.com/monaco-emacs/dist/monaco-emacs"}};
    return (<>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/goldenlayout.min.js" integrity="sha256-NhJAZDfGgv4PiB+GVlSrPdh3uc75XXYSM4su8hgTchI=" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/css/goldenlayout-base.css" integrity="sha256-oIDR18yKFZtfjCJfDsJYpTBv1S9QmxYopeqw2dO96xM=" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/css/goldenlayout-dark-theme.css" integrity="sha256-ygw8PvSDJJUGLf6Q9KIQsYR3mOmiQNlDaxMLDOx9xL0=" crossorigin="anonymous" />

        {/* <script>
            var require = {
                paths: {
                "vs": "https://unpkg.com/monaco-editor/min/vs",
            "monaco-vim": "https://unpkg.com/monaco-vim/dist/monaco-vim",
            "monaco-emacs": "https://unpkg.com/monaco-emacs/dist/monaco-emacs"
        }
    }
</script> */}
        <script src="https://unpkg.com/monaco-editor/min/vs/loader.js"></script>
        <script src="https://unpkg.com/monaco-editor@0.18.1/min/vs/editor/editor.main.nls.js"></script>
        <script src="https://unpkg.com/monaco-editor@0.18.1/min/vs/editor/editor.main.js"></script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha256-9mbkOfVho3ZPXfM7W8sV2SndrGDuh7wuyLjtsWeTI1Q=" crossorigin="anonymous" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" integrity="sha256-t8GepnyPmw9t+foMh3mKNvcorqNHamSKtKRxxpUEgFI=" crossorigin="anonymous"></script>

        <link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet">

            <script type="text/javascript" src="third_party/download.js"></script>

            <script type="text/javascript" src="js/ide.js"></script>

            <link type="text/css" rel="stylesheet" href="css/ide.css">

                <title>IDE - Free and open-source online code editor</title>
                <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
                    <link rel="icon" href="./favicon.ico" type="image/x-icon">

                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-83802640-2"></script>
                        <script>
                            window.dataLayer = window.dataLayer || [];
    function gtag() {dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'UA-83802640-2');
</script>

                        {/* <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="ee4621ff-c682-44ac-8cfa-1835beddb98a";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> */}

                        <div>
                            <div>
                                <div>


                                    <div class="left menu">
                                        <div class="ui dropdown item site-links on-hover">
                                            File <i class="dropdown icon"></i>
                                            <div class="menu">
                                                <a class="item" target="_blank" href="/"><i class="file code icon"></i> New File</a>
                                                <div class="item" onclick="save()"><i class="save icon"></i> Save (Ctrl + S)</div>
                                                <div class="item" onclick="downloadSource()"><i class="download icon"></i> Download</div>
                                                <div class="item"><i class="share icon"></i> Share</div>
                                                <div id="insert-template-btn" class="item"><i class="file code outline icon"></i> Insert template
                        for current language</div>
                                            </div>
                                        </div>
                                        <div class="link item" onclick="$('#site-settings').modal('show')"><i class="cog icon"></i> Settings</div>
                                        <div class="item borderless">
                                            <select id="select-language" class="ui dropdown">

                                                <option value="50" mode="c">C (GCC 9.2.0)</option>

                                            </select>
                                        </div>
                                        <div class="item fitted borderless wide screen only">
                                            <div class="ui input">
                                                <input id="compiler-options" type="text" placeholder="Compiler options"></input>
                                            </div>
                                        </div>
                                        <div class="item borderless wide screen only">
                                            <div class="ui input">
                                                <input id="command-line-arguments" type="text" placeholder="Command line arguments"></input>
                                            </div>
                                        </div>
                                        <div class="item no-left-padding borderless">
                                            <button id="run-btn" class="ui primary labeled icon button"><i class="play icon"></i>Run (F9)</button>
                                        </div>

                                    </div>
                                    <div class="right menu">
                                        <div id="updates" class="link item changelogfy-widget">
                                            <i class="fitted bell icon"></i>
                                        </div>
                                        <div class="ui dropdown item site-links">
                                            More
                <i class="dropdown icon"></i>
                                            <div class="menu">
                                                {/* <!-- <a id="about" class="link item" target="_blank" href="https://judge0.com/about"><i class="info circle icon"></i> About</a> --> */}
                                                <a id="about" class="link item" target="_blank" href="https://rapidapi.com/hermanzdosilovic/api/judge0"><i class="server icon"></i> API</a>
                                                <div class="divider"></div>
                                                <a class="item" target="_blank" href="https://www.patreon.com/hermanzdosilovic"><i
                                                    class="patreon icon"></i>
                        None</a>
                                                <a class="item" target="_blank" href="https://paypal.me/hermanzdosilovic"><i
                                                    class="paypal icon"></i>
                        None</a>
                                                <div class="divider"></div>
                                                <a class="item" target="_blank" href="https://github.com/judge0/ide"><i class="github icon"></i>
                        None</a>
                                                <a class="item" target="_blank" href="https://github.com/judge0/ide/issues/new"><i
                                                    class="exclamation circle icon"></i> Report an issue</a>
                                                <div class="divider"></div>
                                                <a class="item" target="_blank" href="https://forms.gle/p3KpGYSjxAbvGUft9"><i class="envelope icon"></i>
                        None</a>
                                                <a class="item" target="_blank" href="https://discord.gg/GRc3v6n"><i
                                                    class="discord icon"></i> Join a Discord server</a>
                                                <div class="divider"></div>
                                                <a class="item" target="_blank" href="mailto:hermanz.dosilovic@gmail.com"><i
                                                    class="paper plane icon"></i>
                        Contact the author</a>
                                                <a class="item" target="_blank" href="https://hermanz.dosilovic.com"><i class="user icon"></i> About
                        the
                        author</a>
                                                <div class="divider"></div>
                                                <a class="item" target="_blank"
                                                    href="https://www.reddit.com/submit?url=https%3A%2F%2Fide.judge0.com&title=Judge0%20IDE"
                                                    style="background-color: #ff4500 !important; color: white !important;"><i
                                                        class="reddit icon"></i> Share
                        </a>
                                                <a class="item" target="_blank"
                                                    href="https://twitter.com/intent/tweet?text=Judge0%20IDE&url=https%3A%2F%2Fide.judge0.com&via=hermanzvonimir"
                                                    style="background-color: #1da1f2 !important; color: white !important;"><i
                                                        class="twitter icon"></i>
                        Share on Twitter</a>
                                                <a class="item" target="_blank"
                                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fide.judge0.com"
                                                    style="background-color: #1877f2 !important; color: white !important;"><i
                                                        class="facebook icon"></i>
                        Share on Facebook</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="site-content"></div>

                                <div id="site-modal" class="ui modal">
                                    <div class="header">
                                        <i class="close icon"></i>
                                        <span id="title"></span>
                                    </div>
                                    <div class="scrolling content"></div>
                                    <div class="actions">
                                        <div class="ui small labeled icon cancel button">
                                            <i class="remove icon"></i>
                Close (ESC)
            </div>
                                    </div>
                                </div>

                                <div id="site-settings" class="ui modal">
                                    <i class="close icon"></i>
                                    <div class="header">
                                        <i class="cog icon"></i>
            Settings
        </div>
                                    <div class="content">
                                        <div class="ui form">
                                            <div class="inline fields">
                                                <label>Editor Mode</label>
                                                <div class="field">
                                                    <div class="ui radio checkbox">
                                                        <input type="radio" name="editor-mode" value="normal" checked="checked"></input>
                                                        <label>Normal</label>
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <div class="ui radio checkbox">
                                                        <input type="radio" name="editor-mode" value="vim"></input>
                                                        <label>Vim</label>
                                                    </div>
                                                </div>
                                                <div class="field">
                                                    <div class="ui radio checkbox">
                                                        <input type="radio" name="editor-mode" value="emacs"></input>
                                                        <label>Emacs</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="inline field">
                                                <div class="ui checkbox">
                                                    <input type="checkbox" name="redirect-output"></input>
                                                    <label>Redirect stderr to stdout</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="site-footer">
                                    <span id="donate-line">
                                        {/* <!-- <a class="item" target="_blank" href="https://www.patreon.com/hermanzdosilovic"><i class="patreon icon" style="color: #f06553;"></i> Become a Patron</a> -->
            ·
            <!-- <a class="item" target="_blank" href="https://paypal.me/hermanzdosilovic"><i class="paypal icon" style="color: #00457c;"></i></i> Donate with PayPal</a> --> */}
                                    </span>
                                    <div id="editor-status-line"></div>
                                    {/* <!-- <span>© 2016-2020 <a href="https://judge0.com">Judge0</a> · Powered by <a href="https://rapidapi.com/hermanzdosilovic/api/judge0">the most advanced open-source online code execution system</a> --> */}
                                    {/* <span id="status-line"></span> */}
                                </div>

                            </div>
                        </div>
 
      </>)
}