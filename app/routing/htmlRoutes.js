// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require("path");
const express = require("express");
const app = express();
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = (app) =>{
  // HTML GET Requests
  app.get("/player", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/playerSurvey.html"));
  });

  app.get("/band", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/bandSurvey.html"));
  });

  // If no matching route is found default to index
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
	});
};
