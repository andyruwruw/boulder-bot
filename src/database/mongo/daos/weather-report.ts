// Packages
import { Model } from 'mongoose';

// Local Imports
import { WeatherReportModel } from '../models';
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
   * Retrieves mongoose Model for DataAccessObject.
   */
  _getModel(): Model<any, Record<string, any>, Record<string, any>, Record<string, any>> {
    return WeatherReportModel;
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
