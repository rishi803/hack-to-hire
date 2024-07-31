const mongoose = require('mongoose');
const Flight = require('../models/Flight');

const mockFlights = [
  {
    flightNumber: 'AA123',
    airline: 'American Airlines',
    status: 'On Time',
    gate: 'A1',
    scheduledTime: new Date('2024-08-01T10:00:00'),
    updatedTime: new Date('2024-08-01T10:00:00')
  },
  {
    flightNumber: 'BB123',
    airline: 'Lufthansa',
    status: 'Delayed',
    gate: 'B1',
    scheduledTime: new Date('2024-08-11T10:00:00'),
    updatedTime: new Date('2024-08-11T10:00:00')
  },
  {
    flightNumber: 'CC123',
    airline: 'Air India',
    status: 'Cancelled',
    gate: 'B1',
    scheduledTime: new Date('2024-08-11T10:00:00'),
    updatedTime: new Date('2024-08-11T10:00:00')
  }
  // Add more mock flights here
];

mongoose.connect('mongodb://localhost:27017/flightstatus', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    await Flight.insertMany(mockFlights);
    console.log('Mock data inserted');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
