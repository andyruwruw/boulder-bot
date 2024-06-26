// Local Imports
import { MESSAGE_USED_ABSTRACT_COMMAND_ERROR } from '../config/messages';

/**
 * Abstract Command Class Used Error.
 */
class UsedAbstractCommandError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_COMMAND_ERROR);
  }
}

export default UsedAbstractCommandError;
