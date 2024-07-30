const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'flight-status', partition: 0 }],
  { autoCommit: true }
);

const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const messaging = admin.messaging();

consumer.on('message', (message) => {
  console.log('Kafka message received:', message);
  const flightStatusUpdate = JSON.parse(message.value);

  const payload = {
    notification: {
      title: `Flight ${flightStatusUpdate.flightNumber} Status Update`,
      body: `Status changed from ${flightStatusUpdate.oldStatus} to ${flightStatusUpdate.newStatus}`,
    },
    data: {
      flightNumber: flightStatusUpdate.flightNumber,
      oldStatus: flightStatusUpdate.oldStatus,
      newStatus: flightStatusUpdate.newStatus,
    },
    topic: 'flight-updates',
  };

  messaging.send(payload)
    .then(response => {
      console.log('Notification sent successfully:', response);
    })
    .catch(error => {
      console.error('Error sending notification:', error);
    });
});

consumer.on('error', (err) => {
  console.error('Kafka Consumer error:', err);
});
