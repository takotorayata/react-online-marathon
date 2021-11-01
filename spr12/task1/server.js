//not my task 

const express = require('express');
const app = express();

const arg = require('yargs').argv;
let i  = arg.i;
let t  = arg.t;

app.get('/', async (req, res) => {
    await startInterval();
    await endInterval(res);
});

let interval;
const startInterval = async () => interval = setInterval(() => {
    console.log(new Date().toUTCString());
}, i);

const endInterval = async (respond) => setTimeout(() => {
    respond.send(new Date().toUTCString());
    clearInterval(interval);
}, t);

app.listen(3000, () => console.log('Running at 3000'));
console.log('Starting');

//Task
//Implement an http server (you can use ExpressJS) that initiates asynchronous operations when a GET request is made:

//Continuous output to the server console of the current date and time in UTC format at certain intervals.
//Stopping the console output sending time after a while and completing the server response with the return to the user of the current date and time of shutdown in UTC format.
//Acceptance criteria:
//When you connect to the server, the output to the console of the current time begins at regular intervals
//Stop output to the console after the specified time and return the current date and time to the user.
//The interval and time interval must be specified when starting the server using environment variables:
//$ node server.js -i [console output recurrence interval] -t [time after which the web client message will be displayed]

//Make a video presentation with a colleague with a solution (explanation of the solution)
