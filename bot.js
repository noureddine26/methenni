const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("597811703593566211")
setInterval(function() {
channel.send(`ana bhim ana bhim ana bhim`);
}, 30)
})

client.login(process.env.BOT_TOKEN);