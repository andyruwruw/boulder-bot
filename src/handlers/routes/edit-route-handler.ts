// Packages
import { CommandInteraction } from 'discord.js';

// Local Imports
import AbstractHandler from '../abstract-handler';
import Monitor from '../../helpers/monitor';

/**
 * Edit a route's information.
 */
export class EditRouteHandler extends AbstractHandler<CommandInteraction> {
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
      await Monitor.trace(
        EditRouteHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export default EditRouteHandler;
