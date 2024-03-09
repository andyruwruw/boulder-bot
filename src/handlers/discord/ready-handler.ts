// Packages
import { Client } from 'discord.js';

// Local Imports
import {
  MESSAGE_INVITE_LINK,
  MESSAGE_READY,
} from '../../config/messages';
import { CommandManager } from '../../commands';
import { INVITE_LINK } from '../../config/discord';
import AbstractHandler from '../abstract-handler';
import Environment from '../../helpers/environment';
import Monitor from '../../helpers/monitor';

/**
 * Handles Discord bot ready.
 */
export class ReadyHandler extends AbstractHandler<Client> {
  /**
   * Handles the event.
   * 
   * @param {Client} payload Event payload.
   */
  async execute(payload: Client): Promise<void> {
    let replied = false;

    try {
      Monitor.log(
        ReadyHandler,
        MESSAGE_READY,
        Monitor.Layer.UPDATE,
      );

      Monitor.log(
        ReadyHandler,
        MESSAGE_INVITE_LINK(INVITE_LINK(Environment.getDiscordApplicationId())),
        Monitor.Layer.UPDATE,
      );
  
      // Register slash commands.
      CommandManager.instantiateCommands();
      await CommandManager.registerCommands(AbstractHandler.Discord);
    } catch (error) {
      await Monitor.trace(
        ReadyHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export default ReadyHandler;
