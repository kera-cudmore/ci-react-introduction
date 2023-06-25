import React from "react";

class EventBinding extends React.Component {

  constructor(props) {

    super(props);
    this.state ={
      introduction: "Hello!", 
      buttonText: "Exit",
    };
    // BINDING METHOD 3 - Binding in the constructor
    this.handleClick = this.handleClick.bind(this)

  }

  // examples 1-3
  // handleClick() {
  //   this.setState({
  //     introduction: "Goodbye!",
  //     buttonText: "Enter",
  //   });
  //   console.log(this.state.introduction);
  // }


  //example 4
  handleClick =() => {
    this.setState({
      introduction: "Goodbye!",
      buttonText: "Enter",
    });
    console.log(this.state.introduction);
  }

  render() {
    return(
      <div>
        <h1>{this.state.introduction} {this.state.greeting}</h1>
        
        {/* BINDING METHOD 1 - arrow function */}
        {/* <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}

        {/* BINDING METHOD 2 - call the bind method on the handler & pass in this */}
        {/* <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button> */}
      
      {/* BINDING METHOD 3 - Binding in the constructor */}  
      {/* <button onClick={this.handleClick}>{this.state.buttonText}</button> */}


        {/* BINDING METHOD 4 -  */}
        <button onClick={this.handleClick}>{this.state.buttonText}</button>
      
      
      
      </div>
    ) 
  }









}

export default EventBinding;