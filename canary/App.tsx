import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import ReactViewAdobe from "../src/index";
import Header from "./Header";
import Footer from "./Footer";
import { getClientId } from "./util";

const App = () => {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route
          path="/test"
          element={
            <div className="section container">
              <div className="row">
                <div className="col s12">
                  <h5 data-testid="test-route" className="header">
                    Test Route View
                  </h5>
                  <iframe
                    src="https://one.ziping.org/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/README.md/?domain=github.com"
                    style={{
                      width: "100%",
                      height: "900px",
                      border: "1px solid transparent",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          }
        />
        <Route path="*" element={<ReactPath />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
function ReactPath () {
    const locationUrl = window.location.href;
    const paramPdf = locationUrl.split('?')[1];
    const newUrlSearchParams = new URLSearchParams(paramPdf);
    const pdfUrl = newUrlSearchParams.get('pdf') || newUrlSearchParams.get('url') || 'https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf';
    const width = newUrlSearchParams.get('width');
    const height = newUrlSearchParams.get('height');
    const fileName = newUrlSearchParams.get('fileName') || (pdfUrl.split('/').pop() || '23andMe_Ancestry_Book.pdf');
  
  
  
    return(
        <section id="about" className="container section">
            <div className="row ws-m">
            <header className="sec-heading">
                <h2>Basic Test View</h2>
                <span className="subheading">
                  Using the react-adobe-embed component with no additional 
                  configurations, except for the pdf url, in order to test 
                  the rendering of a PDF at the most basic level of 
                  usage.
                </span>
              </header>
                   <ReactViewAdobe
                        previewConfig={
                            { }
                        }
  
                        fileMeta= {
                            {
                                "fileName":  fileName,
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
                        debug={true}
  
                        id="adobe-dc-view-0"
                        clientId={ getClientId() }
                    /></div>
        </section>
    )
  }

  const rootElement = document.getElementById("app");
  if(rootElement){
    ReactDOM.createRoot(rootElement).render(<App />);
  }