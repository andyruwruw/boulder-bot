// Local Imports
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
