const Discord = require("discord.js") 
const bot = new Discord.Client();
const prefix = ".";



bot.on('ready', async => {
    console.log("Bot crée par Zey : https://github.com/imzey (sous licence)")
})

bot.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
             if (cmd === prefix + "mp"){

                // mettre l'id de vous pour que vous seulement avez accès au bot
        if(message.author.id != "863772816251944971") return;
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                

	})
            
            }
})


// token du bot a la place de "token"
bot.login("token").catch(err=> console.log("Token Incorrect"));

