// Local Imports
import { DataAccessObject } from './dao';

// Types
import { WeatherReport as WeatherReportInterface } from '../../../types/tables';
import { DataAccessObjectInterface as DataAccessObjectInterface } from '../../../types/database';

/**
 * Data access object for WeatherReports.
 */
export class WeatherReportDataAccessObject
  extends DataAccessObject<WeatherReportInterface>
  implements DataAccessObjectInterface<WeatherReportInterface> {
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
