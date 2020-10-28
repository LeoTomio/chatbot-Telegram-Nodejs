const env = require ('./.env')
const Telegraf = require ('Telegraf')
const bot = new Telegraf(env.token)

const gifTelegram = 'https://media.giphy.com/media/3o6MbrQELrt6NcJm5W/giphy.gif'

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date().toLocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})

// Diferentes tipos de respostas
bot.start(async ctx => {

//Resposta do tipo texto
    await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}!`)

//Resposta com video
    await ctx.reply ('Veja o video : https://www.youtube.com/watch?v=hsiENXo5q4o')

//Resposta com HTML
    await ctx.replyWithHTML('Pode ser usado tags <strong> Para negrito</strong> ou para <em>Italico</em>.<a href="http://sc.senai.br"> SENAI </a>  <code> Código </code>')

//Resposta em Markdown    
    await ctx.replyWithMarkdown('Dá pra esrever "em negrito", _em italico_ , `em código` ou  ```bloco de código ```. Também é possivel Link [SENAI] (http://sc.senai.br)')

//Resposta com foto
    await ctx.replyWithPhoto('http://picsum.photos/200/300/?random',{caption: 'Foto Aleatoria'})

//Resposta com localização
    await ctx.replyWithLocation(-27.115697, -48.9123907)

//Resposta com GIF animado
    await ctx.replyWithAnimation(gifTelegram)
})

bot.launch()