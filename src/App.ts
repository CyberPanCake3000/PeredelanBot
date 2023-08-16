import TelegramBot from './bot/TelegramBot';
import connectToDatabase from './services/DatabaseManager';

class App {
  private bot: TelegramBot;

  constructor() {
    const db = connectToDatabase();

    console.log(db);

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