
client.on('ready', () => {

    console.log('I am ready!');

});

 
const prefix = "!";
client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

  if (message.content === "Shut up bot") {
    message.reply(" I have feelings too you know :(");
  }
  if (message.content === "shut up bot") {
    message.reply(" Ouch, that hurt my Steel Heart.. </3");
  }
  
       // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "Deploy")) {
    message.channel.send("Deployed to Google Cloud #7722");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  if (message.content.startsWith(prefix + "live")) {
    message.channel.send("Woooo! RoseGardenCat Has Gone Live!");
  }
  

       

});
