import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

  constructor(props) {

    super(props);
    this.state ={
      introduction: "Hello!", 
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
      buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",

    }, () => {
      console.log("New State:", this.state.introduction);
      console.log("New State:",this.state.buttonText);
    });
    
  }

  increment() {
    this.setState({
      count: this.state.count +1,
    })
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return(
      <div>
        <h1>{this.state.introduction} {this.state.greeting}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.incrementFive()}>{this.state.count}</button>
      </div>
    ) 
  }
}

export default StatefulGreetingWithPrevState;