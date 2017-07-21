// ===============================================================================
// LOAD DATA
// ===============================================================================

var playerData = require("../data/playerData");
var bandData = require("../data/bandData");
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

  // API POST Requests
  app.post("/api/players", (req, res) => {
      playerData.push(req.body);
      res.json(true);
    })

  app.post("/api/bands", (req, res) => {
      bandData.push(req.body);
      res.json(true);
    })    
} 
