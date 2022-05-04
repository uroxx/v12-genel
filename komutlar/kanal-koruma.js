const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
       
    if(!args[0])return message.channel.send(" Bir sayı belirtmedin.")
    if(isNaN(args[0]))return message.channel.send(" Bir sayı belirtmedin.")
db.set(`${message.guild.id}_kanal_koruma_sayısı`, args[0]) 


    message.channel.send(" Kanal koruma başarıyla ayarlandı.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanal-koruma"],
  permLevel: 0
};

exports.help = {
  name: "kanal-koruma",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
