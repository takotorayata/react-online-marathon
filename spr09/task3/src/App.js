
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
