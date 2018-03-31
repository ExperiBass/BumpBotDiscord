const Discord = require("discord.js");
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'M UP!!! sheesh...");
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

   if (!client.commands.has(command)) return;

try {
    client.commands.get(command).execute(message, args);
}
catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
}
});

client.login(token);
