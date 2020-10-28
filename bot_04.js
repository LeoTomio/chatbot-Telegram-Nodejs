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
    const nome = ctx.message.from.first_name + ' ' + ctx.message.from.last_name
    ctx.reply('Seja bem vindo ${nome} !')
})
//Evento de texto
bot.on('text', ctx =>{
    ctx.reply(`Texto: '${ctx.message.text}' recebido com sucesso`)
})

//Evento de localização
bot.on('location', ctx =>{
    const location
    ctx.reply(`Sei que você está em ${location.latitude} e Longitude: ${location.longitude}`)
})

//Evento de contato

bot.on('contact', ctx =>{
    const contact = ctx.message.contact
    console.log(contact)
    ctx.reply(`vou guardar o contato de ${contact.first_name} e telefone ${contact.phone_number}`)

})

//Evento de voz
bot.on('voice', ctx =>{
    const voice = ctx.message.voice
    console.log(voice)
    ctx.reply(`Audio recebido, ele possui ${voice.duration}`)
})

//Evento de Foto

bot.on('photo', ctx => {
    const photo = ctx.message.photo
    const legenda = ctx.message.caption
    console.log(photo)

    for([i, ft]of photo.entries()){
    await ctx.reply(`foto ${i} tem resolução de ${ft.width}x${ft.height}`)
    }
    ctx.reply(`Legenda: ${legenda}`)
})

//Evento de figurinha (sticker)
bot.on('sticker', ctx => {
    const figurinha = ctx.message.sticker
    console.log(figurinha)
    ctx.reply(`Você enviou uma figurinha correspondente ${figurinha.emoji} do pacote ${figurinha.set_name}`)

})

//Evento de Gif Animado
bot.on('animation', ctx =>{
    const animation = ctx.message.animation
    console.log(animation)
    ctx.reply(`Esta animação dura ${animation.duration}s e o tamanho do arquiv é de ${animation.file_size} bytes`)
})

//Executando o bot
bot.launch()