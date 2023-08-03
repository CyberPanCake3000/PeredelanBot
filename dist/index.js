"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const bot = new telegraf_1.Telegraf(process.env.TELEGRAM_BOT_TOKEN || '');
bot.start((ctx) => ctx.reply('Hello! Welcome to your bot.'));
bot.on('text', (ctx) => {
    var _a;
    const message = ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) || '';
    ctx.reply(`You said: ${message}`);
});
bot.launch();
