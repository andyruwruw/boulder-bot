// Local Imports
import { MountainProjectScraper } from './mountain-project-scraper';

// Types
import { MountainProjectItem } from '../../types/api';

export class MountainProject {
  /**
   * Retrieves a Mountain Project area by URL.
   *
   * @param {string} url Mountain Project URL. 
   * @returns {MountainProjectItem} Area data.
   */
  static async getMountainProjectArea(url: string): Promise<MountainProjectItem | null> {
    try {
      const scraper = new MountainProjectScraper(url);
  
      return await scraper.toObject();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  /**
   * Retrieves a Mountain Project route by URL.
   *
   * @param {string} url Mountain Project URL. 
   * @returns {MountainProjectItem} Route data.
   */
  static async getMountainProjectRoute(url: string): Promise<MountainProjectItem | null> {
    try {
      const scraper = new MountainProjectScraper(url);
  
      return await scraper.toObject();
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

export default MountainProject;
