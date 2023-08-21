import { Scenes, session, Telegraf } from 'telegraf';
import { startWizard } from './actions/start';

class TelegramBot {
  private bot: Telegraf<Scenes.WizardContext>;
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
    this.bot = new Telegraf(token);
    this.bot.use(session())
    this.configureCommandHandlers();
  }

  public start() {
    const stage = new Scenes.Stage([startWizard]);

    this.bot.use(stage.middleware());

    this.bot.start(Scenes.Stage.enter<Scenes.WizardContext>('startWizard'));
  }

  public configureCommandHandlers(){
    this.bot.action('help', (ctx) => ctx.reply('We can help!'));
    this.bot.action('become_sponsor', (ctx) => ctx.reply('Do you want to be a sponsor?'));
    this.bot.action('become_participant', (ctx) => ctx.reply('Do you want to be participant?'));

  }


  public launch() {
    this.bot.launch();
  }
}

export default TelegramBot;
