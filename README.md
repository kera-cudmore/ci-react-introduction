# ![Introduction to React Banner](documentation/banner.png)

This repository is a place for me to store my notes and thoughts on the introduction to React bonus content provided by the Code Institute.

Official documentation for Reactjs: [reactjs.org](https://reactjs.org/)

* [Lesson 1](#lesson-1---an-introduction-to-the-example-project)
* [Lesson 2](#lesson-2---introduction-to-jsx)

---

## Lesson 1 - An Introduction to the Example Project

### What is Reactjs?

Reactjs is an open source JavaScript library developed & maintained by Facebook. Reactjs is used for building fast and interactive user interfaces. At its core, React applications are composed of components, which are small JavaScript files written in JSX (a special JavaScript syntax).

Each of the components works like its own little web application and are able to perform many tasks, such as make HTTP requests, communicate with servers and APIs, communicate
with one another, and update themselves in response to user interactions. Multiple components are used together to create a user interface, where each component makes up a small part of the UI, like a navigation menu, an individual tweet or post, a button, or a form. Individual components are completely independent of one another, so individual parts of the user interface can update independently and in real time, without refreshing the page. Components are also reusable, which means you only have to write the code once, and it can then be reused over and over throughout your application, or even reused in a completely different application.

All these features make React scalable, easy to maintain and incredibly flexible. As a front end library, the React philosophy is to do one thing, and do it really well. React is responsible for the way the application looks and feels. By coupling it with a full stack framework like Django, or a back end server environment like NodeJS, you can build powerful full stack applications with interactive, asynchronous front ends capable of being completely disconnected and independent from the back end.

### How to run the app locally

The entire project is contained within the **react-example** folder.

1. Change directory into the folder using the cd command: `cd react-example`
2. Start the app with the command: `npm start`
3. This will open the app in a new browser window for you to view.

### What do the files do?

* package.json

    Think of this as the configuration file for your React app. It is a JavaScript object that contains a number of properties that define the configuration of the app. Our example contains a name, and version number for the app and also contains a list of dependencies required for the app to run. It also includes some pre-made scripts which are used to start, stop and test the app, to name just a few. This file is highly configurable and it can be created automatically using software, or you can create it yourself.

* public/index.html

     This is the file that is served when the app is visited. The key piece of code in this file is the div with an id of root, as this is where all your react components will be rendered at runtime in order to create the user interface.

     There is a noscript tag just above the div that renders the message: *You need to enable JavaScript to run this app* which is shown if the users browser doesn't support JavaScript.

* src/app.js

    App.js is the react component that renders the content you see in the preview window. In this case, App.js defines a function called App and this is the actual React component. The function returns a strange looking combination of HTML and JavaScript, a language called JSX. At the bottom, the function is exported, allowing it to be imported into other files in the project, so that it can be reused as needed.

* src/index.js

    Index.js is the JavaScript file that gets run when you first load the app. Inside it is where the magic happens. First there are some imports including React, ReactDom, some CSS, and the app component from app.js. Then, ReactDom.render is called in order to render the App component in that root div with the ID of “root” in index.html.

* src/app.css

    Contains the CSS for the app.js component.

* src/index.css

    This contains the CSS for the index.html page.

NOTE: It would generally be fine to place the CSS in the one file - however React developers prefer to separate out the component CSS so that if a component is reused, the CSS also goes with it.

### The Application Flow

When someone navigates to your page, the empty index.html page is rendered containing the shell of the application - the basic HTML structure and the empty root div. Then, index.js is run, which imports React and React Dom as well as the App component, and renders the app component into the root div. The app component itself is where the actual HTML you see in the preview window is defined, and it can be modified or reused as required. Most React apps have lots of small components like App.js, and each component renders a specific part of the UI. Together, they make up the entire user interface and can provide all sorts of interactivity.

So, to review, Index.html contains basic page structure and the empty root div, the root div ends up with the App component rendered into it, and that is done when index.js is run. This is the basic flow of any React application. The configuration for all these files and how they work together is managed with package.json. Everything else you see here is secondary to understanding how a React application works.

---

## Lesson 2 - Introduction to JSX
