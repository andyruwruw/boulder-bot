// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import SessionsDeleteCommand from './sessions-delete-command';
import SessionsEditCommand from './sessions-edit-command';
import SessionsLogCommand from './sessions-log-command';

/**
 * Commands for climbing sessions.
 */
class SessionCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'session';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (interaction.options
      && interaction.options.data.length) {
      switch (interaction.options.data[0].name) {
        case SessionsDeleteCommand.getKey():
          await SessionsDeleteCommand.execute(interaction);
          break;
        case SessionsEditCommand.getKey():
          await SessionsEditCommand.execute(interaction);
          break;
        case SessionsLogCommand.getKey():
          await SessionsLogCommand.execute(interaction);
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
    return 'Create or interact with sessions.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return SessionCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      SessionsDeleteCommand.create(),
      SessionsEditCommand.create(),
      SessionsLogCommand.create(),
    ] as ApplicationCommandOptionData[];
  }
}

export default SessionCommand;
