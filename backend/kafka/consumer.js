const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'flight-status', partition: 0 }],
  { autoCommit: true }
);

consumer.on('message', (message) => {
  console.log('Kafka message received:', message);
});

consumer.on('error', (err) => {
  console.error('Kafka Consumer error:', err);
});
