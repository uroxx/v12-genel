const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
    
    let ayarlı = db.fetch(`prefix_${message.guild.id}`)
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
    if(args[0] === "sıfırla"){
        let ayarlı = db.fetch(`prefix_${message.guild.id}`)
        if(!ayarlı)return message.channel.send(" Prefix zaten ayarlanmamış.")
        
        db.delete(`prefix_${message.guild.id}`)
        return message.channel.send(" Prefix başarıyla sıfırlandı.")
        }

        const embed = new Discord.MessageEmbed()
        .setColor("#F0FFFF")
        .setDescription(`Prefix zaten ayarlanmış.
         > Sıfırlamak istersen ${prefix}prefix sıfırla`)
    if(ayarlı) return message.channel.send(embed)
   
   
    if(!args[0])return message.channel.send(" Prefix ayarlamak için bir kelime belirtmedin.")
    db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(" Prefix başarıyla ayarlandı.")


    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefix"],
  permLevel: 0
};

exports.help = {
  name: "prefix",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
