// Packages
import {
  ApplicationCommandOptionData,
  ApplicationCommandSubCommandData,
  ApplicationCommandSubGroupData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { RequiredCragKeyParameter } from '../options/crag-key-parameter';
import { CreateCragHandler } from '../../handlers';
import { SubCommand } from '../generic/sub-command';
import { OptionalLocaleParameter } from '../options/locale-parameter';
import { OptionalStateParameter } from '../options/state-parameter';
import { RequiredNameParameter } from '../options/name-parameter';
import { OptionalDescriptionParameter } from '../options/description-parameter';
import { OptionalLongitudeParameter } from '../options/longitude-parameter';
import { OptionalLatitudeParameter } from '../options/latitude-parameter';
import { OptionalElevationParameter } from '../options/elevation-parameter';
import { OptionalDaysToDryParameter } from '../options/days-to-dry-parameter';
import { OptionalAddressParamater } from '../options/address-parameter';
import { OptionalIsGymParameter } from '../options/is-gym-parameter';

/**
 * Create a new crag in the database.
 */
class CreateCragCommand extends SubCommand {
  /**
   * The Command's key.
   */
  static key: string = 'create';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    CreateCragHandler.execute(interaction);
  }

  /**
   * Retrieves the description of the command.
   *
   * @returns {string} Description of the command.
   */
  getDescription(): string {
    return 'Creates a new Crag.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return CreateCragCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[]} Options of the Command.
   */
  getOptions(): Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[] {
    return [
      RequiredCragKeyParameter.create(),
      RequiredNameParameter.create(),
      OptionalLocaleParameter.create(),
      OptionalStateParameter.create(),
      OptionalDescriptionParameter.create(),
      OptionalLongitudeParameter.create(),
      OptionalLatitudeParameter.create(),
      OptionalElevationParameter.create(),
      OptionalDaysToDryParameter.create(),
      OptionalAddressParamater.create(),
      OptionalIsGymParameter.create(),
    ] as Exclude<ApplicationCommandOptionData, ApplicationCommandSubGroupData | ApplicationCommandSubCommandData>[];
  }
}

export default new CreateCragCommand();
