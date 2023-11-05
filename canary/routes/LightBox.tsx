import React from 'react';
import ReactViewAdobe, { previewFile } from  'react-adobe-embed';
import { getClientId } from '../util';

export default function LightBoxEmbed() {
  
 
    return (<section className="container section">
        <div className="row ws-m">
                <div className="col s12" style={{
                   height: 'calc(100vh - 420px)',
                }}>

                        <ReactViewAdobe
                            url="https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf"
                            clientId={
                                getClientId()
                            }
                            previewConfig={{
                                embedMode: "LIGHT_BOX",

                            }}
                            debug={true}
                            >
                               
                            </ReactViewAdobe>

                            <button className="btn btn-primary" onClick={()=>{
                                previewFile({
                                    url: "https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf",
                                     
                                    viewerConfig: {
                                        embedMode: "LIGHT_BOX",
                                    },
                                    clientID: getClientId(),
                                    divId: 'pdf-div',
                                    _fileMeta:{
                                        fileName: "23andMe_Ancestry_Book.pdf"
                                    }
                                })
                                
                            }}>Toggle Light Box View</button>

                </div>
            </div>
    </section>)
}