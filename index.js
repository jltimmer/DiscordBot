const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase().startsWith('#google')) {
    msg_arr = msg.content.split(" ")
    if (msg_arr.length > 1) {
      reply_msg = "https://google.com/search?q=" + msg_arr[1]
      for (var i = 2; i < msg_arr.length; i++) {
        reply_msg += '%20' + msg_arr[i]
      }
      msg.reply(reply_msg)
    }
  }
})

bot_token = process.env.BOT_TOKEN
client.login(bot_token);
