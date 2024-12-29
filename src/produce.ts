import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: 'test-kafka',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'quickstart-events',
    messages: [
      { value: 'Hi from nodejs' },
    ],
  })
}

run().catch(console.error)