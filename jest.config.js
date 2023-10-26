module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    // testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],

    rootDir: './',
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
      ],
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
      "transform": {
        "^.+\\.tsx?$": "ts-jest"
      }
}