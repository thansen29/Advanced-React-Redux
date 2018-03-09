const Authentication = require('./controllers/authentication');

// adding route handlers
module.exports = function(app) {
  app.post('/signup', Authentication.signup);


};
