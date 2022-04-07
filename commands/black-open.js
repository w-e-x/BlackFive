const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) {
    message.channel.send("BlackFive sistemini aktive edebilmek için *Sunucuyu Yönet* yetkisine sahip durumda olmalısınız.").then(x => x.delete({timeout: 5000}))
    message.react("❌")
    return;
    }


let kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

if(!kanal) {
message.channel.send("Geçerli bir log kanal belirtmediniz.").then(x => x.delete({timeout: 5000}))
message.react("❌")
return;
}

if(!rol) {
    message.channel.send("BlackFive datasında olan karalistedeki kişilere hangi rolün veriliceğini belirtmediniz.").then(x => x.delete({timeout: 5000}))
    message.react("❌")
    return;
    }


    let kanaldb = db.fetch(`wexblackkanal_${message.guild.id}`)
   if(kanaldb) return message.channel.send('Sistem zaten aktif.').then(x => x.delete({timeout: 5000}))

    let roldb = db.fetch(`wexblackjailrol_${message.guild.id}`)
   if(roldb) return message.channel.send('Sistem zaten aktif.').then(x => x.delete({timeout: 5000}))

    message.react("✅")

    db.set(`wexblackkanal_${message.guild.id}`, kanal.id)

    db.set(`wexblackjailrol_${message.guild.id}`, rol.id)
message.channel.send(`BlackFive sistemi başarıyla aktif edildi.Kapatmak için **-blackclose** yazmanız yeterli.Aşşağıda girilen bilgileri görebilirsiniz.

Log Kanalı =>               <#${kanal.id}>
Karalistede Olan Kullanıcılara Verilicek Rol =>               **${rol}**

`)
   
kanal.send(`<@${message.author.id}> tarafından bu sunucuda **BlackFive** sistemi aktive edildi!

Log Kanalı =>               <#${kanal.id}>
Karalistede Olan Kullanıcılara Verilicek Rol =>               **${rol}**

Şikayetlerinizi ve önerilerinizi bize iletin! **(** https://discord.gg/fivemtr **)**
`)

///////////// var banhammer = client.emojis.cache.get("955134442068934768")
	const wex = new Discord.MessageEmbed()
       .setAuthor(`BlackFive - OpenBlack`, client.user.avatarURL())
       .addField(`Sistemi Aktive Eden `,`<@${message.author.id}> - ${message.author.tag} (${message.author.id})`)
       .addField("Sunucu Bilgisi ",`**${message.guild.name}** - (${message.guild.id}) - **${message.guild.memberCount}** `)
       .addField("Log Kanalı",`${kanal}`)
       .addField("Karaliste Rol",`${rol}`)
       .setFooter(`BlackFive - wex`)
       .setTimestamp()
       client.channels.cache.get("946869844119285761").send(wex)




};

exports.config = {
  name: "b-p",
  guildOnly: true,
  aliases: ["black-open","blackopen"],
};