# Glug Farewell

[![Run on Repl.it](https://repl.it/badge/github/romitkarmakar/next-material-template)](https://repl.it/github/romitkarmakar/farewell)

## Installation

- Create the firebase config file: ```lib/firebaseconfig.ts``` with the following contents:
```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  appId: "...",
};

export default firebaseConfig;
```
Replace the ```...``` with the firebase project config values.

- Install all the node packages
```bash
yarn
```
- Start the development server
```bash
yarn dev
```