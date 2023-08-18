import TelegramBot from './bot/TelegramBot';
import DBManager from './services/DatabaseManager';

class App {
  private bot: TelegramBot;

  constructor() {
    const DB_CONN_STRING = process.env.DB_CONN_STRING || '';
    const db: DBManager = new DBManager(DB_CONN_STRING);

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

    if (!TELEGRAM_BOT_TOKEN) {
      console.error("Telegram bot token is missing. Please set the TELEGRAM_BOT_TOKEN environment variable.");
      process.exit(1);
    }

    this.bot = new TelegramBot(TELEGRAM_BOT_TOKEN);
  }

  public setup() {
    this.bot.start();
  }

  public launch() {
    this.bot.launch();
  }

}

export default App;