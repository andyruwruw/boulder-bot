// Local Imports
import { MESSAGE_DATABASE_URL_MISSING_ERROR } from '../config/messages';

/**
 * Error thrown when Database URL is missing.
 */
class DatabaseUrlMissingError extends Error {
  constructor() {
    super(MESSAGE_DATABASE_URL_MISSING_ERROR);
  }
}

export default DatabaseUrlMissingError;
