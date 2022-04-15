const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let config = {
    "owner": "",
    "token": "",
    "vk": "vk rol id",
    "dc": "dc rol id",
};
// proje bu kendiniz kullanarak geliştirebilirsiniz
// kendiniz daha çok buton eklemek için tam bu yazının altındaki yere let vk let dc yazan yerin altına bir tane daha mesaj button açarak ayarları yaptıktan sonra aşağıdaki click button eventinin
// bir ifini kopyala yapıştır yaparak en baskaki kado id iy değiştirip içinde rol ekleme yerine açmak istediğiniz buttonuna basılınca vermek istediği rolu girib bu kadar çpğalmış olur
client.on("message", async(kado) => {
    const args = kado.content.split(" ");
    const command = args.shift();
    if (command === "!button" && config.owner == kado.author.id) {
        let vk = new disbut.MessageButton().setStyle('green').setLabel('Vampir Köylü').setID('vk')
        let dc = new disbut.MessageButton().setStyle('red').setLabel('Doğruluk Cesaretlik').setID('dc')
        kado.channel.send('Aşağıdaki butonlardan oynadığınız rolu alabilirisiniz iyi eğlenceler!', { buttons: [vk, dc] });
    }
});

client.on('clickButton', async(kado) => {
    if (kado.id === 'vk') {
        if (kado.clicker.member.roles.cache.get(config.vk)) {
            await kado.clicker.member.roles.remove(config.vk);
            await kado.reply.edit("Vampir Köylü rolü üzerinizden alındı.")
        } else {
            await kado.clicker.member.roles.add(config.vk);
            await kado.reply.edit("Vampir Köylü rolü üzerinize verildi.")
        }
    }
    if (kado.id === 'dc') {
        if (kado.clicker.member.roles.cache.get(config.dc)) {
            await kado.clicker.member.roles.remove(config.dc);
            await kado.reply.edit("Doğruluk Cesaret rolü üzerinizden alındı.")
        } else {
            await kado.clicker.member.roles.add(config.dc);
            await button.reply.edit("Doğruluk Cesaret rolü üzerinize verildi.")
        }

    }
});


client.login(config.token)
