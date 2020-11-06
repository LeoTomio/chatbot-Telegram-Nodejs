const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
//Escutando o comando /start
bot.start(ctx => {
   const nome = ctx.message.from.first_name + ' ' + ctx.message.from.last_name
   ctx.reply(`Seja bem vindo ${nome}!`)
})
 
//Evento de texto
bot.on('text', ctx => {
   ctx.reply(`Texto: '${ctx.message.text}' recebido com sucesso`)
})
 
//Evento de localização
bot.on('location', ctx => {
   const location = ctx.message.location
   ctx.reply(`Sei que você está na Latitude: ${location.latitude} e Longitude: ${location.longitude}`)
})
 
//Evento de contato
bot.on('contact', ctx => {
  const contact = ctx.message.contact
  console.log(contact)
  ctx.reply(`Vou lembrar do(a)
      ${contact.first_name} (${contact.phone_number})`)
})
 
//Evento de voz
bot.on('voice', ctx => {
  const voice = ctx.message.voice
  console.log(voice)
  ctx.reply(`Audio recebido, ele possui ${voice.duration} segundos`)
})
 
//Evento de Foto
bot.on('photo', async ctx => {
   const photo = ctx.message.photo
   const caption = ctx.message.caption
   console.log(photo)
   // photo.forEach( (ft, i) => {
   //      ctx.reply(`Foto ${i} tem resolução de ${ft.width}x${ft.height}`)
   // })
   for ([i, ft] of photo.entries()) {
       await ctx.reply(`Foto ${i} tem resolução de ${ft.width}x${ft.height}`)
   }
   ctx.reply(`Legenda: ${caption}`)
})
 
//Evento de Figurinha (Sticker)
bot.on('sticker', ctx => {
  const sticker = ctx.message.sticker
  console.log(sticker)
  ctx.reply(`Estou vendo que você enviou
      o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})
//Evento de Gif Animado
bot.on('animation', ctx => {
   const animation = ctx.message.animation
   console.log(animation)
   ctx.reply(`Esta animação dura ${animation.duration}s
      e o tamanho do arquivo é de ${animation.file_size} Bytes`)
})
 
//Executar o bot
bot.launch()