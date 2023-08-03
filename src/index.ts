import { Telegraf } from 'telegraf';
import { config } from 'dotenv';
config(); 

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');

bot.start((ctx) => ctx.reply('Hello! Welcome to your bot.'));

bot.on('text', (ctx) => {
  const message = ctx.message?.text || '';
  ctx.reply(`You said: ${message}`);
});

bot.launch();
