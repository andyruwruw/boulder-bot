// Local Imports
import { MESSAGE_USED_ABSTRACT_COMPONENT_ERROR } from '../config/messages';

/**
 * Abstract Component Class Used Error.
 */
class UsedAbstractComponentError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_COMPONENT_ERROR);
  }
}

export default UsedAbstractComponentError;