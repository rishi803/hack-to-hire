const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  airline: String,
  status: String,
  gate: String,
  scheduledTime: Date,
  updatedTime: Date
});

module.exports = mongoose.model('Flight', flightSchema);
