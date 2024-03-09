// Packages
import { ApplicationCommandOptionChoiceData } from 'discord.js';

// Local Imports
import { NumberParameter } from '../generic/options/number-parameter';

class DaysToDryParameter extends NumberParameter {
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
    return 'Roughly how many days this item takes to dry.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return 'days-to-dry';
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
export const OptionalDaysToDryParameter = new DaysToDryParameter();
export const RequiredDaysToDryParameter = new DaysToDryParameter(true);
