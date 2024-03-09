// Local Imports
import { DataAccessObject } from './dao';

// Types
import { Channel as ChannelInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for Channels.
 */
export class ChannelDataAccessObject
  extends DataAccessObject<ChannelInterface>
  implements DataAccessObjectInterface<ChannelInterface> {
  /**
   * Retrieves default sort value.
   *
   * @returns {Record<string, number>} Sort method.
   */
  _getTimeSort() {
    return {
      hours: -1,
    };
  }
}
