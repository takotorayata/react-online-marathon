import React from "react";

const ListItem = ({ id, name, note }) => (
  <li>
    <p>
      id - {id}name - {name}note - {note}
    </p>
  </li>
);

export default ListItem;
