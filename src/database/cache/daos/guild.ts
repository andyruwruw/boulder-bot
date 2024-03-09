// Local Imports
import { DataAccessObject } from './dao';

// Types
import { Guild as GuildInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for Guilds.
 */
export class GuildDataAccessObject
  extends DataAccessObject<GuildInterface>
  implements DataAccessObjectInterface<GuildInterface> {
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
