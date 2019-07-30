module.exports.run = (client, message, args) => {
message.channel.send(args.join(" "));
}
module.exports.config = {
name: 'say',
aliases: ['say', 'falar'] // aliases são outras formas de chamar o comando, o que voce escrever em string aqui vai ser uma nova alias
}
// todos os comandos terão de ser no mesmo estilo
