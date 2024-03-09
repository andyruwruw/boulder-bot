// Packages
import { Model } from 'mongoose';

// Local Imports
import { GuildMemberModel } from '../models';
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
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return GuildMemberModel;
  }

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
