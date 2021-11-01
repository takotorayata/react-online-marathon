//Task1
//Create component in ./app/Task1/index.js. It should send request to backend using Fetch API and then render "block#1" with result (Look at ./server/index.js! You can find some list to use in the task). Component should show "block#2" while waiting response.

//Examples "block#1" and "block#2" at /screenshots

//Install dependencies yarn install

//Run webpack yarn watch

//Run server yarn server

//not my code  //in retrospective it's a good code

import React, { Component } from "react";
import Loading from "./components/Loading";
import ListItem from "./components/ListItem";

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("//localhost:3000/list")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list: [...data],
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, list } = this.state;
    return (
      <>
        <div>{isLoading ? <Loading /> : null}</div>
        <ul>
          {list !== null &&
            list.map((item) => {
              if (item.id !== 44) {
                return (
                  <ListItem
                    key={item.id}
                    name={item.name}
                    note={item.note}
                    id={item.id}
                  />
                );
              }
            })}
        </ul>
      </>
    );
  }
}
