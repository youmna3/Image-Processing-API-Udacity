## Content
* Project Name
* descriptions
* Instructions
* scripts

## Project Name
Image Processing Api

## Description
A simple Api is created to access images and resize it using sharp

## Instructions
* npm install
* npm run start 
* path example: http://localhost:5000/images?name=fjord&width=100&height=200

## scripts
* "dev": "nodemon --config nodemon.json src/index.ts",
* "start": "npm run build && node dist/index.js",
* "build": "npx tsc",
* "prettier": " prettier --write src/**/*.index.ts ",
* "lint": "eslint src/**/*.ts",
* "lint:fix": "eslint src/**/*.ts --fix",
* "test": "npx tsc && jasmine"


