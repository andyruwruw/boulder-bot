// Packages
import {
  ApplicationCommandOptionData,
  CommandInteraction,
} from 'discord.js';

// Local Imports
import { ChatCommand } from '../generic/chat-command';
import WeatherSubscribeCommand from './weather-subscribe-command';
import WeatherSubscriptionMoveCommand from './weather-subscription-move-command';
import WeatherSubscriptionUpdateCommand from './weather-subscription-update-command';
import WeatherUnsubscribeCommand from './weather-unsubscribe-command';
import WeatherViewCommand from './weather-view-command';

/**
 * Commands for viewing weather updates.
 */
class WeatherCommand extends ChatCommand {
  /**
   * The Command's key.
   */
  static key: string = 'weather';

  /**
   * Executes the command.
   *
   * @param {CommandInteraction} interaction Interaction to execute the command on.
   */
  async execute(interaction: CommandInteraction): Promise<void> {
    if (interaction.options
      && interaction.options.data.length) {
      switch (interaction.options.data[0].name) {
        case WeatherSubscribeCommand.getKey():
          await WeatherSubscribeCommand.execute(interaction);
          break;
        case WeatherSubscriptionMoveCommand.getKey():
          await WeatherSubscriptionMoveCommand.execute(interaction);
          break;
        case WeatherSubscriptionUpdateCommand.getKey():
          await WeatherSubscriptionUpdateCommand.execute(interaction);
          break;
        case WeatherUnsubscribeCommand.getKey():
          await WeatherUnsubscribeCommand.execute(interaction);
          break;
        case WeatherViewCommand.getKey():
          await WeatherViewCommand.execute(interaction);
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
    return 'Create or interact with weather updates.';
  }

  /**
   * Retrieves the Command's key.
   *
   * @returns {string} Key of the Command.
   */
  getKey(): string {
    return WeatherCommand.key;
  }

  /**
   * Retrieves a Command's options.
   *
   * @returns {ApplicationCommandOptionData[]} Options of the Command.
   */
  getOptions(): ApplicationCommandOptionData[] {
    return [
      WeatherSubscribeCommand.create(),
      WeatherSubscriptionMoveCommand.create(),
      WeatherSubscriptionUpdateCommand.create(),
      WeatherUnsubscribeCommand.create(),
      WeatherViewCommand.create(),
    ] as ApplicationCommandOptionData[];
  }
}

export default WeatherCommand;
