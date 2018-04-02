const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'M UP!!! sheesh...");
});
var intervalID = scope.setInterval(code, 21600000);
client.on('message', message => {
   
});

client.login(token);
