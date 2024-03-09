// Packages
import { Model } from 'mongoose';

// Local Imports
import { GuildModel } from '../models';
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
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return GuildModel;
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
