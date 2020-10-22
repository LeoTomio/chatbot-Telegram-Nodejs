const env = require ('./.env')
const Telegraf = require ('Telegraf')
const bot = new Telegraf(env.token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})
//escuta do comando /start  

bot.start(async ctx => {
const from = ctx.message.from
from.id = undefined
console.log(from)
if(from.username === 'leonardo'){
await ctx.reply(`Ola ${from.username},o seu nome é : ${from.first_name} ${from.last_name}!`)
}else{
    await ctx.reply('Não estou autorizado a conversar com estranhos')
}

})


//Evento de texto
bot.on('text',ctx => ctx.reply ('Alo ha mundo SENAI 2020'))

//Eveto de localização

bot.on('location', async ctx => {
    const location = ctx.message.location
    console.log(location)
    const lat = location.latitude
    const lon = location.longitude
    ctx.replyWithLocation(lat,lon)    
    ctx.reply(`https://www.google.com/maps/@${lat},${lon},17z`)
    ctx.reply(`Legal parça! Você esta em Lat:${lat} - Lon: ${lon}`)
})

bot.launch()