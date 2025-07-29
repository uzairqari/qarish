const fs = require('fs')

// >~~~~~~~~~~ Owner Setting ~~~~~~~~~~~< //
global.owner = "6285742314174"
global.ownername = "XyzzMoods - Deruhu"
global.botname = "Shadow Executive"
global.footer = "© XyzzMoods - Deruhu"
global.packname = "XyzzMoods - Deruhu"

// >~~~~~~~~~~ System Setting ~~~~~~~~~~~< //
global.version = "1.0.0"
global.idch = "120363403742460170@newsletter"
global.prefa = ["", "/"]

// >~~~~~~~~~~ Thumbnail Setting ~~~~~~~~~~~< //
global.thumb = "https://files.catbox.moe/5b6yia.jpg"

// >~~~~~~~~~~ Message Setting ~~~~~~~~~~~< //
global.mess = {
owner: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner!_*", 
ownerprem: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner & User Premium!_*"
}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
