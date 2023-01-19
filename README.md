# ![Introduction to React Banner](documentation/banner.png)

This repository is a place for me to store my notes and thoughts on the introduction to React bonus content provided by the Code Institute.

Official documentation for Reactjs: [reactjs.org](https://reactjs.org/)

* [Lesson 1](#lesson-1---an-introduction-to-the-example-project)
* [Lesson 2](#lesson-2---introduction-to-jsx)

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

Both the App component and the index.js file use JSX syntax. Like regular XML or HTML elements, JSX Elements can have attributes like classes, ID's and names, and can have parents, children and siblings. Although JSX is not necessary to write React applications, in reality React developers use it almost universally because it's simpler, more elegant and easier to read and maintain. When your app is run, the JSX code gets transpiled (converted) to vanilla JavaScript which the browser can understand.

If you want to see what a React component looks like without using JSX, just take a look at the [app component](jsx-example/src/App.js) used to render a simple HTML structure like a div with a couple children. In this example, instead of returning JSX code, the App component returns a call to React.createElement. The React.createElement function takes three parameters: the element to create, in this case a div, an object of properties to apply to that element, such as class names and IDs, and an arbitrary number of children elements. In this case, the div has one child, a `<header>` element, which has a child itself, an `<h1>`, and that `<h1>` itself has a child text node containing the text. The div and the header have one class each, specified by the className property, and the `<h1>` element has no attributes so that parameter is set to null. In the end, it renders the same result in the preview window as the JSX which is commented out above, but imagine what this might look like if you had a div with 50 nested elements, and each of them had children of their own with classes, IDs and all the other stuff that a typical HTML page has. Without JSX, something as simple as creating the grid for your page layout or creating a form becomes incredibly complex, since every single element requires this call to react.createElement(). Creating a real-world react website without JSX would be prohibitively complicated. JSX is simply syntactic sugar, which means that it simplifies the syntax for calling react.createElement. By using JSX, you can write your code so it looks mostly the same as standard HTML, but with the added benefit of being able to inject and use JavaScript wherever you need to do something HTML can't handle.

Now, you might notice that both with JSX and without it, I'm using the property className to define a class for the app div. This is because class is a reserved word in JavaScript, and we're writing the code in a JavaScript file, so we can't use it. Instead, when writing JSX code you must use the property className. If you inspect the page and look at the resulting HTML, you'll see that className gets transpiled down to class in the end. On that note, let's talk about some of the differences you'll see in JSX code as we work through the rest of these videos. First, as mentioned just now, class is always replaced with className. Additionally because for is a reserved word used for looping in JavaScript, if you want to specify a for attribute on a label in a form, you must use htmlFor. You'll also notice some other standard HTML properties and attributes being replaced with slight variations. For example, onclick and tabindex will be replaced with the camelCased versions,and you'll see some new attributes such as defaultValue when working with forms.

It's important to remember that all custom JSX elements as well as the React components they represent, must be capitalized like App is here. This is so the transpiler that converts the JSX to vanilla JavaScript can tell the difference between your custom JSX elements and standard HTML elements. All components should be capitalized both when defining them and when referring to them in JSX code. There are plenty of warnings and errors built into React that will let you know if you've forgotten one of these rules.

In summary, remember first that React developers almost universally use JSX when writing React components because it greatly simplifies the code. Second, in JSX, you need to replace certain attributes such as class with className and for with htmlFor. Third, custom JSX elements represent react components and must be capitalized both in their file names and in their use in the code, so the transpiler can differentiate them from regular HTML.

**Further Reading:** [React Docs - JSX in-depth](https://reactjs.org/docs/jsx-in-depth.html)

---

## Lesson 3 -
