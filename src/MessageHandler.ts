import { Context } from 'telegraf';

class MessageHandler {
  public static handleMessage(ctx: Context) {
     ctx.reply('Your message is handled');
  }

}

export default MessageHandler;