# [React based ADOBE PDF EMBED API Component Facade](https://ziping-liu-corporation.github.io/react-adobe-embed/) is a Great Tool for Displaying PDF's with rich features,

Ziping Liu really enjoys using Adobe Acrobat DC Pro ever since having the chance to use it for the first time when I interned at a law firm. In case you want to use it with React with a bit more Typescript This Wrapper allows Adobe PDF Embed to work great with React 18 and Typescript

## Current Build and Working Status 
<table>
<thead>
   <tr>
    <td>
     <a  
      title="Canary End to End, integrated testing, that ensures the deployed react adobe component testing endpoint is runnning, via a production environment given that the react-adobe-embed relies on an external service "
      href="#canary-testingend-to-end-testing">Canary Hearbeat Status</a>
    </td>
    <td>
     <a 
      title="Alarm via dispatching event on new code change to external dependencies but namely for the canary end to end testing heartbeat to ensure it is accessing the latest deployed endpoint (ziping-liu-corporation.github.io/react-adobe-embed) to test" 
      href="https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/actions/workflows/canaryapp.yml">Alarm on Code Push for React-Adobe-Embed</a>
    </td>
    <td>
     <a 
      title="Unit Test that is a quick check of code changes via mocking out the very large external react embed api spaghetti code"
      href="https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/README.md#integration-testing">Integration/Unit Test on Code Push</a>
    </td>
    <td>
      <a href="http://www.wakatime.com/@aws">Development Coding Effort</a>
    </td>
   </tr>
 </thead>
  <tr>
   <td>
  <a href="https://cloud.cypress.io/projects/izghdg/runs">  <img title="Canary heartbeat status check for deployed latest component and adobe pdf api availability" src="https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed-cd-canary/actions/workflows/cypress-canary.yaml/badge.svg"/> </a>
   </td>
   <td>
     <img src="https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/actions/workflows/canaryapp.yml/badge.svg">
   </td>
    <td>
     <img src="https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/actions/workflows/main.yml/badge.svg"/>
    </td>
        <td>
     <a href="https://wakatime.com/badge/user/e012350f-8b4a-4ec4-ae89-56e558bfec5d/project/91c0617a-04ed-419d-9221-d5086d1bfbf6"> <img src="https://wakatime.com/badge/user/e012350f-8b4a-4ec4-ae89-56e558bfec5d/project/91c0617a-04ed-419d-9221-d5086d1bfbf6.svg"/> </a>
    </td>
  </tr></table>

Through live heartbeat monitoring the react component as well as the external  api service used, as well as via standard integartion testing, that provides full CD/CI coverage of [react-adobe-embed](https://github.com/ziping-liu-corporation/react-adobe-embed). *Further details regarding CD to be provided.*

## Installation via package managers
 - `npm install react-adobe-embed`
 - `yarn add react-adobe-embed`


### Basic Usage Examples

```tsx
import React from 'react';
 
import ReactViewAdobe from 'react-adobe-embed'

const App = () => {
return(
  <ReactViewAdobe
    
    /**
     * You can use the clientId below given that it only works
     * on http://localhost:80.
     * In order to generate your own clientId that is set with a configured
     * application domain,(e.g. yourappwithadobeembedstuff.com), 
     * visit: https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main
     */
    clientId="324caa2a91b84f688935436cd2d25217"
    title="A Story of Wages"
    url={"https://storage.googleapis.com/laotzu/awslegal/"
          + "notarized/EXHIBIT_"
          + "A_Story%20of%20WagesOFNONPAIDAges_encrypted_.pdf"}
    /**
     * This id must be unique to the pdf it is supposed to render, 
     * as part of requirements from adobe embed's api
     */
    id="exhbit-a-pdf" 
    fileMeta={{
      fileName: "A Story of Wages"
    }}
    previewConfig={{
      defaultViewMode: "FIT_WIDTH",
      showAnnotationTools: false,
      showPageControls: false,
      showDownloadPDF: false
    }}
    style={{
      height: "50vh"
    }}
  />
) }
```

##### Lightbox Example 
 - Example using React States
```ts
import React from 'react';

import ReactViewAdobe from 'react-adobe-embed'

const App = () => {
    const [viewDocumentTriggered, setViewDocumentTriggered] = React.useState(false);
    return (
        <div>
            <button onClick={(e)=>{
                e.preventDefault();
                setViewDocumentTriggered(true);
            }}>
                View Document
            </button>
            <ReactViewAdobe
                triggerAdobeDCViewRender={viewDocumentTriggered}
                clientId="324caa2a91b84f688935436cd2d25217"
                title="A Story of Wages"
                url={"https://storage.googleapis.com/laotzu/awslegal/"
                     + "notarized/EXHIBIT_"
                      + "A_Story%20of%20WagesOFNONPAIDAges_encrypted_.pdf"}
            /**
             * This is required and must be unique because adobe devs are coupled like that
             */
            id="exhbit-a-pdf"
            fileMeta={{
                fileName: "A Story of Wages"
            }}
            previewConfig={{
              "embedMode": "LIGHT_BOX"
            }}
         
  />
        </div>
    )
}
```

 - [Lightbox example code without using React States](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/canary/routes/LightBox.tsx), and through calling adobe embed api directly.
   - View a deployed demo [here](https://ziping-liu-corporation.github.io/react-adobe-embed/#/light).

<blockquote> 
   
*Note:  these other steps below are no longer required but remain to provide insight on how react-adobe-embed handles adobe embed api*
#### ~~2~~. ~~As the current implementation of creating [LIGHT_BOX](https://acrobatservices.adobe.com/view-sdk-demo/index.html#/view/LIGHT_BOX/Bodea%20Brochure.pdf) embed pdf's is quite complicated~~, you can view a live code example of how to use LIGHT_BOX mode with react-adobe-embed [here](https://codesandbox.io/p/sandbox/react-adobe-embed-pdf-galleria-showcase-yq5zz6?file=%2Fsrc%2FSections%2FMain.tsx%3A65%2C79)

#### ~~3. Note on adobe sdk `<script>` tag:~~
 - You don't need to worry about handling outside script tags. The react wrapper handles any script downloading. Simple call the React Component as shown above.
 - ~~In the past it was this: `<script src='https://documentcloud.adobe.com/view-sdk/main.js'></script>` as instructed by their office docs.~~
   - ~~If you use this URL right now however: it will give you an error saying to update your PDF Viewer. I saw the error on Nov 28th myself and asked myself... This is an embed PDF viewer, i shouldn't need to update anything.~~
 - ~~Anyways, the URL has been updated above in step 1.~~
  - ~~Since I guess Adobe just likes to change the URL to whatever they want, you can find the correct URL to use to include their ADOBE MAGIC STUFF [here](https://developer.adobe.com/document-services/docs/overview/pdf-embed-api/).~~
  - I don't know why but the folks at Adobe decided to change the script URL, and then also change the global variable name used to store the Adobe api methods, this has ulimately caused this npm package as actually a broken useless wrapper... so why didn't anyone add to the [discussion board](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/discussions/1) to let me know? Seriously? Just literally next time say, hey idiot your code is broken. I won't be offended. It's just code dude.
</blockquote>


## Installation via CDN
You can also load this as a CDN script. By default the latest version can be accessed publically via. For now it is only accessible in this manner as a UMD bundle, with access to the default exported React Component.
```html
<script src="https://cdn.jsdelivr.net/npm/react-adobe-embed@11.0/dist/react-adobe-embed.cdn.js">
```
 - An example of loading `react-adobe-embed` and utilizing it as a cdn is currently part of the testing endpoint.
    - The **testing endpoint code** can be viewed at [canary/routes/CDN.tsx](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/blob/slave/canary/routes/CDN.tsx)
    - The deployed **testing endpoint code** can be viewed at [ziping-liu-corporation.github.io/#/cdn](https://ziping-liu-corporation.github.io/react-adobe-embed/#/cdn)



## Troubleshooting common errors
 - `Cannot read properties of undefined (reading 'View')`
   - Remedy: disable ReactStrictMode when rendering the React Application, e.g., remove   <React.StrictMode>
 - `LicenseVerificationService.js:32 POST https://viewlicense.adobe.io/viewsdklicense/jwt 401 (Unauthorized)` (The pdf renders then immediately disappears for no apparent reason)
   - Remedy: the provided clientId is invalid. This is mainly due to the clientId provided not setup to allow for adobe embed api calls at the current hostname. You are free to use the clientId, `` shown in the example above, but take note that you will need to run your app on localhost port 80. To create your own clientId, visit the official page [here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html) for react adobe embed. 

## Testing

Given the increasing intricacy of this wrapper, it is imperative to safeguard the fundamental functionality from any potential disruption caused by new code alterations. At present, a rudimentary examination is conducted to verify the wrapper's capability to accurately display the PDF content while effectively handling asynchronous requests to the Adobe PDF Embed API.


### Integration Testing
This test runs as [a github action](.github/workflows/main.yml) whenever a code change occurs. Note, these tests only test the 
react code within, and thus mocks out any calls to adobe's embed api service.


#### Usage
`npm run test`

```bash
PASS  src/__tests__/base.test.tsx
  BasicRender
    ✓ should render the component (23 ms)
    ✓ should re-render the component when component props updated (18 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   2 passed, 2 total
Time:        1.699 s
Ran all test suites.
```

### Canary Testing/End to End Testing
The end to end tests which includes testing of the react-adobe-embed react component and the proper usage and response from the adobe embed api service is handled in a seperate repository, [react-adobe-embed-cd-canary](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed-cd-canary).

 - These tests are deployed as a form of heartbeat or canary testing via github workflows.
 - These tests are also ran with each new code push within this repo, and are triggered [via a respitory dispatch event](.github/workflows/canaryapp.yml)

 *Note: Further details including the testing architecture that allows for then a continuous dpeloyment and integartion of the react-adobe-embed component will be added. Please see the FAQs below*






## FAQS

### Is there more explanation available? The readme is pretty barebones and barely makes sense to me..
  - No doubt, the package and component is now pretty complicated in terms of the amount of code and directories and features it provides, which can definitely make it difficult to understand the basic usage or even the purpose of the package. The readme is intended to be concise such that it allows for a quick understanding of the most important aspects of the package. As of now a more detailed wiki page is being worked and will be provided as an additional resource that provides detailed explainations and guidance on the code and package.

### Why was this made?
  - We needed a utility for displaying PDF's but wanted to have more typescript and React involved with the displaying. This is part of LIU LLC's intermission phase ongoing in preliminary motions for setting up required framing for phase 4. These motions and phases encompass research and analysis as well as press reporting of the ongoing retaliation campaign currently waged against an employee at Amazon that started April of 2022. To learn more, see [here](https://ziping-liu-corporation.github.io/#/home/)
### Do you need to see a demo without code sandbox?
 - Okay, you can see a demo [here](https://twitterliu.com/linkedin) or [here](https://twitterliu.com/fmla) for now.
### Have something to say about this wrapper?
 - [You can create a new discussion post since they are open to the public](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/discussions/1)
 - Or simply [open up a pull request or issue](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/issues), it can be for any reason there's no required level of issue.
### Is this Wrapper Adobe Embed Thing being Updated? It's pretty barebones and doesn't do anything 
 - Yes, since this wrapper is actrively used in LIU LLC Sites, it is being updated and expect more updates and stuff on it
### Why are you using React 18? Why are you using Typescript 4.8? Isn't that overkill?
 - In some cases it is overkill, so hence you may utilize [Adobe Embed API](https://developer.adobe.com/document-services/apis/pdf-embed/) that is the service, hence why this package is called a wrapper and not ADOBE API Library
### This wrapper is overkill as a package on npm, a four year old could just write this out inline on any react front-end website
 - We agree, this is for those who are younger than four years old and not yet able to inline out components as vanilla react-js
### What's the NPM page?
 - [![Socket Badge](https://socket.dev/api/badge/npm/package/react-adobe-embed)](https://socket.dev/npm/package/react-adobe-embed), is a pretty decent way to view the NPM releases, or perhaps you might find [![](https://data.jsdelivr.com/v1/package/npm/react-adobe-embed/badge)](https://www.jsdelivr.com/package/npm/react-adobe-embed) more useful. 
### Are you or is this wrapper thing affialated with Adobe Developer or Adobe?
```
Adobe, with its renowned symbols such as Acrobat, the Adobe PDF insignia, Adobe Premiere, Creative Cloud, InDesign, and Photoshop, are acknowledged trademarks of Adobe, registered in the United States and/or other jurisdictions. Ziping Liu Corporation, a trademark registered in the United States, and LIU LLC, incorporated under the laws of the State of Texas, are also part of our respected portfolio. At this moment, we have no additional public declarations to make or inquiries to address on this matter.

Ziping LIU Corporation, overseeing Adobe code, is proud to unveil an innovative Nested React Component, aptly named 'ReactViewAdobe'. This component is a result of careful engineering, designed with the specific aim of managing the API calls and configurations associated with the Adobe Embed API SDK. This component, in its profound wisdom, employs React Hooks, thereby transforming what the Adobe Embed API SDK perceives as static and unadorned JavaScript code into an elegantly transposed representation in the Document Object Model (DOM). This is a testament to our commitment to innovation and growth in the ever-evolving digital landscape, or alternatively, necessary code scaffolding to allow for Adobe's complex API to function properly in modern frameworks.
```
