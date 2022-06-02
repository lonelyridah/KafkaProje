const { Kafka } = require("kafkajs");

let producer;
run();
async function  run(){
   const kafka = new Kafka({
    clientId: "kafka_client",
    brokers: ["kafka:9092"]
  });
  
  producer = kafka.producer();
  console.log("Gonderici baglanti kuruyor.");
  await producer.connect();
  console.log("Tebrikler. Gonderici baglantisi kuruldu.");
  
}

async function createProducer(req,res){
 
  data=req.body;

  try {
    
    let messages = data.map(item => {
      return {
        value: JSON.stringify(item),
        partition: item.id == "1" ? 0 : 1
      };
    });

    const message_result = await producer.send({
      topic: "Topic",
      messages: messages
    });
    res.send(message_result);
  }
  catch (error) {
    console.log("Dikkat. Hata olustu. (gonderici)", error);
  } 
}
module.exports.postcreateProducer=createProducer;