exports.run = (client,message) => {
  const dogFacts = require('dog-facts');

let randomFact = dogFacts.random();
  message.channel.send(`:dog: | *Did you know that ${randomFact}*`)
}
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'dogfacts',
  description: 'Gets a random dog fact',
  usage: 'dogfact',
  category:'General',

};
