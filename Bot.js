
const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'Nzk2MzU1Mjg5NTE5MDk1ODA5.X_WtqA.ahU22XlgI80AoaxEn_nG5TGhXAM';
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

// Set the prefix
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
 

// THIS  MUST  BE  THIS  WAY

client.login(token);//BOT_TOKEN is the Client Secret
