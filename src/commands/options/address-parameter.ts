// Packages
import { ApplicationCommandOptionChoiceData } from 'discord.js';

// Local Imports
import { StringParameter } from '../generic/options/string-parameter';

class AddressParamater extends StringParameter {
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
    return 'Address of the item.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return 'address';
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
export const OptionalAddressParamater = new AddressParamater();
export const RequiredAddressParamater = new AddressParamater(true);
