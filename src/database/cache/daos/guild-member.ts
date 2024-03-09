// Local Imports
import { DataAccessObject } from './dao';

// Types
import { GuildMember as GuildMemberInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for GuildMembers.
 */
export class GuildMemberDataAccessObject
  extends DataAccessObject<GuildMemberInterface>
  implements DataAccessObjectInterface<GuildMemberInterface> {
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
