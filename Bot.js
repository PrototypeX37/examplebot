const Discord = require("discord.js");

const bot = new Discord.Client();
const token = 'Nzk2MzU1Mjg5NTE5MDk1ODA5.X_WtqA.ahU22XlgI80AoaxEn_nG5TGhXAM'

bot.on('ready', () => {
  console.log('bot is ready')
})

bot.login(token)
