import { Telegraf, Context, Markup } from 'telegraf';
import { config } from 'dotenv';
config(); 

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');

bot.start((ctx) => ctx.reply('Привет!'));

bot.on('text', (ctx) => {
  const message = ctx.message?.text || '';

  const menuButtons = [
    [{ text: 'Button 1' }, { text: 'Button 2' }],
    [{ text: 'Button 3' }, { text: 'Button 4' }],
  ];

  const keyboardExtra = Markup.keyboard(menuButtons);

  const messageText = `Вы написали - ${message}`;
  ctx.reply(messageText, keyboardExtra);
});

bot.launch();
