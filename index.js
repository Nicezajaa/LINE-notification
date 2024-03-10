const express = require('express')
const app = express()
require('dotenv').config()
const Emqtt = require("./mqtts/mqtt")
const line = require('@line/bot-sdk')


const config = {
    channelAccessToken : process.env.ACCESS_TOKEN,
    channelSecret : process.env.SECRET_TOKEN
}



app.post('/webhook', line.middleware(config), (req, res) =>{
    Promise
        .all(req.body.events.map(handleEvents))
        .then((result) => res.json(result))   
        .catch((error) => {
            console.error(error)
            res.status(500).end()})
});
const client = new line.Client(config);

// client.pushMessage("Ubf11c3175d7ef1e0f5171451b1f0191d", [
//     {"type" : "text",
//     "text" : 'จารบอย'
//     }
//     ])

async function handleEvents(event) {
    console.log(event)
    // if(event.type !== 'message' || event.message.type !== 'text'){
    //     return Promise.resolve(null)
    // }

    // return client.replyMessage(event.replyToken, [
    //     {
    //         "type" : "text",
    //         "text" : 'OK',
    //         "quoteToken" : event.message.quoteToken
    //     }
    // ])
    // return client.replyMessage(event.replyToken, { type: 'text', text: 'hello' })
}

Emqtt();



app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(4000, () => {console.log('start server on port 4000')})
