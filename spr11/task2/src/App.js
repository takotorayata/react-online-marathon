//There is the functional component App which renders one element div with text React Marathon in it

//Using hooks write code to provide next functionality: on page load, the component App fetches from localStorage a value of key appData and puts it in the input

import './App.css';
import { useState, useEffect } from 'react';
export default function App() {  
  const [appData, setValue] = useState("");

  useEffect(() => {
    if(!localStorage.getItem('appData')) {
      localStorage.setItem('appData', appData)
    }
  }, []);
  useEffect(() => setValue(localStorage.getItem('appData')), []);

  return (
    <div>
      React Marathon, appData: <input size='5' defaultValue={appData}></input>
    </div>
  );
}
