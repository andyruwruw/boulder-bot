// Packages
import { Message } from 'discord.js';

// Local Imports
import AbstractHandler from '../abstract-handler';
import Monitor from '../../helpers/monitor';

/**
 * Handles Discord messages.
 */
export class MessageCreateHandler extends AbstractHandler<Message> {
  /**
   * Handles the event.
   * 
   * @param {Message} payload Event payload.
   */
  async execute(payload: Message): Promise<void> {
    let replied = false;

    try {
      if (payload.author.bot) {
        return;
      }
    } catch (error) {
      await Monitor.trace(
        MessageCreateHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export default MessageCreateHandler;
