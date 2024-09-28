//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURkekVMaVlyZDEwRG9uY1JMdVBhL0FyNm43S0dRQ0NBcEV5N0xRN1Jubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDB5eVBWbGZteERpQThJcitFV0pOcmM1MGV6SHlJa0tWT2ZkMHAwVkRrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTkxGK0hIVmNJRkZEMVY4Q0JuV0NCZzU1WnZxb0todXh2VGpyeEVCWUc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIR0xkSVZKMjRoR21vT0RnbHhlTUc1UGtkVnhpaHBKdUdPam5lYjY5M2xNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDMEI0UmswWTlnbjg3M0cweVZHSllxdXdmS0dQYkplSlRSamUreEcrbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzSk95OHN4WWxocHpzazBuRDlvdVpXNnVCT2NhWWluc2EzMVRhQmpqRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUZySW1uK3gxd0FDS3hNdzVDWmRCS1NnMUFjZHNaMGN3eHgwNXdvTlBrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUowdzlJVUFKd1h2WDgvTEdKTy9LdDV0V3VjUEt1Z2RucUNSWkd3R1dETT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFsM2o1RDQxWXROSkZSVWhpTHNlMVoyemczQUVESFFGQ0NaL1MreTR4NHlsdGVBZnpMbWlFL2NOYWNGdnVJNUt0bGdOM2YwelRxUXFNckxSMi9tU2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJ0RTZGK2ZQMXZoUldLSWNlajVzZWRHcGtXbTRHWEhYVmlFZU13MDdabEN3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjM5NjIxOTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODc0M0IyM0Q2NDcxODI3RTU5MjE2OEU0NzY1OEI1REIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzUwODY2MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2Mzk2MjE5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQ0MzOUI3QTA2QkM0NjU3NERDMzE0NjdDNzVDQUM2MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3NTA4NjYxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmZ19sNzZ3YVF5T3dMT3gxNE9CX0lRIiwicGhvbmVJZCI6IjM0NzhjYTVjLWIyMzMtNGRmMS1iYTQwLTJlM2UxMzRmOTU4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0N2sxd1AyWTZ6eWhxem9ETk5WenQ1MzdLVkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9RWXFOak5SdFEvL0ZMOGNzTXlmdUQ2enlNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRaQVNQNlJUIiwibWUiOnsiaWQiOiIyMzQ5MDYzOTYyMTkyOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaWtlY2h1a3d1bWljaGVhbDI3In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOblEzdjhCRUtYaDNyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyNVFUektRYkFjcW1va1cyLzV0aVJqRzdWZVNSZmkvcDdJRFlhR3kxVXk0PSIsImFjY291bnRTaWduYXR1cmUiOiJiRVBpbGlTOTRzbnVOdzlYWFJJRnB1YXpLc1JZcTZMNnVyc1NsLyttcmx3dk8ybzh2ZlBWcGVCQ2pCVUhrdTNDQ0MwRkpTRzg5bEtvdXR5eVp1UlpDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlpzeXBmSi9mQVU2c0h2RW5laFVrOHJQZXZOWUQvTW1lY1VXSDRrLzVDbkVBa3cvZHlMbFdaZnA0ZDFMVExCVnY2Zlp3RS96WHJPaklMcVE3S3hzaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYzOTYyMTkyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHVVRTh5a0d3SEtwcUpGdHYrYllrWXh1MVhra1g0djZleUEyR2hzdFZNdSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzUwODY1NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQU2QifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
