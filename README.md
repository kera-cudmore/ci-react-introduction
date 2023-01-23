# ![Introduction to React Banner](documentation/banner.png)

This repository is a place for me to store my notes and thoughts on the introduction to React bonus content provided by the Code Institute.

Official documentation for Reactjs: [reactjs.org](https://reactjs.org/)

* [Lesson 1: An introduction to the example project](#lesson-1---an-introduction-to-the-example-project)
* [Lesson 2: Introduction to JSX](#lesson-2---introduction-to-jsx)
* [Lesson 3: Creating your first React App](#lesson-3---creating-your-first-react-app)
* [Lesson 4: React developer tools](#lesson-4---react-developer-tools)
* [Lesson 5: React components](#lesson-5---react-components)
* [Lesson 6: Functional components](#lesson-6---functional-components)

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

---

## Lesson 4 - React Developer Tools

Google Developer Tools can be very useful when working with React apps. There is also a Chrome extension called [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) that can be downloaded from the Chrome webstone, which alows us to to examine and tweak React apps we're building, rather than the HMTL it generates. Once installed it can be pinned to the Chrome toolbar which will allow us easy access.

The React developer tool is a great way to identify sites that are developed in React. The icon will highlighted as blue when viewing a site that uses React, and will be greyed out on ones that don't. If you inspect an element on a site using React, the components tab will automatically highlight the element you selected.

Note: When viewing the components on the web remember that you are viewing the optimised production build, which minifies and compresses all component names to keep the JavaScript as small as possible. In development mode, you will be able to see the real component names.

When viewing the components tab in developer tools you will be able to see the props (properties) on the right. This allows you while developing your own apps to see what properties your components currently have and how changes to the property affect the component.

Another useful tool is component highlighting which can be found by clicking on the settings and then choosing highlight updates when components render. Doing this will show you how active a large scale site (such as Twitter, Facebook or Instagram) is under the surface. Each time a component rerenders and receives a new property or state, it will be highlighted. Rerenders can be caused by many things, like a mouse moving over an element, scrolling the page, clicking a link etc. When a component rerenders, its is similar to a page refresh, but just for that component. When sites get larger, these component rerenders can start to slow the site down if they are not optimised and are rerendering needlessly, and so this is another useful way to utilise the React developer tools.

The React developer tools also have a Profiler tab which can be used to determine how long different components are taking to load and where optimisations could be possible.

---

## Lesson 5 - React Components

This lesson uses the **[react-components](react-components/)** folder.

A React application is a collection of components composed together to create a user interface. There are two main types of components: Stateless Functional Components & Stateful Class Components.

Inside the src/components folder are three components: FunctionalGreeting, HooksCounter and StatefulGreeting. Each of the components has been written in its own JavaScript file so that it can be reused as needed and is named using the PascalCase convention which allows React to be able to tell it apart from the standard HTML elements in the JSX.

The first file, [FunctionalGreeting](react-components/src/components/FunctionalGreeting.js), is a stateless functional component. It is a JavaScript function that returns the HTML shown in the preview window. As it is a function, it is also able to take parameters. The standard for this type of component is to take a parameter called *props* (this is short for properties). This prop parameter contains the properties which determine what the component should display (render). In this example, props contains a name which is rendered as part of the JSX. The actual name comes from the name attribute, which is specified wherever we include the component. By using this prop we can use this component to render a greeting for any name we wish. However it is important to know with stateless functional components, once they've rendered their props, the output will always remain the same.

The file [StatefulGreeting](react-components/src/components/StatefulGreeting.js) is an example of a stateful class component. While stateless functional components always remain the same once rendered, stateful class components are able to change. They do this by using the state, which is a JavaScript object that contains various properties.

The initial state (the one values the state has the first time the component renders) are defined in the *constructor method*. For the example file the initial state provides the component with a state property called *count* that is initialised to 0. State properties can be accessed within the component by accessing *this.state* and can be changed at will, which means a stateful component is able to change at any time by updating their state. There are many things that can update a state, but it is usually a user interaction - like the button in our example. When we click the button, the setCount method is called which increments the count by one, and then rerenders the component with the new state, containing the new count. If we refresh the window the count is set back to 0 as defined in its initial state in the constructor. Stateful components are also able to take props.

Which type of component is best to use? That will depend on their use case. It is generally preferred to use functional components as much as you can, and only to use class components when the component needs to have some sort of interactivity. Due to being less complex, functional components are good for static components that just need a few props to tell them what to render, and that won't change. However if you need to change the props or require any interactivity - stateful class components will suit your requirements better.

React hooks are a newer React feature that allow us to use some features of each component type interchangably - so a built in React function that you can add to a stateless functional component that will allow it to behave like a stateful component. An example of this is shown in [HooksCounter](react-components/src/components/HooksCounter.js) which has the same functionality of the stateful class component, StatefulGreeting. This is due to the use of the useState hook, which allows us to give the functional component a state property called count, create a method to update it called setCount, provide an initial value of 0 and then call the method when the button is clicked. It provides the same functionality of the stateful component, just with a lot less code. For this reason, hooks are being used increasingly more as a replacement of stateful class components, due to them accomplishing the same task with less code, and without having to use the *this* keyword or constructor.

However it is still important to know how a stateful class component works, to be able to truely understand how hooks work using states.

**Further Reading:** [React Functional Components vs Class Components](https://articles.wesionary.team/react-functional-components-vs-class-components-86a2d2821a22)

---

## Lesson 6 - Functional Components

**[Finished Source Code Repo](https://github.com/Code-Institute-Solutions/gitpod-react/tree/b73da3590fd4cb5101cf7c8470b63ee37f84840f/my-app/src)**

---
