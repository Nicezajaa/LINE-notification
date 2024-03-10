function mqttio(){
const mqtt = require('mqtt')

const { connectOptions } = require("./use_mqtts.js")
const Line_Data = require("../linesentdata.js")
const pushcarousel = require("../carousel.js")
const Alert_Data = require("../FlexAlert/Alertbox.js")
const Cover_Data = require("../FlexAlert/coverbox.js")



const clientId = 'emqx_nodejs_' + Math.random().toString(16).substring(2, 8)
const options = {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'Nice01',
  password: 'Nice2546',
  reconnectPeriod: 1000,
  rejectUnauthorized: true,
}

const { protocol, host, port } = connectOptions
let connectUrl = `${protocol}://${host}:${port}`
if (['ws', 'wss'].includes(protocol)) {
  // mqtt: MQTT-WebSocket uniformly uses /path as the connection path,
  // which should be specified when connecting, and the path used on EMQX is /mqtt.
  connectUrl += '/mqtt'
}mqtt

const client = mqtt.connect(connectUrl, options)

const topic = 'test/cloud'
// const payload = 'nodejs mqtt test'
const qos = 0

client.on('connect', () => {
  console.log(`${protocol}: Connected`)

  // subscribe topic
  client.subscribe(topic, { qos }, (error) => {
    if (error) {
      console.log('subscribe error:', error)
      return
    }
    console.log(`${protocol}: Subscribe to topic '${topic}'`)
    
    // publish message
//     client.publish(topic, payload, { qos }, (error) => {
//       if (error) {
//         console.error(error)
//       }
//     })
  })
})

client.on('reconnect', (error) => {
  console.log(`Reconnecting(${protocol}):`, error)
})

client.on('error', (error) => {
  console.log(`Cannot connect(${protocol}):`, error)
})

client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
  let dataString = payload.toString()
  let dataArray = dataString.split(", ")
  

  let name = dataArray[0].substring(6)
  let uid = dataArray[1].substring(5)
  let building = dataArray[2].substring(10)
  
  // let data1 = { name, uid, building };
  let data1 = pushcarousel()

  const Alert_result = Alert_Data(name, uid, building);
  const Cover_result = Cover_Data()
  

   data1[0].contents.contents.push(Cover_result);
   data1[0].contents.contents.push(Alert_result);
  
  console.log("Name:", name);
  console.log("UID:", uid);
  console.log("Building:", building);

  const User_ID = "Cc5b2691f0108fd4ce6a4c1cc4db1885c";

 Line_Data(data1, User_ID)
  
})
}

module.exports = mqttio;
