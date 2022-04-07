const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


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
    message.channel.send("Bir sebep belirtmediniz.Sebepsiz formlar değerlendirilmiyecektir!").then(x => x.delete({timeout: 5000}))
    message.react(":x:")
    return;
    }
    
    message.react("✅")

message.channel.send(`Talebiniz başarıyla iletildi.Aşağıda form bilgilerinizi inceleyebilirsiniz;

Kişi => ${kisi}
Hex => **${kisihex}**
Sebep => **${sebep}**

・Kurallara uymayan kişileri bildirdiğiniz için teşekkür ederiz.
・FivemTR**(** https://discord.gg/fivemtr **)** yetkilileri tarafından formunuz incelenicek ve size geri dönüş sağlanacaktır.
`)
   

	const wex = new Discord.MessageEmbed()
       .setAuthor(`BlackFive - Report`, client.user.avatarURL())
       .addField("Bildiren",`<@${message.author.id}> - ${message.author.tag} (${message.author.id})`)
       .addField("Şüpheli Kişi",`<@${kisi.id}> - ${kisi.username} (${kisi.id})`)
       .addField("Şüpheli Hex",`${kisihex}`)
       .addField("Sebep",`${sebep}`)
       .setFooter(`developed by wexfavela#1659`)
       .setTimestamp()
client.channels.cache.get("947085857565843467").send(wex)

};

exports.config = {
  name: "report",
  guildOnly: true,
  aliases: ["bildir",""],
};