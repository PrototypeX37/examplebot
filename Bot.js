
const Discord = require('discord.js');

const client = new Discord.Client();
const token = 'Nzk2MzU1Mjg5NTE5MDk1ODA5.X_WtqA.ahU22XlgI80AoaxEn_nG5TGhXAM';
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});
 

// THIS  MUST  BE  THIS  WAY

client.login(token);//BOT_TOKEN is the Client Secret
