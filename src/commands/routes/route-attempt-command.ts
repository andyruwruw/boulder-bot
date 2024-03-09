// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import RouteAttemptDeleteCommand from './route-attempt-delete-command';
import RouteAttemptEditCommand from './route-attempt-edit-command';
import RouteAttemptLogCommand from './route-attempt-log-command';

/**
 * Create or interact with attempts.
 */
class RouteAttemptCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'attempt';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (interaction.options
      && interaction.options.data.length) {
      switch (interaction.options.data[0].name) {
        case RouteAttemptDeleteCommand.getKey():
          await RouteAttemptDeleteCommand.execute(interaction);
          break;
        case RouteAttemptEditCommand.getKey():
          await RouteAttemptEditCommand.execute(interaction);
          break;
        case RouteAttemptLogCommand.getKey():
          await RouteAttemptLogCommand.execute(interaction);
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
    return 'Create or interact with attempts.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return RouteAttemptCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      RouteAttemptDeleteCommand.create(),
      RouteAttemptEditCommand.create(),
      RouteAttemptLogCommand.create(),
    ] as ApplicationCommandOptionData[];
  }
}

export default RouteAttemptCommand;
