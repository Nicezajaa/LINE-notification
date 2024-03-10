const axios = require("axios");
require("dotenv").config();
async function sendFlexMessage(mes, UID) {
  try {
    let data = JSON.stringify({
      to: UID,
      messages: mes,
      
      // [
      //   {
      //     "type" : "text",
      //     "text" : `Name: ${mes.name}, UID: ${mes.uid}, Building: ${mes.building}`
      //   }
      // ]
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.line.me/v2/bot/message/push",
      headers: {
        Authorization: "Bearer " + process.env.ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.message);
  }
}

module.exports = sendFlexMessage;