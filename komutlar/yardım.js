const Discord = require("discord.js");
exports.run = (client, message) => {
  const motionEmbed = new Discord.MessageEmbed()

    .setAuthor(`${client.user.username} `, client.user.avatarURL)
    .setColor("RED")
    .setImage("https://cdn.discordapp.com/attachments/834125768787099719/834162663993901126/standard.gif")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/790999702765961258/791775226186563635/6faf3b2ff385f75cc6b46e61e60c1979.gif"
    )
    .setDescription(
      `Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!` +
        "\n\n `s!botbilgi`= **Yazarak Botun İstatistiklerine Ulaşa Bilirsiniz.** \n `s!davet`= **Yazarak Botun Davet Linkini Alırsınız. \n `s!oyver`= Botumuza Oy verebilirsin**"
    )
    .addField(
      ` 💎 Komutlar`,
      `
 
 | **s!eğlence:** Eğlence Menüsüne Bakarsınız.
 | **s!moderasyon:** Botun Moderasyon Komutlarına Bakarsınız.
 | **s!kullanıcı:** Kullanıcı komutlarını görürsünüz.
 | **s!logomenü:** Botun Logo Yapma Komutlarına Bakarsınız.
 | **s!abonerolsistemi:** Ayarlanabilir abone rol sistemi 
 | **s!website:** Botumun Web Sİtesine Ulaşabilirsiniz.  

`)



    .addField(
      ` 💎  Bilgilendirme`,
      `
 | **Saber Bot Her Gün Güncelleniyor!**.
 | **Botu Ekleyerek Bize Destek Çıkmış Olursunuz.** `
    )
  
  .addField(
      `** 📌 Bağlantılar  **`,
      `>  » [Destek Sunucusu](https://discord.gg/2qFqrS8X5z) \n >  » [Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=919172677380497428&permissions=8&scope=bot) \n > » [Oy Verebilirsiniz](https://top.gg/bot/791609110658547782/vote) `
    )
    .setFooter(
      `
${message.author.username} Tarafından İstendi.`,
      message.author.avatarURL
    );
  return message.channel.send(motionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["h"],
  permLevel: 0
};


exports.help = {
  name: "yardım",
  description: ".",
  usage: "yardım"
};
