const Session = require('../models/sessionModel');
const cookieController = {};

//set cookie
cookieController.setCookie = (req, res, next) => {
  const { id } = res.locals.user;
  // creates a cookie based on the user's id
  res.cookie('user', `session_for_${id}`);
  res.cookie('secret', `${Math.floor(Math.random() * 100)}`);
  return next();
};

// sets a cookie for the ssid
cookieController.setSSIDCookie = async (req, res, next) => {
  const { id } = res.locals.user;
  // pull id from res.locals
  try {
    // looks to see if session exists
    const response = await Session.find({'cookieId': `${id}`});
    // if cannot find session
    if (!response) {
      return next({
        log: 'Express error handler caught setSSIDCookie middleware error',
        status: 403,
        message: 'Bad request: Bad session'
      });
    }
    // creates a cookie based on the ssid
    res.cookie('ssid', `${response.cookieId}`, {
      httpOnly: true
    });
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught setSSIDCookie middleware error',
      status: 403,
      message: 'Bad request: Bad session'
    });
  }
};

module.exports = cookieController;