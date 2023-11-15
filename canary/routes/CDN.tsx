import React from 'react';
import { getClientId } from '../util';
 
export default function CDN() {

    const [componentDidMount, setComponentDidMount] = React.useState(false);
    const [componentDidUpdate, setComponentDidUpdate] = React.useState(false);
    React.useEffect(() => {

        if (!componentDidMount) {

            // Create new script element to load cdn
            const script = document.createElement('script');
            script.src = 'https://ziping-liu-corporation.github.io/react-adobe-embed/dist/react-adobe-embed.cdn.js';
            script.async = true;
            script.onload = () => {
                setComponentDidUpdate(true);
            };
            // Add script to document body
            document.body.appendChild(script);

            setComponentDidMount(true);

        }

    } , [componentDidMount, componentDidUpdate]);


    (window as any).React = React; // expose React as global since the react-adobe embed cdn expects React to be loaded via cdn as well
    const ReactViewAdobe = (window as any).ReactViewAdobe as typeof import('react-adobe-embed').default;

    return (
        <section className="container section">
            <div className="row ws-m">
                <div className="col s12">
                <header className="sec-heading">
                    <h2>CDN Loaded Basic PDF Render</h2>
                    <span className="subheading">
                    Content Delivery Networking (CDN) allows the delivery of the react-adobe-embed component to a browser environment to occur as <strong>a separate process</strong> from the main body of the web application's code.
                 
                    </span>
                </header>
                    <p>
                    This approach involves loading the component as an independent script within the initial HTML page load, effectively integrating it into the HTML DOM environment. This method not only reduces the space required by the web application, thereby enhancing its load speed, but also leverages the benefits of distributed loading. By loading distinct components of the web application through separate network requests, we can maximize efficiency. In this instance, the react-adobe-embed component is sourced from a CDN as a separate network request, distinct from the main web application. This effectively allows the web application to load in two concurrent parts, or at least simulates this effect, thanks to the inherent multi-threading capabilities of computer systems.
                    </p>
                    {
                        componentDidUpdate && componentDidMount && ReactViewAdobe && (<ReactViewAdobe
                            clientId={getClientId()}
                            url="https://raw.githubusercontent.com/ZipingL/dna/main/23andMe_Ancestry_Book.pdf"
                            debug={true}
                            className="col container-fluid post-content"
                            style={{
                                height: "calc(100vh - 420px)",
                                width: "100%"
                            }}
                            previewConfig={{}}
                            fileMeta={{
                                fileName: "23andMe_Ancestry_Book.pdf",

                            }}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}