//https://github.com/telegraf/telegraf/blob/develop/docs/examples/media-bot.js
const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
const gifTelegram = 'https://media.giphy.com/media/ya4eevXU490Iw/giphy.gif'
 
bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}! 😎`)
 
  await ctx.reply('Veja o vídeo https://www.youtube.com/watch?v=3a9FsVUjOlQ')
 
  await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
      <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
      <a href="http://www.google.com">Google</a>`)
 
  await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
      + ' _de várias_ `formas` ```possíveis```'
      + ' [Google](http://www.google.com)')
 
 
  await ctx.replyWithPhoto('https://picsum.photos/200/300/?random',
      { caption: 'Foto com legenda' })
 
  await ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' })
 
  await ctx.replyWithLocation(-27.1156927,-48.9123907)
 
  await ctx.replyWithAnimation(gifTelegram)
 
  //await ctx.replyWithVideo('URL de um vídeo')
})
bot.launch()