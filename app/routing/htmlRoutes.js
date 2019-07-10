
//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  // GET route that displays the home page
  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

// GET route to display the survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // GET route catch-all route that leads to home.html
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};