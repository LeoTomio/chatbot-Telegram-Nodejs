const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
bot.use(async (ctx, next) => {
 const start = new Date()
 await next()
 const ms = new Date() - start
 const dataEHora = new Date().toLocaleString();
 console.log(`${dataEHora}\nTempo de resposta: ${ms}ms`, )
})
 
bot.start( async (ctx) => {
 const from = ctx.message.from
 from.id = undefined //Para ocultar o id
 console.log(from)
 await ctx.reply(`Olá ${from.username}, o seu nome é: \
 ${from.first_name} ${from.last_name}!`) 
})

bot.start( async (ctx) => {
 const from = ctx.message.from
 from.id = undefined //Para ocultar o id
 console.log(from)
 if(from.username === 'tarcnux'){
   await ctx.reply(`Olá ${from.username}, o seu nome é: \
 ${from.first_name} ${from.last_name}!`)
 }else {
   ctx.reply('Não estou autorizado a conversar com estranhos.')
 }
})

 
bot.on('text', (ctx) => ctx.reply('Alo Ha Mundo!'))
 
bot.on('location', async ctx => {
 const location = ctx.update.message.location
 const lat = location.latitude
 const lon = location.longitude
 console.log(location)
 await ctx.reply(`Entendido, você está em
     Lat: ${lat}, Lon: ${lon}!`)
 await ctx.replyWithLocation(lat, lon) 
})
 
bot.launch()

