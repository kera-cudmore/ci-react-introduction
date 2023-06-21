import React from "react";

const FunctionalGreetingWithProps = (props) => {
console.log(props);
return <h1>Hello, {props.name}. {props.greeting} You are {props.age} years old.</h1>;
}

export default FunctionalGreetingWithProps;