const Discord = require("discord.js");
const db = require('croxydb'); // creating database

const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
 


  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = ayarlar.prefix;
  
  const yardım = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle(`${client.user.username}`)
    .setColor("#F0FFFF")
    .setDescription(`

**Menü Başlıkları**
> 📕 **botlist**

> 📙 **moderasyon**

> 📘 **ekonomi**

> 📗 **müzik**
`)
    
.setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
.setFooter(`${prefix}yardım <komut>`)
  if(!args[0])message.channel.send(yardım).then(msg => {
    msg.react('📕')
   .then(r => {
    msg.react('📙')
    .then(r => {
      msg.react('📘')
   .then(r => {
            msg.react('📗')
   const kirmizi = (reaction, user) => reaction.emoji.name === '📕' && user.id === message.author.id;
     
        const yeşil = (reaction, user) => reaction.emoji.name === '📗' && user.id === message.author.id;
     
      
   const reacty = msg.createReactionCollector(yeşil,);

       reacty.on('collect', r => {
        const sariembed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${client.user.username}`)
        .setColor("#F0FFFF")
        .setDescription(`
    
    **Menü Başlıkları**
    > **${prefix}oynat**
    > **${prefix}bitir**
    > **${prefix}ses**
    > **${prefix}döngü**
    > **${prefix}ara**
    > **${prefix}durdur**
    > **${prefix}devam**

    
    `)
        
    .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
    .setFooter(`${prefix}yardım <komut>`)

   msg.edit(sariembed)
   r.users.remove(message.author.id);
  })

        
        
        
   const reactk = msg.createReactionCollector(kirmizi,);

       reactk.on('collect', r => {
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${client.user.username}`)
        .setColor("#F0FFFF")
        .setDescription(`
    
    **Menü Başlıkları**
    > **${prefix}botekle**
    > **${prefix}log-kanal**
    > **${prefix}onaylama-kanalı**
    > **${prefix}bot-ekleme-kanalı**
    > **${prefix}geliştirici-rolü**
    > **${prefix}botlist-ayarları**
    `)
        
    .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
    .setFooter(`Pusula'nın eşsiz BotList komutları, emojiyle bot onaylama/reddetme bile var!`)
 
   msg.edit(kirmizi)
   r.users.remove(message.author.id);
  })

  
  const mavi = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
     
      
  const reactm = msg.createReactionCollector(mavi,);

      reactm.on('collect', r => {
       const maviembed = new Discord.MessageEmbed()
       .setTimestamp()
       .setTitle(`${client.user.username}`)
       .setColor("#F0FFFF")
       .setDescription(`
   
   **Ekonomi Komutları**
   > **${prefix}para**
   > **${prefix}yarışma**
   > **${prefix}market**
   > **${prefix}drop**
   > **${prefix}adamasmaca**
   `)
       
   .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
   .setFooter(`${prefix}yardım <komut>`)

  msg.edit(maviembed)
  r.users.remove(message.author.id);
 })

  const sari = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;
     
      
   const reacts = msg.createReactionCollector(sari,);

       reacts.on('collect', r => {
        const sariembed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${client.user.username}`)
        .setColor("#F0FFFF")
        .setDescription(`
    
    **Menü Başlıkları**
    > **${prefix}reactionrole**
    > **${prefix}sayaç**
    > **${prefix}prefix**
    > **${prefix}otorol**
    > **${prefix}ara**
    > **${prefix}mod-log**
    `)
        
    .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
    .setFooter(`Ayarlanabilir komutları kaldırmak için ${prefix}<komut> sıfırla kullanın.`)
   msg.edit(sariembed)
   r.users.remove(message.author.id);
  })

 })
  })

})
 })  

 if (args[0] == "para") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile paranıza bakarsınız.`)
 message.channel.send(paratanımı)
} 

if (args[0] == "drop") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile bulunduğunuz kanala "drop" bırakırsınız. 
  Emojiye ilk tıklayan ödülü alır.`)
 message.channel.send(paratanımı)
} 


if (args[0] == "reactionrole") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile emojiye basınca rol verme sistemi yapabilirsiniz.`)
 message.channel.send(paratanımı)
} 

if (args[0] == "yarışma") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komutun mesajını doğru yazarsanız 10TL kazanabilirsiniz. 
  > Eğer yanlış kullanırsanız hiç bir şey olmaz.`)
 message.channel.send(paratanımı)
} 


if (args[0] == "market") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Pusula Marketi'nden alış-veriş yaparsınız.
`)
 message.channel.send(paratanımı)
} 
if (args[0] == "adamasmaca") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile adam asmaca oynarsınız.`)
 message.channel.send(paratanımı)
} 

if (args[0] == "sayaç") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile sunucunuza sayaç ayarlarsınız.`)
 message.channel.send(paratanımı)
} 

if (args[0] == "prefix") {

  const paratanımı = new Discord.MessageEmbed()
  .setTimestamp()
  .setTitle(`${client.user.username}`)
  .setColor("#F0FFFF")
  .setDescription(`> Bu komut ile sunucunuza özel prefix ayarlarsınız.`)
 message.channel.send(paratanımı)
} 

  if (args[0] == "botlist") {

   const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${client.user.username}`)
        .setColor("#F0FFFF")
        .setDescription(`
    
    **Menü Başlıkları**
    > **${prefix}botekle**
    > **${prefix}log-kanal**
    > **${prefix}onaylama-kanalı**
    > **${prefix}bot-ekleme-kanalı**
    > **${prefix}geliştirici-rolü**
    `)
        
    .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
    .setFooter(`Pusula'nın eşsiz BotList komutları, emojiyle bot reddetme bile var!`)
 
   message.channel.send(kirmizi)
    } 
  if (args[0] == "ekonomi") {
    const maviembed = new Discord.MessageEmbed()
       .setTimestamp()
       .setTitle(`${client.user.username}`)
       .setColor("#F0FFFF")
       .setDescription(`
   
   **Ekonomi Komutları**
   > **${prefix}para**
   > **${prefix}yarışma**
   > **${prefix}market**
   > **${prefix}drop**
   > **${prefix}adamasmaca**
   `)
       
   .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
   .setFooter(`${prefix}yardım <komut>`)

  message.channel.send(maviembed)
} 
 
   if (args[0] == "moderasyon") {

        const sariembed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`${client.user.username}`)
        .setColor("#F0FFFF")
        .setDescription(`
    
    **Menü Başlıkları**
    > **${prefix}reactionrole**
    > **${prefix}sayaç**
    > **${prefix}prefix**
    > **${prefix}otorol**
    `)
        
    .setThumbnail("https://camo.githubusercontent.com/836f222edb36d458e06e5d7d987097578ad36b461dddae7ade693a0ab85db561/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3935323137333237363734393234363536342f3935363738323133383134333936313132382f6577696e672e706e67")
    .setFooter(`${prefix}yardım <komut>`)

   message.channel.send(sariembed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım2", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsünü Gösterir.",
  usage: "yardım"
};
