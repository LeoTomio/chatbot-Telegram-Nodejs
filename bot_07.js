const env = require('./.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const tecladoAlimentos = Markup.keyboard([
  ['🐷 Porco', '🐮 Vaca', '🐑 Carneiro'],
  ['🐔 Galinha', '🐣 Ovo'],
  ['🐟 Peixe', '🐙 Frutos do mar'],
  ['🍄 Eu sou vegetariano']
]).resize().oneTime().extra()
bot.start(async ctx => {
  await ctx.reply(`Seja bem vindo, ${ctx.message.from.first_name}!`)
  await ctx.reply(`Qual bebida você prefere?`,
      Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})
bot.hears(['Coca', 'Pepsi'], async ctx => {
   console.log(ctx.match)
  await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`)
  await ctx.reply('Qual a sua carne predileta?', tecladoAlimentos)
})
bot.hears('🐮 Vaca', ctx => ctx.reply('A minha predileta também'))
bot.hears('🍄 Eu sou vegetariano',
  ctx => ctx.reply('Parabéns, mas eu ainda gosto de carne!'))
bot.on('text', ctx => ctx.reply('Legal!'))
 
bot.launch()