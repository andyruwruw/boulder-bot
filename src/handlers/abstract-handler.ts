// Local Imports
import UsedAbstractHandlerError from '../errors/used-abstract-handler-error';
import DiscordBot from '../discord-bot';

// Types
import { DatabaseInterface } from '../types/database';

/**
 * Abstract event handler.
 */
class AbstractHandler<T> {
  /**
   * Static reference to Discord Bot.
   */
  static Discord: DiscordBot;

  /**
   * Static reference to Database.
   */
  static Database: DatabaseInterface;

  /**
   * Sets static Discord instance.
   *
   * @param {DiscordBot} discord Discord instance. 
   */
  static setDiscord(discord: DiscordBot) {
    AbstractHandler.Discord = discord;
  }

  /**
   * Sets static Database instance.
   *
   * @param {DatabaseInterface} database Database instance. 
   */
  static setDatabase(database: DatabaseInterface) {
    AbstractHandler.Database = database;
  }

  /**
   * Handles the event.
   * 
   * @param {T} payload Event payload.
   */
  async execute(payload: T): Promise<void> {
    throw new UsedAbstractHandlerError();
  }
}

export default AbstractHandler;
