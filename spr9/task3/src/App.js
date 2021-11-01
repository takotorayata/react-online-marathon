//The tasks of the topics "State" and "Events"
//There is the component App

//Write code to provide:

//Using the property appData of state the component App renders one element div with text React Marathon in it

//If you click mouse on this div element the component App will convert the value of property appData to lowercase

import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appData : "React Marathon"}
  }
  changeText = () => {
    this.setState((state) => {
      return {appData: state.appData.toLowerCase()}
    })
  }
  render() {
    return <div onClick={this.changeText}> {this.state.appData} </div>    
  }
}


//  why this variant doesn't work?
// import React from "react";
// import "./App.css";

// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {appData : "React Marathon"}
//   }
//  let text = this.state.appData;
//   changeText () {
//     this.setState({
//       appData: text.toLowerCase()
//     })
//   }
//   render() {
//     return <div onClick={() => this.changeText}> {text} </div>    
//   }
// }
