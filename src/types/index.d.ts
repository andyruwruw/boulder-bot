// Packages
import { Client } from 'discord.js';

/**
 * Basic Dictionary.
 */
export type Dictionary<T> = Record<string, T>;

/**
 * Discord bot.
 */
export type DiscordBotInterface = Client;
