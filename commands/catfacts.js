exports.run = (client,message) => {
  const catFacts = require('cat-facts');

let randomFact = catFacts.random();
  message.channel.send(`:cat: | *Did you know that ${randomFact}*`)
}
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'catfacts',
  description: 'Gets a random cat fact',
  usage: 'catfact',
  category:'General',

};
