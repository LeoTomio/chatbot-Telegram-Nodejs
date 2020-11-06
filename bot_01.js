//https://telegraf.js.org/#/?id=telegram-token
const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
 
//Middleware - Chain of Responsibility
bot.use(async (ctx, next) => {
 const start = new Date()
 await next()
 const ms = new Date() - start
 const dataEHora = new Date().toLocaleString();
 console.log(`${dataEHora}\nTempo de resposta: ${ms}ms`, )
})
 
bot.on('text', (ctx) => ctx.reply('Salve'))
bot.launch()