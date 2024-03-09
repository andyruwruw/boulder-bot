// Packages
import { Model } from 'mongoose';

// Local Imports
import { ReferenceModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import { Reference as ReferenceInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for References.
 */
export class ReferenceDataAccessObject
  extends DataAccessObject<ReferenceInterface>
  implements DataAccessObjectInterface<ReferenceInterface> {
  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return ReferenceModel;
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
