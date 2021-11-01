import "./App.css";
import React, { useState } from "react";

export default function App() {
   const [text, changeText] = useState(" React Marathon ");

   return (
      <div onClick={() => changeText(text.toLowerCase())}>{text}</div>
   );
}

// There is the functional component App which renders one element div with text React Marathon in it

// Using hooks write code to provide next functionality: if you click mouse on this div element text in it will be converted to lowercase
