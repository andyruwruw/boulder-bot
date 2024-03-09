// Packages
import { Model } from 'mongoose';

// Local Imports
import { RouteReferenceModel } from '../models';
import { DataAccessObject } from './dao';

// Types
import { RouteReference as RouteReferenceInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for RouteReferences.
 */
export class RouteReferenceDataAccessObject
  extends DataAccessObject<RouteReferenceInterface>
  implements DataAccessObjectInterface<RouteReferenceInterface> {
  /**
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return RouteReferenceModel;
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
