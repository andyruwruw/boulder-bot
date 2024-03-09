// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import RouteAddCommand from './route-add-command';
import RouteEditCommand from './route-edit-command';

/**
 * Commands for climbing routes.
 */
class RouteCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'route';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (interaction.options
      && interaction.options.data.length) {
      switch (interaction.options.data[0].name) {
        case RouteAddCommand.getKey():
          await RouteAddCommand.execute(interaction);
          break;
        case RouteEditCommand.getKey():
          await RouteEditCommand.execute(interaction);
          break;
        default:
          return;
      }
    }
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Create or interact with routes.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return RouteCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      RouteAddCommand.create(),
      RouteEditCommand.create(),
    ] as ApplicationCommandOptionData[];
  }
}

export default RouteCommand;
