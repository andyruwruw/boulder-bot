// Local Imports
import AbstractHandler from '../abstract-handler';
import Monitor from '../../helpers/monitor';

/**
 * Handles Discord bot errors.
 */
export class ErrorHandler extends AbstractHandler<Error> {
  /**
   * Handles the event.
   * 
   * @param {Error} payload Event payload.
   */
  async execute(payload: Error): Promise<void> {
    let replied = false;

    try {
      console.log(payload);
    } catch (error) {
      await Monitor.trace(
        ErrorHandler,
        `${error}`,
        Monitor.Layer.WARNING,
      );
    }
  }
}

export default ErrorHandler;