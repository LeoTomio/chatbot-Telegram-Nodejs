const env = require('./.env')
const Telegraf = require('telegraf')
const Axios = require('axios')
const Fs = require('fs')
const Path = require('path')
const downloadImage = require('./downloadImage')
 
//Inicialização do Bot
const bot = new Telegraf(env.token)
 
//Escutando o comando /start
bot.start(ctx => {
   ctx.reply("Envie uma imagem!")
})
 
//Evento de texto
bot.on('text', ctx => {
   ctx.reply("Envie uma imagem!")
})
 
//Evento de Foto
bot.on('photo', async ctx => {
   const photo = ctx.message.photo
   const caption = ctx.message.caption
   console.log(photo)
   for ([i, ft] of photo.entries()) {
       await ctx.reply(`Foto ${i} tem resolução de ${ft.width}x${ft.height}`)
   } 
   ctx.reply(`Quantidade de arquivos gerados: ${photo.length}`)
   ctx.reply(`Legenda: ${caption}`)
   const id = photo[0].file_id
   const res = await Axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
   const url = `${env.apiFileUrl}/${res.data.result.file_path}`
   const file_unique_id = res.data.result.file_unique_id
  
   await downloadImage(url, file_unique_id)
 
   //ctx.replyWithPhoto({url},{caption})
   const source = Path.resolve(__dirname, 'img', `${file_unique_id}.jpg`)
   console.log(source)
   await ctx.replyWithPhoto({source: Fs.createReadStream(source)},{caption})
})
//Executar o bot
bot.launch()