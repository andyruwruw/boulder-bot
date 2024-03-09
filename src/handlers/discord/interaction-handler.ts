// Packages
import { Interaction } from 'discord.js';

// Local Imports
import { CommandManager } from '../../commands';
import AbstractHandler from '../abstract-handler';
import Monitor from '../../helpers/monitor';

/**
 * Handles Discord interactions.
 */
export class InteractionHandler extends AbstractHandler<Interaction> {
  /**
   * Handles the event.
   * 
   * @param {Interaction} payload Event payload.
   */
  async execute(payload: Interaction): Promise<void> {
    let replied = false;

    try {
      await CommandManager.handleInteraction(payload);
    } catch (error) {
      await Monitor.trace(
        InteractionHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export default InteractionHandler;
