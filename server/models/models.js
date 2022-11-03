const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://ks1009:QRvnraOtWlchU3h5@solo-project.oprtxvd.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true, // options for connect method to parse URI
    useUnifiedTopology: true,
    dbName: 'solo-project', // sets the name of the DB that our collections are part of
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(`Error connecting to Mongo DB: ${err}`));

const Schema = mongoose.Schema;

// Cycle Schema
// fix start date -> think in a different time zone?
// fix end date -> keeps giving date now

const cycleSchema = new Schema({
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    default: Date.now(),
  },
});

const Cycle = mongoose.model('cycle', cycleSchema);

module.exports = {
  Cycle,
};
