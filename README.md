# react-boilerplate

A basic react app for future projects and endeavors

* [react-boilerplate](#react-boilerplate)
  * [Getting started](#getting-started)
    * [Dependencies](#dependencies)
    * [Environment](#environment)
  * [Development](#development)
    * [Project directory](#project-directory)
    * [Babel](#babel)
  * [Testing](#testing)
  * [Deployment](#deployment)
    * [Staging](#staging)
  * [Miscellaneous](#miscellaneous)
    * [Technologies](#technologies)
    * [Documentation](#documentation)

## Getting started

### Dependencies

Follow the instructions in the links below to install the required dependencies on your local machine:

* [node.js](https://nodejs.org/en/download/)
* [npm](https://www.npmjs.com/get-npm)

### Environment

Fork this repository and clone the new one onto your local machine. In the root directory of the folder, run the following command:

```sh
$ npm i
```

This will install of the necessary dependencies for development. Next, you're going to want to set up a local instance of the project running in a server. To do so, run the following command:

```sh
$ npm run dev
```

You should now be able to visit [localhost](http://localhost:3000) in your browser and begin development!

_**Note:** if at any time you would like to cancel the running server instance, press `CTRL + C` in the open terminal window._

## Development

### Project directory

The layout for the repo is as follows:

```bash
react-boilerplate
  |== build                   # build directory
    |-- 200.html              # main file that React is injected into, entry point for servers
  |== components              # directory for all components
    |-- index.js              # components directory configuration for Babel
    |-- Root.js               # root component for entire app (contains Router)
    |-- ...
  |== pages                   # directory for all pages within app
    |-- index.js              # React injection file
    |-- ...
  |== redux                   # directory for all redux functions/objects
    |== actions               # directory for all redux actions
      |-- types.js            # all redux action types
      |-- home.js             # example redux action
      |-- ...
    |== reducers              # directory for all redux reducers
      |-- index.js            # base reducer used in redux store
      |-- home.js             # example redux reducer
      |-- ..
    |-- store.js              # redux store to be used with provider
  |== static                  # directory for static files
    |== img                   # directory for static images
  |== style                   # directory for styled-components
    |-- constants.js          # constants for styles
    |-- global.js             # globally injected stylesheet
    |-- index.js              # style directory configuration for Babel
    |-- H1.js                 # example style constant
    |-- ...
  |-- .babelrc                # Babel configuration
  |-- .estlintrc              # ES Lint configuration
  |-- .gitignore              # ignore file for git
  |-- .prettierrc             # Prettier configuration
  |-- package.json            # configuration for dependencies and project
  |-- README.md               # documentation on development and deployment (this file)
  |-- webpack.dev.js          # dev webpack config for project
  |-- webpack.prod.js         # prod webpack config for project
```

### Babel

It's important to note that both the `components` and `style` directory contain an `index.js` file used for Babel configuration. In these files, you should import and export all components and style elements, respectively:

```javascript
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

export { Component1, Component2, Component3 };
```

By doing the above, we can reference just the directory in our import statements. This stops us from having to use relative import statements and enables us to import multiple objects at the same time:

```javascript
import React from 'react';
import { Component1, Component3 } from 'components';
```

Other directories and files with global import include `actions`, `reducers`, `store`, and `pages`.

## Testing

🚧 _This section is currently under development._ 🚧

## Deployment

### Staging

This project uses Surge as a way to stage the site before entering production. To begin, run the following command:

```sh
$ npm i -g surge
```

Once installed, open your `package.json` file and update the `{APP_NAME}` of the staging site you want to use:

```javascript
{
  ...
  "scripts": {
    ...
    "stage": "npm run build && surge build {APP_NAME}-stage.surge.sh" // change {APP_NAME} to the name of your app
  }
}
```

At this point, you can run the command:

```sh
npm run stage
```

If this is your first time running Surge on your local, you will need to either create an account or log in with an existing account.

Once you enter the credentials, visit the URL for the staging site in your browser and view your project!

## Miscellaneous

### Technologies

The following technologies and libraries are being used in this boilerplate:

* [React](https://reactjs.org/) - JavaScript front-end framework for building user interfaces
* [React Router](https://reacttraining.com/react-router/) - declaritive routing for React
* [Redux](https://redux.js.org/) - predictable state container
* [styled-components](https://www.styled-components.com/) - CSS-in-JS library for building React components
* [webpack](https://webpack.js.org/) - module builder

New technologies will be added at need.

### Documentation

The following is a compilation of available documentation for learning about the technologies and processes listed in sections above:

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
* [React](https://reactjs.org/tutorial/tutorial.html)
* [React Router](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux](https://redux.js.org/basics)
* [styled-components](https://www.styled-components.com/docs)
* [webpack](https://webpack.js.org/concepts/)
