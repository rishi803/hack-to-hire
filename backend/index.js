const express = require('express');
const mongoose = require('mongoose');
const flightsRouter = require('./routes/flights');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
console.log(flightsRouter);

mongoose.connect('mongodb://localhost:27017/flightdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connectted'))
  .catch(err => console.error(err));

app.use('/api/flights', flightsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
