// Packages
import { ApplicationCommandOptionChoiceData } from 'discord.js';

// Local Imports
import { NumberParameter } from '../generic/options/number-parameter';

class LongitudeParameter extends NumberParameter {
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
    return 'Longitude of the item.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return 'longitude';
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
export const OptionalLongitudeParameter = new LongitudeParameter();
export const RequiredLongitudeParameter = new LongitudeParameter(true);
