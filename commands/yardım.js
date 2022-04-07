const Discord = require("discord.js")
client = new Discord.Client();

exports.run = async(client, message) => {
	
    if(message.author.id !== "424640284543025153") return message.reply("wex#1659 : bu komut şuan yapım aşamasında.") 
    let prefix = "-"
    let emoji = client.emojis.cache.get('923313775334006805')
	const wex = new Discord.MessageEmbed()
       .setAuthor(`BlackFive Bot Yardım Menüsü`, client.user.avatarURL())
       .setThumbnail(client.user.avatarURL())
      .setDescription(`

      **${prefix}bildir** › Bir kişiyi 3.Parti yazılım,trol veya diğer sebeplerden ötürü bildirirsiniz. 
      **${prefix}blacklist** › FivemTR Moderatörlerine özel bir komutdur.
      **${prefix}blackopen** › BlackFive sistemini aktive etmeye yarar.
      **${prefix}blackclose** › BlackFive sistemini **de**aktive etmeye yarar.

      *${client.guilds.cache.size}* discord sunucusuna ve *${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}* kişiye hizmet veriyorum!

      [Davet Et](https://discord.com/oauth2/authorize?client_id=698261244561326441&permissions=8&scope=bot)
      [Destek Sunucusu](https://discord.gg/fivemtr)
      `)
 
 ///      .setFooter(`Powered by [RedBots](https://discord.gg/redbot)`)
  return message.channel.send(wex)
}

exports.config = {
  name: "yardım",
  guildOnly: true,
  aliases: ["botbilgi","istatistik","help","davet"],
};