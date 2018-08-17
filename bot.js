const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {
      if (message.author.bot) return;
      var prefix ="$$"
       if (message.content === prefix + "help-admin") {
        if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       message.channel.send('**تم ارسال رسالة في الخاص**');
  
  
  
  
   message.author.sendMessage(`
   **
  [❖═════اومر ادمن═══════❖]
  ❖ $$kick <mention > ➾  kickلي اعطاء شخص

  ❖ $$setvoice  لي انشاء روم فويس اونلاين
  
  ❖ $$say  ➾ يكرر الكلام الذي تقولة
  
  ❖ $$ban <mention> ➾ لي اعطاء شخص بان
  
  ❖ $$unban <mention> ➾ لي فك بان عن شخص
  
  ❖ $$clear ➾ لي مسح الشات
  
  ❖ $$mute <mention> ➾ لي اعطاء ميوت لي شخص
  
  ❖ $$ct <name> ➾ لي انشاء روم كتبي
  
  ❖ $$cv <name> ➾لي انشاء روم صوتي
  
  ❖ $$bc <message>  ➾ لي ارسال رسالة لي كل الاعضاء
  **
  `);
  
      }
  });

client.login(process.env.BOT_TOKEN);
