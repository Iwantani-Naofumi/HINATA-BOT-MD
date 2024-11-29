const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ENTER YOUR SESSION HERE",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/1fwlq02.jpeg,",
ALIVE_MSG: process.env.ALIVE_MSG || "𝖧𝖨𝖨 𝖣𝖤𝖠𝖱 𝖨𝖬 𝖮𝖭𝖫𝖨𝖭𝖤 𝖨，𝖬 『𝐇𝐈𝐍𝐀𝐓𝐀-𝐁𝐎𝐓』 𝖶𝖧𝖠𝖳𝖲𝖠𝖯𝖯 𝖡𝖮𝖳.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺『𝐇𝐈𝐍𝐀𝐓𝐀-𝐁𝐎𝐓』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
