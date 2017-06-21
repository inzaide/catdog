exports.run = (client,message) => {
  const randomPuppy = require('random-puppy');
  randomPuppy()
    .then(url => {
        message.channel.send(url)
    })
}
exports.conf = {
  aliases: ['dog', 'pupper'],
  permLevel: 0
};
exports.help = {
  name: 'randomdog',
  description: 'Gets a picture of a random pupper',
  usage: 'randomdog',
  category:'General',

};
