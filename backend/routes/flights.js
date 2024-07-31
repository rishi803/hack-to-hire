const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const { sendKafkaMessage } = require('../kafka/producer');

// Get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update flight status
router.patch('/:id', async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });

    Object.assign(flight, req.body);
    await flight.save();

    // Send Kafka message
    sendKafkaMessage(`Flight ${flight.flightNumber} status changed to ${flight.status}`);

    res.json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
