// Require needen npm packages to bring into scope of server.js
const express = require('express');
const bodyParser = require('body-parser');

// Return an instance of an Express application.
const app = express();
// Set our PORT
const PORT = process.env.PORT || 8060;

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// access static files
var publicDir = require('path').join(__dirname,'/app/public');
app.use(express.static(publicDir));

// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start the server when running 'node server.js'
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

