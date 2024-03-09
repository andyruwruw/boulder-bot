// Packages
import {
  Client,
  ClientOptions,
  Interaction,
  Message,
} from 'discord.js';

// Local Imports
import {
  ReadyHandler,
  ErrorHandler,
  InteractionHandler,
  MessageCreateHandler,
} from './handlers';
import { getDatabase } from './database';
import AbstractHandler from './handlers/abstract-handler';

/**
 * Our little buddy.
 */
class DiscordBot extends Client {
  /**
   * Static reference to database.
   * 
   * @type {DatabaseInterface}
   */
  static Database = getDatabase();

  /**
   * Instantiates the Discord Bot, calling discord.js' Client constructor.
   *
   * @constructor
   * @param {ClientOptions} options Options for the client.
   */ 
  constructor(options: ClientOptions) {
    super(options);

    // Connect handlers.
    AbstractHandler.setDiscord(this);
    this._setEventHandlers();

    AbstractHandler.setDatabase(DiscordBot.Database);
    DiscordBot.Database.connect();
  }

  /**
   * Assigns event listeners for Discord and websockets.
   * 
   * @access private
   */
  private _setEventHandlers(): void {
    // When the Discord bot is ready.
    this.on(
      'ready',
      (client: Client) => (ReadyHandler.execute(client)),
    );
    // On a Discord bot error.
    this.on(
      'error',
      (error: Error) => (ErrorHandler.execute(error)),
    );
    // On a Discord interaction.
    this.on(
      'interactionCreate',
      (interaction: Interaction) => (InteractionHandler.execute(interaction)),
    );
    // On a Discord message.
    this.on(
      'messageCreate',
      (message: Message) => (MessageCreateHandler.execute(message)),
    );
  }
}

export default DiscordBot;
