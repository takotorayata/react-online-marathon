import React from "react";
import "./App.css";
let words = [
    {id: "animals1", text: "Animals"},
    {id: "anime2", text: "Anime"},
    {id: "antim3", text: "Anti-Malware"},
    {id: "artd4", text: "Art Design"}, 
    {id: "books5", text: "Books"},
    {id: "business6", text: "Business"},
    {id: "calend7", text: "Calendar"},
    {id: "cloudst8", text: "Cloud Storage"},
    {id: "filesh9", text: "File Sharing"},
    {id: "animals10", text: "Animals"},
    {id: "contintegr11", text: "Continuous Integration"},
    {id: "cryprocurr12", text: "Cryptocurrency"}
  ];

export default function App() {
  return (
    <div>
      Some List:
       <ul>{words.map(word => (<li key={word.id}>{word.text}</li>))}</ul>
    </div>
  );
}
