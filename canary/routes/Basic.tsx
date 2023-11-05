import React from 'react';
import ReactViewAdobe from 'react-adobe-embed';
import { getClientId } from '../util';
export default function BasicAdobeEmbed() {
    const locationUrl = window.location.href;
    const paramPdf = locationUrl.split('?')[1];

    const newUrlSearchParams = new URLSearchParams(paramPdf);
    const pdfUrl = newUrlSearchParams.get('pdf') || newUrlSearchParams.get('url') || 'https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf';


    const width = newUrlSearchParams.get('width');
    const height = newUrlSearchParams.get('height');
    const fileName = newUrlSearchParams.get('fileName') || (pdfUrl.split('/').pop() || '23andMe_Ancestry_Book.pdf');




    return (
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
                        {}
                    }

                    className="col container-fluid post-content"

                    fileMeta={
                        {
                            "fileName": fileName,
                        }
                    }

                    style={{
                        width: width ? width : "100%",
                        height: height ? height : "calc(100vh - 200px)",
                        maxHeight: "100%",
                        border: "1px solid transparent",
                        alignContent: "center",
                        justifyContent: "center",
                        minHeight: '500px'

                    }}
                    url={
                        pdfUrl ?
                            pdfUrl :
                            "https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf"
                    }
                    debug={true}

                    id="adobe-dc-view-0"
                    clientId={getClientId()}
                /></div>
        </section>
    )
}