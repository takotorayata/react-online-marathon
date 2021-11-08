//not my code

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
