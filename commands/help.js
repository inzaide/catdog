const config = require('../config.json');
exports.run =  (client, message, params) => {
  const permission = client.elevation(message);
  const commandNames = Array.from(client.commands.keys());
  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
  try {
    if (!params[0]) {
        message.channel.send(`Hi, I'm **CatDog**<:botTag:230105988211015680>. I was coded by zaid#5025<:hypesquad:314068430854684672>\nMy prefix is \`${config.prefix}\`\nI just sent you a DM with my commands.`)
        message.channel.send(`To view my updates \nGo to my discord link <:discord:314003252830011395>\nhttps://discord.gg/wUYhZpq`)
       message.author.send(`Command List\n\n${client.commands.filter(cmd => cmd.conf.permLevel <= permission).map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
    } else {
      let command = params[0];
      if (client.commands.has(command)) {
        command = client.commands.get(command);
         message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUsage:: ${command.help.usage}`, {code:'asciidoc'});
      }
    }
  } catch (e) {
    console.log(e);
  }
};

exports.conf = {
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: 'help [command]',
  category:'General'
};
