const express = require('express');
const mongoose = require('mongoose');
const flightsRouter = require('./routes/flights');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/flightstatus', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/flights', flightsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
