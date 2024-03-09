// Local Imports
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
