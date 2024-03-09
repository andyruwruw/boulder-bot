// Packages
import { Model } from 'mongoose';

// Local Imports
import { BoulderModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import { Boulder as BoulderInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for Boulders.
 */
export class BoulderDataAccessObject
  extends DataAccessObject<BoulderInterface>
  implements DataAccessObjectInterface<BoulderInterface> {
  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return BoulderModel;
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
