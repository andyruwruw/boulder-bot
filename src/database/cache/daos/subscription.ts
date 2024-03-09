// Local Imports
import { DataAccessObject } from './dao';

// Types
import { Subscription as SubscriptionInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for Subscriptions.
 */
export class SubscriptionDataAccessObject
  extends DataAccessObject<SubscriptionInterface>
  implements DataAccessObjectInterface<SubscriptionInterface> {
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
