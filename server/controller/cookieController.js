const cookieController = {};

//set cookie
cookieController.setCookie = (req, res, next) => {
  // cookie: name, value
  res.cookie('username', `session_for_${res.locals.user}`);
  res.cookie('secret', `${Math.floor(Math.random() * 100)}`);
  return next();
};

// sets a cookie for the ssid
cookieController.setSSIDCookie = (req, res, next) => {
  if (!res.locals.id) return next();
  res.cookie('ssid', `${res.locals.id}`, {
    httpOnly: true
  });
};

module.exports = cookieController;