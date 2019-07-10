// Load Data
var friendsArray = require('../data/friends');

// Routes
module.exports = function (app) {
  // api GET route that displays JSON of all possible friends
  app.get('/api/friends', function (req, res) {
    res.json(friendsArray);
  });

  // api POST route to handle incoming survey results when a user submits the form
  app.post('/api/friends', function (req, res) {
    // Grab new friend's scores to compare with friends in friendsArray
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;

    // Run through all current friends in list
    for (var i = 0; i < friendsArray.length; i++) {
      var scoresDiff = 0;
      // Run through scores to compare friends
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // Push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    // After all friends are compared, find best match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    // Return bestMatch data
    var bff = friendsArray[bestMatch];
    res.json(bff);

    // Push new submission into the friendsList array
    friendsArray.push(req.body);
  });
};