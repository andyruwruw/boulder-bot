// Local Imports
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
