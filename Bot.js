const Discord = require("discord.js");

const bot = new Discord.Client();
const token = 'Nzk2MzU1Mjg5NTE5MDk1ODA5.X_WtqA.1_Mr8x0olas30FXLjn95c4hYpHk'

bot.on('ready', () => {
  console.log('bot is ready')
})

bot.login(token)