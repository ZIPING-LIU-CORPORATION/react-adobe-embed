import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

import ReactViewAdobe from "../src/index"

export const App = () => {

    return (
        <Router>
            <header>
                <nav className='navbar navbar-default navbar-fixed'>
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-collapse">

                                <ul style={{
                                    display: "inline-flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center",
                                    listStyle: "none",
                                    margin: "0",

                                }} className="nav navbar-nav">
                                    <li className="dropdown">
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                padding: "10px",
                                            }}
                                            className="dropdown" to="/test">Test Route</Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                padding: "10px",
                                            }}
                                            className='dropdown' to="/home">Home Route</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </nav>

            </header>
            <Routes>
                <Route path="/test" element={
                    <div className="section container">
                        <div className="row">
                            <div className="col s12">
                                <h5 data-testid="test-route" className="header">Test Route View</h5>
                                <iframe src="https://one.ziping.org/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/README.md/?domain=github.com"
                                    style={{
                                    width: "100%",
                                    height: "900px",
                                    border: "1px solid black",
                                    alignContent: "center",
                                    justifyContent: "center",

                                }}></iframe>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="*" element={ 
                    <ReactPath/>
                } />
            </Routes>
        </Router>
    );
}

function ReactPath () {
    const locationUrl = window.location.href;
    const paramPdf = locationUrl.split('?')[1];
    
    const newUrlSearchParams = new URLSearchParams(paramPdf);
    const pdfUrl = newUrlSearchParams.get('pdf');
    const width = newUrlSearchParams.get('width');
    const height = newUrlSearchParams.get('height');

 
    return(
        <div>
                   <ReactViewAdobe
                        previewConfig={
                            {
                                embedMode: "FULL_WINDOW",
                                defaultViewMode: "FIT_PAGE",

                                enableLinearization: true,


                            }
                        }
                        
                        fileMeta= {
                            {
                                "fileName": "23andMe_Ancestry_Book.pdf",
                            }
                        }

                        style={{
                            width: width ? width : "100%",
                            height:  height ? height : "900px",
                            border: "1px solid black",
                            alignContent: "center",
                            justifyContent: "center",

                        }}
                        url={
                            pdfUrl ? 
                            pdfUrl :
                            "https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf"
                        }
                        clientId={ 
                            // TODO: Fix this to a function
                            window.location.hostname === 'localhost' ?                
                            '324caa2a91b84f688935436cd2d25217' :
                            window.location.hostname === 'one.ziping.org' ?
                             '2e5605e61e5b4306829b619d6fad2dc4' :
                            window.location.hostname === 'zipingl.github.io' ?
                            '9c16d364507948289a9f65f9ab9da8bf' : 
                            '875691e089ad4bf6bc4c5cea79403542'
                        }
                    />
        </div>
    )
}


const appelem = document.getElementById('app');

if (appelem) {

    const reactrootapp = ReactDOM.createRoot(appelem);

    reactrootapp.render(<App />);

}





