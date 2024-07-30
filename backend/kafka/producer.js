const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is ready');
});

producer.on('error', (err) => {
  console.error('Kafka Producer error:', err);
});

const sendKafkaMessage = (message) => {
  const payloads = [{ topic: 'flight-status', messages: message }];
  producer.send(payloads, (err, data) => {
    if (err) {
      console.error('Kafka send error:', err);
    } else {
      console.log('Kafka send data:', data);
    }
  });
};

module.exports = { sendKafkaMessage };
