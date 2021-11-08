// Save object { name: "Tom", age: 25 } to localStorage with key: "user"

const localStorage = require("./localStorage.js");
let obj = {name: "Tom", age: 25};
localStorage.setItem("user",  JSON.stringify(obj));

//localStorage.setItem("user",  JSON.stringify({name: "Tom", age: 25}));
