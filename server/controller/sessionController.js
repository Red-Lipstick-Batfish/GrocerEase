const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  // cookie in req.cookie
  const cookie = req.cookie;
  try {
    const response = await Session.find({ cookieId: `${cookie}` });
    if (response) {
      return next();
    } else {
      return next({
        log: 'Express error handler caught startSession middleware error',
        status: 400,
        message: 'Bad request: failed to start session',
      });
    }
  } catch (error) {
    return next({
      log: 'Express error handler caught startSession middleware error',
      status: 400,
      message: 'Bad request: failed to start session',
    });
  }
};

sessionController.startSession = async (req, res, next) => {
  const { id } = res.locals.user;
  try {
    const session = await new Session({
      cookieId: `${id}`,
    });
    console.log('session: ', session);
    session.save();
    return next();
  } catch (error) {
    return next({
      log: 'Express error handler caught startSession middleware error',
      status: 500,
      message: 'Bad request: failed to start session',
    });
  }
};

module.exports = sessionController;
