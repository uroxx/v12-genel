const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
   
   
    var kanal = message.mentions.channels.first() 
    
    if(!args[0])return message.channel.send(" Bot ekleme kanalı ayarlamak için bir kanal belirtmedin.")
    if(!kanal)return message.channel.send(" Bot ekleme kanalı ayarlamak için bir kanal belirtmedin.")
    db.set(`bot-ekleme-kanalı_${message.guild.id}`, kanal.id)


    message.channel.send(" Bot ekleme kanalı başarıyla ayarlandı.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-ekleme-kanalı"],
  permLevel: 0
};

exports.help = {
  name: "bot-ekleme-kanalı",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
