// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import CragCreateCommand from './crag-create-command';
import CragUpdateCommand from './crag-update-command';
import CragViewClimbsCommand from './crag-view-climbs-command';
import CragViewCommand from './crag-view-command';

/**
 * Commands for assigning discord.
 */
class CragCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'crag';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (interaction.options
      && interaction.options.data.length) {
      switch (interaction.options.data[0].name) {
        case CragCreateCommand.getKey():
          await CragCreateCommand.execute(interaction);
          break;
        case CragUpdateCommand.getKey():
          await CragUpdateCommand.execute(interaction);
          break;
        case CragViewClimbsCommand.getKey():
          await CragViewClimbsCommand.execute(interaction);
          break;
        case CragViewCommand.getKey():
          await CragViewCommand.execute(interaction);
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
    return 'Create or interact with Crags.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return CragCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      CragViewCommand.create(),
      CragCreateCommand.create(),
      CragUpdateCommand.create(),
      CragViewClimbsCommand.create(),
    ] as ApplicationCommandOptionData[];
  }
}

export default CragCommand;
