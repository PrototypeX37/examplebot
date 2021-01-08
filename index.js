
const Discord = require('discord.js');

const client = new Discord.Client();
 

client.on('ready', () => {

    console.log('I am ready!');

});

 
const prefix = "!";
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }


if (message.content === 'ash3') {

       message.reply('I shit everywhere...');

       }

if (message.content === 'ash3') {

       message.reply('<3 uwu <3 uwu <3 uwu <3 uwu <3');

       }



  if (message.content === "Shut up bot") {
    message.reply(" I have feelings too you know :(");
  }
  if (message.content === "shut up bot") {
    message.reply(" Ouch, that hurt my Steel Heart.. </3");
  }
  
       // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "Deployyya")) {
    message.channel.send("Deployed to Google Cloud #7722");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  if (message.content.startsWith(prefix + "live")) {
    message.channel.send("Woooo! RoseGardenCat Has Gone Live!");
  }
  

       

});



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.ROSEBOT_TOKEN);//BOT_TOKEN is the Client Secret
