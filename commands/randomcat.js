exports.run = (client,message,args) => {
  const randomCat = require('random-cat')
  let catUrl = randomCat.get()
  message.channel.send(catUrl)

}
exports.conf = {
  aliases: ['cat'],
  permLevel: 0
};
exports.help = {
  name: 'randomcat',
  description: 'Gets a picture of a random cat',
  usage: 'randomcat',
  category:'General',

};
