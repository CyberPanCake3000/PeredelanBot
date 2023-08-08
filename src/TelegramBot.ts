import { Telegraf, Context } from 'telegraf';

class TelegramBot {
  private bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');
  }

  public start() {
    this.bot.start((ctx) => ctx.reply('Welcome to the bot!'));
  }

  public launch() {
    this.bot.launch();
  }
}

export default TelegramBot;