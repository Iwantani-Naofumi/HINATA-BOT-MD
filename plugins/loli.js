const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "loli",
    alias: ["lolii"],
    desc: "Fetch a random anime girl image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://api.waifu.pics/sfw/waifu`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.url }, caption: '👸 *ʜɪɴᴀᴛᴀ ʙᴏᴛ ᴍᴅ Rᴀɴᴅᴘᴍ Aɴɪᴍᴇ Gɪʀʟs ⵊᴍᴀɢᴇs* 👸\n\n\n *🧬©ʜɪɴᴀᴛᴀ ʙᴏᴛ ᴍᴅ ʙʏ 𝙰𝙺𝙰𝚂𝙷𝙸 𝚂𝙰𝚂𝙰𝙺𝙸*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`*Error Fetching Anime Girl image*: ${e.message}`);
    }
});
