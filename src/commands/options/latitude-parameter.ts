// Packages
import { ApplicationCommandOptionChoiceData } from 'discord.js';

// Local Imports
import { NumberParameter } from '../generic/options/number-parameter';

class LatitudeParameter extends NumberParameter {
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
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Latitude of the item.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return 'latitude';
  }

  /**
   * Retrieves the Command's choices.
   *
   * @returns {number} Choices for command.
   */
  getChoices(): ApplicationCommandOptionChoiceData<string>[] {
    return [];
  }
}

// Exports
export const OptionalLatitudeParameter = new LatitudeParameter();
export const RequiredLatitudeParameter = new LatitudeParameter(true);
