const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Akashi Sasaki*

> *HINATA-BOT-MD REPO:*
*|* *https://github.com/Iwantani-Naofumi/Hinata-Bot-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41*
*╰──────────────●●►*

> *CREATED BY AKASHI SASAKI*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "KᴇʀᴍCʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'HINATA-BOT-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Iwantani-Naofumi/Hinata-Bot-MD" ,
thumbnailUrl: "https://i.imgur.com/1fwlq02.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
