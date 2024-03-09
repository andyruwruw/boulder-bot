// Packages
import { ApplicationCommandOptionChoiceData } from 'discord.js';

// Local Imports
import { BooleanParameter } from '../generic/options/boolean-parameter';

class IsGymParameter extends BooleanParameter {
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
    return 'Whether this item is an indoor gym.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return 'is-gym';
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
export const OptionalIsGymParameter = new IsGymParameter();
export const RequiredIsGymParameter = new IsGymParameter(true);
