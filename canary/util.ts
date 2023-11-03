export function getClientId(){
    const hostname = window.location.hostname;
    switch(hostname){
        case 'localhost':
            return '324caa2a91b84f688935436cd2d25217';
        case 'ziping.dev':
            return '2aeb65914ea244cd85c16b60ca3b688d';
        case 'ziping.life':
            return '2daf6038d0f1447fb9dd17988e93b5b8';
        case 'ziping.org':
            return '312487a25a5b4c0d845f6d93e8103c32';
        case 'awsuni.com':
            return '50d3f2b88101430f8da3006527dcdf78';
        case 'twitterliu.com':
            return 'ac52e99ebc8242e9bf85ecb55444f726';
        case 'one.ziping.org':
            return '2e5605e61e5b4306829b619d6fad2dc4';
        case 'zipingl.github.io':
            return '9c16d364507948289a9f65f9ab9da8bf';
        case 'ziping-liu-corporation.github.io':
            return '875691e089ad4bf6bc4c5cea79403542';
        default:
            return '324caa2a91b84f688935436cd2d25217';
    }
}