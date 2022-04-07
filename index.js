const Discord = require("discord.js")     
const client = new Discord.Client();       
const ayarlar = require("./ayarlar.js")    
const fs = require("fs");                
const db = require("quick.db")

require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})


client.on("ready", ( )=> {
  console.log(`› Powered By RedBot`)
  console.log(`› Developed By Wex`)
  console.log(`› Activated Successful`)
  });

  client.on("guildMemberAdd", async member => {

    let kanaldb = db.fetch(`wexblackkanal_${member.guild.id}`)
    if(!kanaldb) return console.log("kanal data yok ")

    let roldb = db.fetch(`wexblackjailrol_${member.guild.id}`)
    if(!roldb) return console.log("rol data yok ")

let wexblacklog = member.guild.channels.cache.get(kanaldb)
let wexblackrol = member.guild.roles.cache.get(roldb)

  let wexris2 = db.fetch(`wexblacklistfivem_${member.id}`)
    if(!wexris2) return
    if(wexris2 == member.id) {
  
   member.guild.members.cache.get(member.id).roles.add(wexblackrol)
   const embed = new Discord.MessageEmbed()
   .setAuthor('BlackFive - Log', client.user.avatarURL())
   .setDescription(`<@${member.id}> ( ${member.id} ) karalistede olduğu için karantinaya atıldı!`)
   .setFooter("BlackFive - Wex Development - discord.gg/fivemtr")
   client.channels.cache.get(kanaldb).send(embed)
   };
   })


client.login(ayarlar.token)
