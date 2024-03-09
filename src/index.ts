// Local Imports
import { DISCORD_INTENTS } from './config/discord';
import Environment from './helpers/environment';
import DiscordBot from './discord-bot';

const bot = new DiscordBot({ intents: DISCORD_INTENTS });
bot.login(Environment.getDiscordBotToken());
