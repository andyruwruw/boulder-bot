// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandOptionType,
} from 'discord.js';

// Local Imports
import { CommandOption } from './command-option';

export class NumberParameter extends CommandOption {
  /**
   * Instantiates a command option.
   *
   * @constructor
   * @param {boolean} [required = false] Whether this option is required.
   */
  constructor(required = false) {
    super(required);
  }

  /**
   * Converts the command into ApplicationCommandOptionData for uploading to Discord.
   *
   * @returns {ApplicationCommandOptionData} Discord accepted object for command.
   */
  create(): ApplicationCommandOptionData {
    return {
      type: this.getType(),
      name: this.getKey(),
      description: this.getDescription(),
      required: this.isRequired(),
    };
  }

  /**
   * Retrieves the Command's type.
   *
   * @returns {number} Type of the Command.
   */
  getType(): ApplicationCommandOptionType.Number {
    return ApplicationCommandOptionType.Number;
  }
}
