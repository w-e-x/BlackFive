const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

    if(message.guild.id ==! "853752784520216596") {
        message.channel.send("Bu komut sadece FivemTR(discord.gg/fivemtr) discord sunucusunda kullanılabilir.").then(x => x.delete({timeout: 5000}))
        message.react("❌")
        return;
         }

 if(!message.member.roles.cache.has("947086362996248637")) {
message.channel.send("Ne yazikki FivemTR Moderatörü değilsiniz, bu komutu kullanamassınız.").then(x => x.delete({timeout: 5000}))
message.react("❌")
return;
 }


let kisi = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 
let kisihex= args[1]
let sebep = args.slice(2).join(' ')

if(!kisi) {
message.channel.send("Geçerli bir kişi belirtmediniz.").then(x => x.delete({timeout: 5000}))
message.react("❌")
return;
}

if(!kisihex) {
    message.channel.send("Kişinin hex idsini belirtmediniz.Bilginiz yoksa lütfen `bilinmiyor` yazınız.").then(x => x.delete({timeout: 5000}))
    message.react(":x:")
    return;
    }

    
if(!sebep) {
    message.channel.send("Kişiyi karalisteye almak için bir sebep belirtmediniz.").then(x => x.delete({timeout: 5000}))
    message.react(":x:")
    return;
    }
    

    let wexris2 = db.fetch(`wexblacklistfivem_${client.id}.${kisi.id}`)
    if(wexris2) return message.channel.send('Kişi zaten karalistede!')

    message.react("✅")

    db.set(`wexblacklistfivem_${kisi.id}`, kisi.id)

message.channel.send(`Kişi başarıyla blackliste alındı! Açmak için -blacklist-aç

Kişi =>               ${kisi}
Hex =>               **${kisihex}**
Sebep =>               **${sebep}**
`)
   
kisi.send(`Moderatör <@${message.author.id}> tarafından BlackFive'ın bulunduğu bütün sunucularda karalisteye alındınız!

Şikayetlerinizi bize iletin! **(** https://discord.gg/fivemtr **)**
`)

var banhammer = client.emojis.cache.get("955134442068934768")
	const wex = new Discord.MessageEmbed()
       .setAuthor(`BlackFive - Blacklist`, client.user.avatarURL())
       .addField(`${banhammer} Moderatör`,`<@${message.author.id}> - ${message.author.tag} (${message.author.id})`)
       .addField(":bust_in_silhouette: Blacklist Kişi",`<@${kisi.id}> - (${kisi.id})`)
       .addField(":id: Blacklist Hex",`${kisihex}`)
       .addField(":grey_question: Blacklist Sebep",`${sebep}`)
       .setFooter(`BlackFive - wex`)
       .setTimestamp()
client.channels.cache.get("946869844119285761").send(wex)




};

exports.config = {
  name: "blacklist",
  guildOnly: true,
  aliases: ["bildir",""],
};