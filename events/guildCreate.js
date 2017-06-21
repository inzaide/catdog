const config = require('../config.json');
module.exports =  (guild) => {
   guild.client.user.setGame(`${config.prefix}help | ${guild.client.guilds.size} Servers`);

}
