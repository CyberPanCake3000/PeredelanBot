import { Context } from 'telegraf';

class CommandHandler {
  public static start(ctx: Context) {
      ctx.reply('Welcome to the bot!');
  }

}

export default CommandHandler;