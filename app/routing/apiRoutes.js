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
    var differenceScoresArray = [];
    var bestMatch = 0;

    // Loop through all current friends in the friends array
    for (var i = 0; i < friendsArray.length; i++) {
      var scoresDiff = 0;
      // Loop through the NEW friend's scores array
      for (var j = 0; j < newFriendScores.length; j++) {
        // For each friend looped through, compare each seperate value of their scores array
        // with each seperate value in the new friend's score array and return each difference
        // Add all of the differences returned into a single value
        scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // Push each friend's total score difference number value into a single array
      differenceScoresArray.push(scoresDiff);
    }

    // Loop through the differences array
    for (var i = 0; i < differenceScoresArray.length; i++) {
      if (differenceScoresArray[i] <= differenceScoresArray[bestMatch]) {
        // Assign the index of the lowest number in the array to 'bestMatch' variable
        bestMatch = i;
      }
    }

    // Return the friend with the best match by returning the index of the friend who had the lowest number of differences in scores
    var bff = friendsArray[bestMatch];
    res.json(bff);

    // Push new submission into the friendsList array
    friendsArray.push(req.body);
  });
};