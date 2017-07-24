// ===============================================================================
// LOAD DATA
// ===============================================================================

var playerData = require("../data/playerData");
var bandData = require("../data/bandData");
var surveyData = require("../data/surveyData");
//console.log(playerData);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app)=> {
  // API GET Requests
  app.get("/api/players", (req, res) => {
    res.json(playerData);
  });

  app.get("/api/bands", (req, res) => {
    res.json(bandData);
  });

  app.get("/api/survey", (req, res) => {
    res.json(surveyData);
  
  });

    app.post("/api/survey", (req, res) => {
      surveyData.push(req.body);
      
  });

    
}

