import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `
┏━━━━━━━━━━━━━━━━━━┓
┃ *𝗩𝗔𝗟𝗧𝗛𝗢𝗠 𝗕𝗢𝗧🤟*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣⟣☯︎ *𝗢𝗪𝗡𝗘𝗥:* 𝗩𝗔𝗟𝗧𝗛𝗢𝗠 𝗕𝗢𝗧🤟
┣⟣☯︎ *𝗡𝗨𝗠𝗘𝗥𝗢:* +527223931652
┗━━━━━━━━━━━━━━━━━━┛

*┃𝗕 𝗢 𝗧 𝗠 𝗘 𝗡 𝗨 𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥𝗘𝗦*┃
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗢 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥✨*
┃Enable(activar) Disable(desactivar)┃
┣⚙️ _.enable *welcome*_
┣⚙️ _.disable *welcome*_
┣⚙️ _.enable *antiviewonce*_
┣⚙️ _.disable *antiviewonce*_
┣⚙️ _.enable *modoadmin*_
┣⚙️ _.disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗔𝗝𝗨𝗦𝗧𝗘𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦 ✨* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⚙️ _.add *<numero>*_
┣⚙️ _.kick *<@tag>*_
┣⚙️ _.kick2 *<@tag>*_
┣⚙️ _.listanum *<texto>*_
┣⚙️ _.kicknum *<texto>*_
┣⚙️ _.grupo *<abrir / cerrar>*_
┣⚙️ _.grouptime *<opcion> <tiempo>*_
┣⚙️ _.promote *<@tag>*_
┣⚙️ _.demote *<@tag>*_
┣⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⚙️ _.demote *<@tag>*_
┣⚙️ _.infogroup_
┣⚙️ _.resetlink_
┣⚙️ _.link_
┣⚙️ _.setname *<texto>*_
┣⚙️ _.setdesc *<texto>*_
┣⚙️ _.invocar *<texto>*_
┣⚙️ _.setwelcome *<texto>*_
┣⚙️ _.setbye *<texto>*_
┣⚙️ _.hidetag *<texto>*_
┣⚙️ _.hidetag *<audio>*_
┣⚙️ _.hidetag *<video>*_
┣⚙️ _.hidetag *<imagen>*_
┣⚙️ _.warn *<@tag>*_
┣⚙️ _.unwarn *<@tag>*_
┣⚙️ _.listwarn_
┣⚙️ _.fantasmas_
┣⚙️ _.destraba_
┣⚙️ _.setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗕𝗨𝗦𝗖𝗔𝗥 ✨*
┃ 𝗩𝗔𝗟𝗧𝗛𝗢𝗠 𝗕𝗢𝗧🤟 ≡┃
┣👤 _.githubsearch *<texto>*_
┣👤 _.pelisplus *<texto>*_
┣👤 _.modapk *<texto>*_
┣👤 _.stickersearch *<texto>*_
┣👤 _.stickersearch2 *<texto>*_
┣👤 _.animeinfo *<texto>*_
┣👤 _.google *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗙𝗥𝗔𝗦𝗘𝗦 𝗢 𝗣𝗜𝗥𝗢𝗣𝗢𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⚫️ _.piropo_
┣⚫️ _.consejo_
┣⚫️ _.fraseromantica_
┣⚫️ _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃✨ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟠 _.clima *<país> <ciudad>*_
┣🟠 _.encuesta *<texto1|texto2...>*_
┣🟠 _.ocr *<responde a imagen>*_
┣🟠 _.hd *<responde a imagen>*_
┣🟠 _.acortar *<enlace / link / url>*_
┣🟠 _.calc *<operacion math>*_
┣🟠 _.horario_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟣 _.sticker *<responder a imagen o video>*_
┣🟣 _.kiss *<@tag>*_
┣🟣 _.dado_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
*┃ ✨ 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ✨*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣🟣 _.play *<texto de la canción >*_
┗━━━━━━━━━━━━━━━━┛
*☑️ SI NO FUNCIONA BOT MANDEN DM*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
