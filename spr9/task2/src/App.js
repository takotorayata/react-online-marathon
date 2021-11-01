// There are two components - App and its children component First

// Write code to provide:

// Using the props the component App passes into the component First the list converted into lowercase:
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
// The component First renders the first (is at index 0) element of the array received in props.
// Example

import React from "react";
import "./App.css";
import First from "./First";

export default function App() {
  const list = ["Animals", "Anime", "Anti-Malware", "Art Design", "Books", "Business", "Calendar", "Cloud Storage", 
                "File Sharing", "Animals", "Continuous Integration", "Cryptocurrency"];
  return (
    <div>
      Some data:
        <First props={list.map(el => el.toLowerCase())}/>
    </div>
  );
}
