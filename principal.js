const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
 

 client.on("ready", () => {
  console.log("Ready!");
});


client.on("message", (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.channel.type === "dm") return; // Ignore DM channels.
   if (message.author.bot) return; // Ignore bots.
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (command ==='token' ) {
   	message.channel.send(message.author.id)
  };

  if (command === 'cepillada') {
   	message.channel.send("https://www.youtube.com/watch?v=Hqi77L3DKfw&feature=youtu.be")
  };

  if (command === 'tuturu') {
   	message.channel.send("https://youtu.be/hzfmBNn2u1c")
  };
 
   if (command === 'vietnam') {
   	message.channel.send("https://youtu.be/eEVL9irXj0g")
  };

 if (command === 'wiwi') {
   	message.channel.send("https://youtu.be/mz4Stu9k4CE")
  };
 
 if (command === 'sadsong') {
   	message.channel.send("https://youtu.be/kbamoPhIanc")
  };

  if (command === 'commands') {
   	message.channel.send("!cepillada , !tururu , !wiwi , !waka , !wulfito, !commands, !wulfito, !lucas, !mishka, !pato, !avenita , !red, !say [lo que quieras que diga el bot]")
  };

if (command === 'waka') {
   	message.channel.send("https://www.comdotgame.com/play/mario-is-missing-peachs-untold-tale-3")  };

  if (command === 'wulfito') {
   	message.channel.send("https://www.youtube.com/watch?v=Hqi77L3DKfw&feature=youtu.be")
  };

  if (command === 'lucas') {
   	message.channel.send("https://i.pinimg.com/originals/8d/6b/86/8d6b86755eff4fbbaa8c3cf588210db1.jpg")
  };

   if (command === 'rabbit') {
   	message.channel.send("https://www.rabb.it/BestTerra")
  };

  if (command === 'mishka') {
   	message.channel.send("https://youtu.be/WdI5y3iwhLU")
  };

  if (command === 'kokopo') {
   	message.channel.send("http://nxcache.nexon.net/spotlight/26/00J1y-24b6ad97-4ded-4097-bdcd-8ca4c5834a74.jpg CUI")
  };

  if (command === 'nico') {
   	message.channel.send("https://www.youtube.com/watch?v=sj_pJhI1PFY")
  };

  if (command === 'pato') {
   	message.channel.send("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rubber_duck_assisting_with_debugging.jpg/220px-Rubber_duck_assisting_with_debugging.jpg")
  };

  if (command === 'avenita') {
   	message.channel.send("https://media.giphy.com/media/sdEpMTJwjJ91m/giphy.gif")
  };

   if (command === 'nino') {
   	message.channel.send("https://youtu.be/6G8SzmGLh-E")
  };

  if (command === 'red') {
   	message.channel.send("https://youtu.be/y4CauW-m5CY")
  };

  if (command === 'umiyar') {
   	message.channel.send("https://media.discordapp.net/attachments/440952339185008652/441449419439603720/pinguino_umiyador.jpg?width=389&height=441")
  };

if(command === "cui"){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send("CUI")};

  if(command === "say"){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text)};
});


client.login(process.env.TOKEN);
