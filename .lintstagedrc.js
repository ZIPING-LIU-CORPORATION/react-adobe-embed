module.exports = {
    "src/**/*.{ts,tsx}": [ 
        "npm run lint",
    ],
    "canary/*.tsx": [
        "npm run lint"
    ]
};
