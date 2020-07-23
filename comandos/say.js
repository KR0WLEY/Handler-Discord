module.exports.run = (client, message, args) => {
 message.channel.send(args.join(" "));
}
module.exports.config = {
 name: 'say',
 aliases: ['say', 'falar'] // aliases são outras formas de chamar o comando
}
