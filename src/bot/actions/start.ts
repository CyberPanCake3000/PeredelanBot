import { Scenes, Markup, Context } from 'telegraf';

const { WizardScene } = Scenes;

export const startWizard = new WizardScene(
  'start-wizard',
  (ctx) => {
    
        const keyboard = Markup.inlineKeyboard([
          [Markup.button.url('НАШ САЙТ', 'https://ru.wikipedia.org/')],
          [Markup.button.callback('ПОМОЩЬ', 'help')],
          [Markup.button.callback('спонсорство', 'become_sponsor')],
        ]);
  
        ctx.reply('Welcome to the bot! This is Peredelano Conf. Choose your action:', keyboard);
      
    ctx.reply('this is step 1');
    ctx.wizard.next();
  },
  (ctx) => {
    ctx.reply('this is step2');
    ctx.wizard.next();
  },
  // Add more steps
);