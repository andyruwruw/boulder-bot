// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  ApplicationCommandSubGroupData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { LogSessionHandler } from '../../handlers';
import { SubCommand } from '../generic/sub-command';

/**
 * Log a session.
 */
class SessionLogCommand extends SubCommand {
  /**
   * The Command's key.
   */
  static key: string = 'log';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    LogSessionHandler.execute(interaction);
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Log a session.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return SessionLogCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[]} Options of the Command.
   */
  getOptions(): Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[] {
    return [
    ] as Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[];
  }
}

export default new SessionLogCommand();
