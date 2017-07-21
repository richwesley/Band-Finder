const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Setting up Express App
const app = express();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Static content
app.use(express.static("app/public"));

//Routers
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server and listen
app.listen(PORT, function() {
  console.log("App successfully listening on PORT " + PORT);
});

