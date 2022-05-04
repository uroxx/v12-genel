
const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
   var permissions = message.channel.permissionsFor(client.user);
   if (!permissions.has('SEND_MESSAGES')) {
   
     
     return;
     
   }

   
    message.channel.send(new Discord.MessageEmbed()  .setColor("#F0FFFF").setDescription('Eğer aşağıdaki emojiye tıklarsanız sunucunuzdaki tüm kanallar silinip yeniden oluşturulacak.'))
    .then(msg => {
        msg.react('801061526840279070')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' 
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
     

    message.guild.channels.cache.forEach(a => a.delete())
    message.guild.roles.cache.forEach(a => a.delete())
    const kuralmesajı = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name}`)
    .setColor("#F0FFFF")
    .setDescription(`

Herkes birbirine saygı göstermek zorundadır.
Kanalları amacı dışında kullanmak yasaktır.
Argo ve küfür söylemleri istisnasız yasaktır. ️
Kimse din, ırk, siyaset konularını hiçbir kanalda açamaz.
Sunucumuzda tartışma oluşturmak yasaktır.
Size ait özel şeyleri sunucumuza taşımanız yasaktır.
Birilerini rahatsız edecek derecede şahsi tag kullanmak yasaktır.
Spam ve flood yapmak yasaktır.
Tiksindirici içerik yasaktır .
Reklam yapmak yasaktır.
`)

message.guild.roles.create({
    name: 'Yönetici',
    color: 'BLUE',
    permissions: [
        "MANAGE_GUILD",
        "MANAGE_ROLES",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MANAGE_MESSAGES",
        "MANAGE_NICKNAMES",
        "KICK_MEMBERS"
]
  })//codarev12

                message.guild.channels.create(`ÖNEMLİ KANALLAR`, { type: 'category'});
       message.guild.channels.create(`「📜」kurallar`, {type : "text"})
        .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
     message.guild.channels.create(`「🎉」duyuru`, {type : "text"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
          message.guild.channels.create(`「✅」rol-al`, {type : "text"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "ÖNEMLİ KANALLAR")))
        
          message.guild.channels.create(`SOHBET KANALLARI`, { type: 'category'});
       message.guild.channels.create(`「💬」sohbet`, {type : "text"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
       message.guild.channels.create(`「🤖」komutlar`, {type : "text"})
        
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
       message.guild.channels.create(`「📷」foto-chat`, {type : "text"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
       message.guild.channels.create(`「💎」şikayet-odasi`, {type : "text"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SOHBET KANALLARI")))
                  message.guild.channels.create(`SES KANALLARI`, { type: 'category'});
       message.guild.channels.create(`╠ ● Genel Sohbet ①`, {type : "voice"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
       message.guild.channels.create(`  ♫ Müzik Odası`, {type : "voice"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
       message.guild.channels.create(`╠ ● Bekleme Odası`, {type : "voice"})
          .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "SES KANALLARI")))
     
          .then(channel => message.guild.channels.cache.find(channel => channel.name == "「📜」kurallar").send(kuralmesajı))
          .then(channel => message.guild.channels.cache.find(channel => channel.name == "「✅」rol-al").send("rol alma falan işte")
          
          .then(msg => {
            msg.react('801061526840279070')
           .then(r => {
            const kirmizi = (reaction, user) => reaction.emoji.name === 'ewing_tik' 
         
        const reactk = msg.createReactionCollector(kirmizi);
    
           reactk.on('collect', (r, user)  => {
   
            message.member.roles.add((rol => message.guild.roles.cache.find(rol => rol.name == "EWİNG_TARAFİNDAN_KODLANDİM")))


        })
    })
    
    })

          
          )
          
 
 


    
     
        })
    })
    
    })

            }
            

    
    
    


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucukur"],
  permLevel: 0
};

exports.help = {
  name: "sunucukur",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
