# react-boilerplate
A basic react app for future projects and endeavors

- [react-boilerplate](#react-boilerplate)
  - [Getting started](#getting-started)
    - [Dependencies](#dependencies)
    - [Environment](#environment)
  - [Development](#development)
    - [Project directory](#project-directory)
    - [Babel](#babel)
    - [Prttier](#prettier)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Miscellaneous](#miscellaneous)
    - [Technologies](#technologies)
    - [Documentation](#documentation)

## Getting started

### Dependencies
Follow the instructions in the links below to install the required dependencies on your local machine:
- [Python 3](https://www.python.org/downloads/)
- [node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

### Environment
Fork this repository and clone the new one onto your local machine. In the root directory of the folder, run the following command:
```sh
$ npm install --save
```

This will install of the necessary dependencies for development. Next, you're going to want to set up a watcher for your files to autocompile on save. In a new terminal window, navigate to the same directory and run the following command:
```sh
$ npm run watch
```

Finally, in order to run the project locally on your machine for testing, run the following command in the first terminal window:
```sh
$ python3 -m http.server 8000
```

You should now be able to visit [localhost](http://localhost:8000) in your browser and begin development!

*__Note:__ if at any time you would like to cancel the running server or watcher instance, press `CTRL + C`.*

## Development

### Project directory
The layout for the docs are as follows:
```bash
react-boilerplate
  |== build                   # build directory (output from webpack, not included in repo)
    |-- main.js               # compiled React app in a script included in index.html file
  |== components              # directory for all components
    |-- index.js              # components directory configuration for Babel
    |-- Root.js               # root component for entire app (contains Router)
    |-- ...
  |== node_modules            # local storage of node modules (not included in repo)
  |== pages                   # directory for all pages within app
    |-- index.js              # React injection file
    |-- ..
  |== static                  # directory for static files
    |== img                   # directory for static images
  |== style                   # directory for styled-components
    |-- constants.js          # constants for styles
    |-- global.js             # globally injected stylesheet
    |-- index.js              # style directory configuration for Babel
    |-- H1.js                 # example style constant
    |-- ...
  |-- .babelrc                # Babel configuration
  |-- .prettierrc             # Prettier configuration
  |-- index.html              # main file that React is injected into
  |-- package.json            # configuration for dependencies and project
  |-- README.md               # documentation on development and deployment (this file)
  |-- webpack.config.js       # webpack config for project
```

### Babel
It's important to note that both the `components` and `style` directory contain an `index.js` file used for Babel configuration. In these files, you should import and export all components and style elements, respectively:
```javascript
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

export { Component1, Component2, Component3 }
```

By doing the above, we can reference just the directory in our import statements. This stops us from having to use relative import statements and enables us to import multiple objects at the same time:
```javascript
import React from 'react';
import { Component1, Component3 } from 'components';
```

The final directory that also has the ability for global import statements is `pages`. However, because the `index.js` file within this directory is being used for React injection, all components within this directory must be imported separately (see `components/Root.js`).

### Prettier
This project also includes a Prettier configuration. Prettier is an extension that beautifies and creates a uniform style guide for your code. This makes it easier to maintain code styles across multiple developers.

If you're using VS Code (which, c'mon, you should be), install the `Prettier - Code formatter` extension. Then, on your JS code open the command pallete (`⌘⇧P`) and select Format Document. 

*__Note:__ Please make sure to perform this action on all of modified or created files before pushing your commit.*

## Testing

🚧 *This section is currently under development.* 🚧

## Deployment

🚧 *This section is currently under development.* 🚧

## Miscellaneous

### Technologies

The following technologies and libraries are being used in the creation and maintenance of the Scout Database:

- [React](https://reactjs.org/) - JavaScript front-end framework for building user interfaces
- [React Router](https://reacttraining.com/react-router/) - declaritive routing for React
- [styled-components](https://www.styled-components.com/) - CSS-in-JS library for building React components
- [axios](https://www.npmjs.com/package/axios) - AJAX requests for React apps

New technologies will be added at need.

### Documentation

The following is a compilation of available documentation for learning about the technologies and processes listed in sections above:
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [React](https://reactjs.org/tutorial/tutorial.html)
- [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
- [styled-components](https://www.styled-components.com/docs)
- [axios](https://www.npmjs.com/package/axios)
