import { Telegraf, Context } from 'telegraf';
import CommandHandler from './CommandHandler';
import MessageHandler from './MessageHandler';

class TelegramBot {
  private bot: Telegraf<Context>;
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
    this.bot = new Telegraf(token);
  }

  public start() {
    this.bot.start((ctx) => ctx.reply('Welcome to the bot!'));
  }

  public launch() {
    this.bot.launch();
  }
}

export default TelegramBot;