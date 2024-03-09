// Packages
import { Model } from 'mongoose';

// Local Imports
import { MemberModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import { Member as MemberInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for Members.
 */
export class MemberDataAccessObject
  extends DataAccessObject<MemberInterface>
  implements DataAccessObjectInterface<MemberInterface> {
  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return MemberModel;
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
