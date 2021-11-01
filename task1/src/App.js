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

// The tasks of the topic "Keys"
// There is the component App

// Write code to provide:

// Display in the component App the next list:
// Animals
// Anime
// Anti-Malware
// Art Design
// Books
// Business
// Calendar
// Cloud Storage
// File Sharing
// Animals
// Continuous Integration
// Cryptocurrency

// Use the element li to represent an item in a list
// Provide some unique keys to render this list, but don't use the index of an item as its key
