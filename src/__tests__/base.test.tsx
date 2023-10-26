// Test jest react component basic
import React from 'react';

import { render, waitFor, screen } from '@testing-library/react';
import ReactViewAdobe from '../index';
import {
    HashRouter,
    Router,
    Routes,
    Route
} from 'react-router-dom';

describe('BasicRender', () => {

    test('should render the component', async () => {



        const { container } = render(

            <ReactViewAdobe
                previewConfig={
                    {
                        embedMode: "SIZED_CONTAINER",
                    }
                }
                url="https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf"
                clientId={process.env.REACT_TEST_CLIENT_ID || ''}
            />

        );



        setTimeout(() => {

        }, 10000);

        const script = await screen.findByTestId(`react-adobe-embed-handholding-adobe-api-loading-idiocy-initial`);
        expect(script).toBeTruthy();

        expect(container).toMatchSnapshot();


    }
    );

    test('should re-render the component when component props updated', async () => {

        const previewFile = jest.fn();
        (global as any).AdobeDC = {
            View:
                class {
                    constructor() {

                    }


                    previewFile = previewFile;
                },





        }






        const { rerender } = render(
            <HashRouter>
                <Routes>

                    <Route
                        path={"/test"}
                        element={<ReactViewAdobe
                            previewConfig={
                                {
                                    embedMode: "SIZED_CONTAINER",
                                }
                            }
                            url="https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/pdf_open_parameters.pdf"
                            clientId={process.env.REACT_TEST_CLIENT_ID || ''}
                        />}
                    />

                    <Route
                        path={"/"} element={<div>Home</div>}></Route>




                </Routes>
            </HashRouter>
        );


        // Trigger the route to home
        window.location.hash = "#/";
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        // Wait for the component to be rendered
        await waitFor(() => screen.getByText("Home"));

        // Trigger the route to test
        window.location.hash = "#/test";
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        // Wait for the component to be rendered
        await waitFor(() => screen.getByTestId(`react-adobe-embed-handholding-adobe-api-loading-idiocy-initial`));

        // Go back home
        window.location.hash = "#/";
        window.dispatchEvent(new HashChangeEvent("hashchange"));


        // Wait for the component to be rendered
        await waitFor(() => screen.getByText("Home"));

        // Go back to test
        window.location.hash = "#/test";
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        // Wait for the component to be rendered
        await waitFor(() => screen.getByTestId(`react-adobe-embed-handholding-adobe-api-loading-idiocy-reused`));



        expect(rerender).toMatchSnapshot();


       // expect an additoinal call to previewFile that can be anticipated due to causing a re-render
        expect(previewFile).toHaveBeenCalledTimes(1);
    })



    afterEach(() => {
        (global as any).AdobeDC = undefined;
        jest.clearAllMocks();

    })

});
