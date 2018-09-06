const express = require("express");
const mongoose = require("mongoose");

//Initialize a variable 'app' to express
const app = express();

// DB Config: Require keyfile in config folder & mongo URI (Uniform Resource Identifier)
const db = require("./config/keys").mongoURI;

//Connect to MongoDB - done via mongoose
mongoose
  .connect(db)
  //.then is a promise
  .then(() => console.log("Success MongoDB Connected"))
  //.catch catches and console logs the error
  .catch(err => console.log(err));

//Simple test route to homepage with callback function. '/' goes to homepage
// ES6 arrow function () => instead of function() {}
//res.send instead of console.log. Takes in 2 params (request, responce)
app.get("/", (req, res) =>
  res.send("Hello from the server & sending to the hompage")
);

//Variable called port
// Deploying to Heroku const port =process.env.PORT
// To run locally 5000
const port = process.env.PORT || 5000;

//Passing in port we are listening to. Eg Variable (port)
//Callback - arrow function =>
//Backticks used for ES6 Template Literal (``) to add a variable inside with a a string
app.listen(port, () => console.log(`Server running on port ${port}`));
