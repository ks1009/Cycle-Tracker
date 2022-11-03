const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const MongoClient = require('mongodb').MongoClient;

/* global middleware: require routers */
const apiRouter = require('./routes/api.js');

/* handle parsing request body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* handle requests for static files */
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

/* define route handlers */
app.use('/api', apiRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  // console.log('got the index.html');
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.error(errorObj.log);
  console.error('Raw error:', err);
  return res.status(errorObj.status).json(errorObj.message);
});

// Connecting to frontend
let db;

// should not be here should be in an env
const MONGO_URI =
  'mongodb+srv://ks1009:QRvnraOtWlchU3h5@solo-project.oprtxvd.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(MONGO_URI, (err, database) => {
  if (err) {
    return console.log(err);
  }
  db = database;
  // start the express web server listening on 8080
  app.listen(8080, () => {
    console.log('listening on 8080');
  });
});

// post adds to database, but does not add the date selected
// when button is clicked -> logs the date selected but not sending that same date back?
app.post('/', (req, res) => {
  const click = { clickTime: new Date() };
  console.log('click');
  console.log(db);

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(200);
  });
});

/* start server */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
