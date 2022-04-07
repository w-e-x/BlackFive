const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) {
    message.channel.send("BlackFive sistemini deaktive edebilmek için *Sunucuyu Yönet* yetkisine sahip durumda olmalısınız.").then(x => x.delete({timeout: 5000}))
    message.react("❌")
    return;
    }


    let kanaldb = db.fetch(`wexblackkanal_${message.guild.id}`)
    if(!kanaldb) return message.channel.send("Sistem zaten açık değil.")

    let roldb = db.fetch(`wexblackjailrol_${message.guild.id}`)
    if(!roldb) return message.channel.send("Sistem zaten açık değil.")

    message.react("✅")

    db.delete(`wexblackkanal_${message.guild.id}`)

    db.delete(`wexblackjailrol_${message.guild.id}`)
message.channel.send(`BlackFive sistemi başarıyla deaktif edildi.Tekrar aktif hale getirmek için **-blackopen** komutunu kullanabilirsiniz.

Şikayetlerinizi ve önerilerinizi bize iletin! **(** https://discord.gg/fivemtr **)**
`)
  

///////////// var banhammer = client.emojis.cache.get("955134442068934768")
	const wex = new Discord.MessageEmbed()
       .setAuthor(`BlackFive - CloseBlack`, client.user.avatarURL())
       .addField(`Sistemi Deaktive Eden `,`<@${message.author.id}> - ${message.author.tag} (${message.author.id}) - **${message.guild.memberCount}** `)
       .addField("Sunucu Bilgisi ",`**${message.guild.name}** - (${message.guild.id})`)
       .setFooter(`BlackFive - wex`)
       .setTimestamp()
       client.channels.cache.get("946869844119285761").send(wex)




};

exports.config = {
  name: "b-c",
  guildOnly: true,
  aliases: ["black-close","blackclose"],
};