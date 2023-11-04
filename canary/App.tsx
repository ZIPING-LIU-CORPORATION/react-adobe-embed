import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BasicAdobeEmbed from './routes/Basic';
import LightBoxEmbed from './routes/LightBox';

function App() {
  return (
   
    <HashRouter>
       <Header/>

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
                            border: "1px solid transparent",
                            alignContent: "center",
                            justifyContent: "center",

                        }}></iframe>
                    </div>
                </div>
            </div>
        } />
        <Route path="/home" element={ 
            <BasicAdobeEmbed/>
        } />

        <Route path="/light" element={
          <LightBoxEmbed/>
        } />


    </Routes>
    <Footer/>
</HashRouter>
  );
}




const rootElement = document.getElementById("app");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
