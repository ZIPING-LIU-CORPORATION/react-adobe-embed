
## ADOBE PDF EMBED API is a Great Tool for Displaying PDF's with rich features - I really enjoy using Adobe Acrobat DC Pro ever since having the chance to use it for the first time when I interned at a law firm.

In case you want to use it with React with a bit more Typescript This Wrapper allows Adobe PDF Embed to work great with React 18 and Typescript


### Quick Guide

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

### Why was this made?

 We needed a utility for displaying PDF's but wanted to have more typescript and React involved with the displaying. This is part of LIU LLC's intermission phase ongoing in preliminary motions for setting up required framing for phase 4. These motions and phases encompass research and analysis as well as press reporting of the ongoing retaliation campaign currently waged against an employee at Amazon that started April of 2022. To learn more, see [here](https://andyjassy.cn/amazonblackmail)

### Do you need to see a demo? 

Okay, you can see a demo [here](https://aboutamazon.me/live)