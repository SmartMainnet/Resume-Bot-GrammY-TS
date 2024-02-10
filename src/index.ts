import 'dotenv/config'
import { Bot, InlineQueryResultBuilder } from 'grammy'

import { i18nMiddleware } from './middlewares/plugins/index.js'
import { resumeInlineKeyboard } from './keyboards/inline_keyboard/index.js'
import { ContextType } from './types/index.js'

const { BOT_TOKEN } = process.env

const bot = new Bot<ContextType>(BOT_TOKEN!)

// plugins
bot.use(i18nMiddleware)

// inline query
bot.inlineQuery('Резюме', async ctx => {
  const inlineQuery = InlineQueryResultBuilder.article(
    'id-0',
    'Резюме: SmartMainnet',
    {
      reply_markup: resumeInlineKeyboard(),
    }
  ).text(ctx.t('resume'), {
    link_preview_options: { is_disabled: true },
  })

  await ctx.answerInlineQuery([inlineQuery], { cache_time: 1 })
})

// start bot
bot.start({
  onStart(botInfo) {
    console.log('botInfo: ', botInfo)
  },
  allowed_updates: ['inline_query'],
})
