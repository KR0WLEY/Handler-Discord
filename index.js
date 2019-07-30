// .
const firebase = require("firebase/app");
const { readdirSync } = require('fs');
const { join } = require('path');
const Discord = require("discord.js");
const client = new Discord.Client()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//comand handler
const path = readdirSync(join(__dirname, 'comandos')).filter(file => file.endsWith('.js'));
for (const file of path) {
  let handler = require(join(__dirname, 'comandos', `${file}`));
  client.commands.set(handler.config.name, handler)
      handler.config.aliases.forEach((alias) => {
      client.aliases.set(alias, handler.config.name)
     });
}
client.on("message", async message => {
            let messageArray = message.content.split(' ')
            let cmd = messageArray[0];
            let args = messageArray.slice(1);
            const commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
            if (commandfile) commandfile.run(client, message, args);
        })
//event handler
fs.readdir("./eventos/", (err, files) => {
  if (err) return console.log("[ERROR EVENT] " + err);
  files.forEach(file => {
    let eventFunction = require(`./eventos/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventFunction.run(client, ...args, db));
	});
});
client.login(process.env.SECRET); // crie um arquivo .env, nele escreva SECRET=SEUTOKEN
