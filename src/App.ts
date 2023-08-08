import { Context, Telegraf } from 'telegraf';
import TelegramBot from './TelegramBot';
import CommandHandler from './CommandHandler';
import MessageHandler from './MessageHandler';

class App {
  private bot: Telegraf<Context>;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');
  }

  public setup() {
    this.bot.start(CommandHandler.start);
    this.bot.on('text', MessageHandler.handleMessage);
  }

  public launch() {
    this.bot.launch();
  }
}

export default App;