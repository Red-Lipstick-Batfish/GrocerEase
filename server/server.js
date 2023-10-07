const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userController = require('./controller/userController');
const cookieController = require('./controller/cookieController');
const sessionController = require('./controller/sessionController');

const app = express();
const PORT = 3000;

const MONGO_URI = 'mongodb+srv://Wilson:P2M1y1F8LkPuidoT@pokemonproject.l7nypzy.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'GrocerEase'
})
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));


app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser());

// app.use('/test', userController.createUser, (req, res) => {
//   console.log('new user created:');
//   return res.status(200).json(res.locals.user);
// });

app.post('/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    // redirects to homepage when they sucessfully create an account
    res.redirect(200, '/profile');
  }
);

app.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    res.redirect(200, '/home');
  }
);

// serves index.html to frontend
app.get('/', (req, res) => {
  console.log('serving html file to frontend');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


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