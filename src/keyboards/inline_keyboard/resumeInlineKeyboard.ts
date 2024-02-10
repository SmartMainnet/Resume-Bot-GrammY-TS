import { InlineKeyboard } from 'grammy'

export const resumeInlineKeyboard = () => {
  return new InlineKeyboard()
    .url('Открыть GitHub', 'https://github.com/SmartMainnet')
    .row()
    .switchInline('Переслать', 'Резюме')
}
