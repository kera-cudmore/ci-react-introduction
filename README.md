# ![Introduction to React Banner](documentation/banner.png)

This repository is a place for me to store my notes and thoughts on the introduction to React bonus content provided by the Code Institute.

Official documentation for Reactjs: [reactjs.org](https://reactjs.org/)

* [Lesson 1](#lesson-1---an-introduction-to-the-example-project)
* [Lesson 2](#lesson-2---introduction-to-jsx)
* [Lesson 3](#lesson-3---creating-your-first-react-app)
* [Lesson 4](#lesson-4---react-developer-tools)

---

## Lesson 1 - An Introduction to the Example Project

This lesson uses the **react-example** folder.

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

This lesson uses the **jsx-example** folder.

JSX is an extension to the JavaScript language which allows us to simplify our React code. Support for JSX is built into React which means we can use it without any special conditions. A good way to think about JSX elements is that they are custom HTML tags which can have any name you want.

Both the App component and the index.js file use JSX syntax. Like regular XML or HTML elements, JSX Elements can have attributes like classes, ID's and names, and can have parents, children and siblings. Although JSX is not necessary to write React applications, in reality React developers use it because it's simpler, more elegant and easier to read and maintain. When your app is run, the JSX code gets transpiled (converted) to vanilla JavaScript which the browser can understand.

To see what a React component looks like without using JSX, take a look at: [app component](jsx-example/src/App.js). This renders a simple HTML structure of a div with a couple of children. In the example, instead of returning JSX code, the App component returns a call to `React.createElement`. The `React.createElement` function takes three parameters:

* The element to create (in the example, a div)
* An object of properties to apply to that element, such as class names and IDs
* An arbitrary number of children elements

In this example, the div has one child, a `<header>` element - which has a child itself, an `<h1>`, and that `<h1>` itself has a child text node containing the text. The div and the header have one class each, specified by the `className property`, and the `<h1>` element has no attributes so that parameter is set to `null`. This component renders the same result in the preview window as the JSX component, which is commented out above it.

However without JSX, something as simple as creating the grid for your page layout or creating a form becomes incredibly complex, since every single element would require a call to `react.createElement()`. Creating a real-world react website without JSX would be prohibitively complicated. JSX simplifies the syntax for calling `react.createElement` . By using JSX, you can write your code so it looks mostly the same as standard HTML, but with the added benefit of being able to inject and use JavaScript wherever you need to do something HTML can't handle.

As React is writen in JavaScript files, and some words are reserved in JavaScript - we will sometimes need to use different terminology than we would in HTML. For example, we would need to use the property className rather than class to define a class. This is then transpiled down to class in the HTML displayed in the browser (You can check this by inspecting the page with dev tools). Other examples include for, which becomes htmlFor, and onclick and tabindex, which are replaced with their camelCased versions onClick and tabIndex.

Custom JSX elements and the React components they represent must also be capitalized (like App). This allows the transpiler that converts the JSX to vanilla JavaScript to tell the difference between the custom JSX elements and standard HTML elements. All components should be capitalized when defining them and when referring to them in JSX code.

**Further Reading:** [React Docs - JSX in-depth](https://reactjs.org/docs/jsx-in-depth.html)

---

## Lesson 3 - Creating your first React App

In order to create our React app we need to couple it with [nodejs](https://nodejs.org/en/docs/). nodejs is an opensource JavaScript runtime and allows us to run our development server while we write React code and takes care of converting our React code to vanilla JavaScript to enable it to run in the browser. It allows us to use the Node Package Manage (NPM) to install packages and extensions for our React apps. We have already used one of these NPM commands in the first lesson: `npm start`. Node Package Manager is a tool that is distributed with nodejs to allow us to install and uninstall packages, run development servers and create and destroy React applications. It also allows us to use npx, which executes node packages.

### Using GitPod

1. Create a GitHub repository for your app.
2. Use the green GitPod button on the repository page to open a GitPod workspace.
3. As node is pre-installed in GitPod, we can use the command `npx create-react-app my-app-name-here --use-npm` to create the React application.

    * The `create-react-app` tool is great as it gives us all the boilerplate code we need to start a React app. Many developers use this to get their apps running, and will then delete anything they don't need and make adjustments where necessary.

    * We have used the `--use-npm` flag to ensure that we are using npm because we are creating the app in GitPod, which would by default use a different package manager called yarn.

4. This can take several minutes to complete, but when done you will be able to see that npx has created a new React app in the my-app-name-here folder. Inside this folder will be a node_modules folder, which is where everything npm installs will be stored and is where the React app will look for any packages it needs.
5. To run the app, first `cd` into the app and then run the command `npm start`. Now we have a React app ready for us to start creating our components.

### Using VsCode

Steps to be added at a later date.

---

## Lesson 4 - React Developer Tools
