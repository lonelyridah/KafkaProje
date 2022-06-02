const { Kafka } = require("kafkajs");

createConsumer();

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_client",
      brokers: ["kafka:9092"]
    });

    const alici = kafka.consumer({
      groupId: "consumer_group"
    });

    console.log("Alici baglanti kuruyor.");
    await alici.connect();
    console.log("Alici baglanti kurdu.");


    await alici.subscribe({
      topic: "Topic",
      fromBeginning: true
    });

    await alici.run({
      eachMessage: async result => {
        console.log(
          `Gondericiden-Gelen-Mesaj:=>${result.message.value}, Partition-Degeri:=> ${result.partition}`
        );
      }
    });
  } catch (error) {
    console.log("Dikkat. Hata olustu. (alici)", error);
  }
}