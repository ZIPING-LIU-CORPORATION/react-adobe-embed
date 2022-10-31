[![wakatime](https://wakatime.com/badge/github/ZIPING-LIU-CORPORATION/react-adobe-embed.svg)](https://wakatime.com/badge/github/ZIPING-LIU-CORPORATION/react-adobe-embed)

# react-adobe-embed
## [ADOBE PDF EMBED API](https://developer.adobe.com/document-services/apis/pdf-embed/) is a Great Tool for Displaying PDF's with rich features,

Ziping Liu really enjoys using Adobe Acrobat DC Pro ever since having the chance to use it for the first time when I interned at a law firm. In case you want to use it with React with a bit more Typescript This Wrapper allows Adobe PDF Embed to work great with React 18 and Typescript

### Quick Guide

`npm install react-adobe-embed`

Add the library stuff from Adobe API in the index.html's head: public/index.html
```html
<head>
    <script src='https://documentcloud.adobe.com/view-sdk/main.js'></script>

</head>
```

Add this in a React Component or in your main App.tsx return or render block. Don't feel frightened about the parameters, this is written using typescript so the props are typed and have comments.
```js
import ReactViewAdobe, {AdobeReactView} from 'react-adobe-embed'

const App = () => {
return(
    <ReactViewAdobe previewConfig={{
                             showAnnotationTools: false,
                             showLeftHandPanel: false,
                             showDownloadPDF: false,
                        }} config={
                          {
                            clientId: 'c514163c351b4f2082ef01e530840e0b', // Feel free to use this api key, it only works for http://localhost so I don't care if you use it
                            divId: 'pdf-div',
                            url: 'https://suntzuping.s3.ap-east-1.amazonaws.com/ANDYTIME/23andMe_Ancestry_Book.pdf', // You can use this URL too, it only will work for localhost as well.
                            fileMeta: {
                              fileName: '23andMe_Ancestry_Book.pdf',
                            }
                          }
                        } /> )}
```

# Why was this made?

 We needed a utility for displaying PDF's but wanted to have more typescript and React involved with the displaying. This is part of LIU LLC's intermission phase ongoing in preliminary motions for setting up required framing for phase 4. These motions and phases encompass research and analysis as well as press reporting of the ongoing retaliation campaign currently waged against an employee at Amazon that started April of 2022. To learn more, see [here](https://andyjassy.cn/amazonblackmail)

# Do you need to see a demo? 

Okay, you can see a demo [here](https://aboutamazon.me/bob) or [here](https://aboutamazon.me/live) for now.



# FAQS
### Have something to say about this wrapper?
 - [Discuss Issues with it Here](https://github.com/ZIPING-LIU-CORPORATION/react-adobe-embed/discussions/1)
### Is this Wrapper Adobe Embed Thing being Updated? It's pretty barebones and doesn't do anything 
 - Yes, since this wrapper is actrively used in LIU LLC Sites, it is being updated and expect more updates and stuff on it

### Why are you using React 18? Why are you using Typescript 4.8? Isn't that overkill?
 - In some cases it is overkill, so hence you may utilize [Adobe Embed API](https://developer.adobe.com/document-services/apis/pdf-embed/) that is the service, hence why this package is called a wrapper and not ADOBE API Library

### This wrapper is overkill as a package on npm, a four year old could just write this out inline on any react front-end website
 - We agree, this is for those who are younger than four years old and not yet able to inline out components as vanilla react-js

### Where is npm?
 - You may view [here](https://www.npmjs.com/package/react-adobe-embed) for its npm package.

### Are you or is this wrapper thing affialated with Adobe Developer or Adobe?
 - Adobe, the Adobe logo, Acrobat, the Adobe PDF logo, Adobe Premiere, Creative Cloud, InDesign, and Photoshop are either registered trademarks or trademarks of Adobe in the United States and/or other countries. Ziping LIu Corporation  is trademarked in the United States and LIU LLC is incoporated in the State of Texas. As of this time we have no further public comments on the matter to put on record or address inquiries related wherein.