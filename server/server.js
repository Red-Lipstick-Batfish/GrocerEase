const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userController = require('./controller/userController');
const cookieController = require('./controller/cookieController');
const sessionController = require('./controller/sessionController');
const apiController = require('./controller/apiController');
const { env } = require('process');

const app = express();
const PORT = 3000;

const MONGO_URI = env.MONGO_URI;

mongoose
  .connect(
    env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'GrocerEase',
    }
  )
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser());

app.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('successful signup. redirecting to homepage');
    // redirects to homepage when they sucessfully create an account
    return res.sendStatus(200);
  }
);

app.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setSSIDCookie,
  (req, res) => {
    console.log('login successful. redirecting to homepage');
    return res.sendStatus(200);
  }
);

// cookieController.setCookie,
// serves index.html to frontend
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/api', apiController.getData, (req, res) => {
  res.status(200).json(res.locals);
});

// app.use('*', (req,res) => {
//   res.status(404).send('Not Found');
// });

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
