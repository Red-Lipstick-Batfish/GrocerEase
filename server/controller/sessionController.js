const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  // cookie in req.cookie
  const cookie = req.cookie;
  try {
    const response = await Session.find({'cookieId': `${cookie}`});

  } catch (error) {
    return next({
      log: 'Express error handler caught startSession middleware error',
      status: 400,
      message: 'Bad request: failed to start session'
    });
  }
};

sessionController.startSession = async (req, res, next) => {
  try {
    const session = await new Session({
      'cookieId': `${res.locals.id}`
    });
    res.locals.session = session;
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught startSession middleware error',
      status: 400,
      message: 'Bad request: failed to start session'
    });
  }
};

module.exports = sessionController;