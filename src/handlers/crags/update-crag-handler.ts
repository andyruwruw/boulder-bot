// Packages
import { CommandInteraction } from 'discord.js';

// Local Imports
import AbstractHandler from '../abstract-handler';
import Monitor from '../../helpers/monitor';

/**
 * Handles crag creation.
 */
export class UpdateCragHandler extends AbstractHandler<CommandInteraction> {
  /**
   * Handles the event.
   * 
   * @param {CommandInteraction} payload Event payload.
   */
  async execute(payload: CommandInteraction): Promise<void> {
    let replied = false;

    try {
      console.log(payload);
    } catch (error) {
      const response = 'Something didn\'t work there';

      await Monitor.trace(
        CommandInteraction,
        `${error}`,
        Monitor.Layer.WARNING,
      );

      try {
        if (replied) {
          payload.editReply({
            content: response,
          });
        } else {
          payload.reply({
            content: response,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default UpdateCragHandler;
