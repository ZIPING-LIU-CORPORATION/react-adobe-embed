const fs = require('fs-extra');
const path = require('path');
const minify = require('html-minifier').minify;

const modifiedDate = (new Date()).toISOString().replace(/\.\d\d\dZ/, '+00:00');
const publicIndexhtml = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');
const readme = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf8');

const regexMatchHead = /<head>([\s\S]*?)<\/head>/;

const headMatched = publicIndexhtml.match(regexMatchHead);
const matchedTitle = headMatched[1].match(/<title>([\s\S]*?)<\/title>/);

const regexMatchLongWords =  /[a-zA-Z]{6,}/g;
 

const wordsarra =readme.match(regexMatchLongWords).map((word) => {
    return word.toLowerCase();
});
 
const wordsarra2Unique =    [...new Set(wordsarra)];
const wordAvoid =[
    'this',
    'which',
    'script',
    'com',
    'title',
    'great',
    'window',
    'meta',
    'based',
    'actionworfklow',
    'action',
    'with',
    'tool',
    'rich',
    'badge',
    'project',
    'based',
    'tag',
    'e012350f',
    'github',
    'font',
    'content',
    'wakatime',
    'style',
    'https',
    'http',
    'src',
    'of',
    'href',
    'gtag',
    'for',
    'google',
    'dataLayer',
    'with',
    'stylesheet',
    'from',
    'slave',
    'enabler',
    'enjoys',
    'that',
    'this',
    'effort',
    'crossorigin',
    'rel',
    'have',
    'izghdg',
    'been',
    'will',
    'thead',
    'config',
    'function',
    'table',
    'tbody',
    'border',
    'body',
    'your',
    'about',

]


const wordsarra2UniqueFiltered = wordsarra2Unique.filter((word) => {
    return !wordAvoid.includes(word);
}   );


const freqMapWor = wordsarra2UniqueFiltered.map((word) => {
    return {
        word,
        freq: headMatched[1].split(word).length,
    };
}

);

const topTenWords = freqMapWor.sort((a, b) => b.freq - a.freq).slice(0, 16);
console.log(topTenWords);
const headMatchedModded = headMatched[1] + ` <meta property="og:image" content="https://blog.zi-ping.com/wp-content/uploads/2023/10/love-blue.png">
<meta property="article:author" content="https://zi-ping.com/resume">
<meta name="author" content="Liu, Zi-ping">
<meta name="description" content="Testing the React Component over Time as the Continuous Form of Avaiability Monitoring Concerning the React Adobe Embed custom react component library Due to possible failiures caused by external API changes ( Adobe Embed API is complicated and changes without notice often) Due to possible failures caused by code changes to the React Component that are unable to be caught through unit tests">
<meta property="article:published_time" content="2023-10-13T04:22:32-05:00">
<meta property="article:modified_time" content="${modifiedDate}">
<meta property="og:updated_time" content="${modifiedDate}">
<meta property="og:title" content="${matchedTitle[1]}">
<meta property="og:image" content="https://blog.zi-ping.com/wp-content/uploads/2023/10/love-blue.png">
<meta name="image" content="https://blog.zi-ping.com/wp-content/uploads/2023/10/love-blue.png">
<meta property="og:type" content="article">
<link rel="canonical" href="https://ziping-liu-corporation.github.io/react-adobe-embed/">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<meta property="og:url" content="https://blog.zi-ping.com/resume/">
<script type="application/ld+json" class="ziping-liu-proprietary-technologies-scheme-graphical-json-datas-patent-pending">
{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "author": {
          "name": "Ziping Liu",
          "email": "liu@blog.zi-ping.com",
          "url": "https://zi-ping.com/resume",
          "@id": "https://zi-ping.com/resume"
        },
        "headline": "${matchedTitle[1]}",
        "datePublished":  "2023-10-27T00:00:00+00:00",
        "dateModified" : "${modifiedDate}",
        }",
        "mainEntityOfPage": {
          "@id": "https://ziping-liu-corporation.github.io/react-adobe-embed/"
        },
        "wordCount": ${wordsarra.length},
        "publisher": { "@id": "https://privacy.zi-ping.com" },
        "image": {
          "@id": "https://blog.zi-ping.com/wp-content/uploads/2023/10/love-blue.png"
  
        },
        "thumbnailUrl": "https://blog.zi-ping.com/wp-content/uploads/2023/10/love-blue.png",
        "articleSection":  [],
        "inLanguage": "en-US",
          "potentialAction": [
              {
              "@type": "ReadAction",
              "target": "https://ziping-liu-corporation.github.io/react-adobe-embed/#/test"
              }
          ],
          "description": "Testing the React Component over Time as the Continuous Form of Avaiability Monitoring Concerning the React Adobe Embed custom react component library Due to possible failiures caused by external API changes ( Adobe Embed API is complicated and changes without notice often) Due to possible failures caused by code changes to the React Component that are unable to be caught through unit tests",
          "keywords": [ ${topTenWords.map((word) => `"${word.word}"`).join(', ')} ],
          "commentCount": 0    }
    ]
  }
  </script>	

`;
const htmlNew = publicIndexhtml.replace( headMatched[1], headMatchedModded);
const htmlMiny = minify(htmlNew, {
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeTagWhitespace: true,
    preserveLineBreaks: false,
    minifyJS: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeTagWhitespace: true,
    useShortDoctype: true,
});
if(process && process?.env){
  process.env.DATEMODIFIED_CODE_DEPLOYED = modifiedDate;
} 
const env_filestring = `DATEMODIFIED_CODE_DEPLOYED=${modifiedDate}`;
fs.writeFileSync(path.resolve(__dirname, '../.env'), env_filestring, 'utf8'); fs.writeFileSync(path.resolve(__dirname, '../.env'), env_filestring, 'utf8');
fs.writeFileSync(path.resolve(__dirname, '../build/index.html'), htmlMiny, 'utf8');