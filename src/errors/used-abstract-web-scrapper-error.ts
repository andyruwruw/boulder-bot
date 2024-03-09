// Local Imports
import { MESSAGE_USED_ABSTRACT_WEB_SCRAPPER_ERROR } from '../config/messages';

/**
 * Abstract Web Scraper Class Used Error.
 */
class UsedAbstractWebScrapperError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_WEB_SCRAPPER_ERROR);
  }
}

export default UsedAbstractWebScrapperError;
