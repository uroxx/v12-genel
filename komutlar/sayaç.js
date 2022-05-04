const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
    
    if(args[0] === "sıfırla") {
      let ayarlı = db.fetch(`sayaj_${message.guild.id}`)
      if (!ayarlı) return message.channel.send(" Sayaç zaten ayarlanmış.")

      db.delete(`sayaj_${message.guild.id}`)
      db.delete(`sayaj_sayısı_${message.guild.id}`)
     return message.channel.send(" Sayaç başarıyla sıfırlandı.")
    }


    let ayarlı = db.fetch(`sayaj_${message.guild.id}`)
    if(ayarlı) return message.channel.send(" Sayaç zaten ayarlanmış.")

   
    var kanal = message.mentions.channels.first() 
    
    if(!args[0])return message.channel.send(" Sayacı ayarlamak için bir kanal belirtmedin.")
    if(!kanal)return message.channel.send(" Sayacı ayarlamak için bir kanal belirtmedin.")
    if(!args[1])return message.channel.send(" Sayacı ayarlamak için bir sayı belirtmedin.")
    if(isNaN(args[1]))return message.channel.send(" Sayacı ayarlamak için bir sayı belirtmedin.")
    db.set(`sayaj_${message.guild.id}`, kanal.id)
    db.set(`sayaj_sayısı_${message.guild.id}`, args[1])

    message.channel.send(" Sayaç başarıyla ayarlandı.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sayaj"],
  permLevel: 0
};

exports.help = {
  name: "sayaç",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
