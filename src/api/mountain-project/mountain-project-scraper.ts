// Local Imports
import {
  MOUNTAIN_PROJECT_AREA_URL,
  MOUNTAIN_PROJECT_ROUTE_URL,
  MOUNTAIN_PROJECT_SELECTORS,
  MOUNTAIN_PROJECT_TUPLE_SELECTORS,
  MOUNTAIN_PROJECT_URL,
} from '../../config/mountain-project';
import { WebScraper } from '../web-scraper';

// Types
import { MountainProjectItem } from '../../types/api';

/**
 * Aids in retrieval and parsing of Mountain Project web pages..
 */
export class MountainProjectScraper extends WebScraper<MountainProjectItem> {
  /**
   * Instantiates a new Mountain Projectweb scraper.
   *
   * @param {string} url URL to request.
   */
  constructor(url?: string | undefined) {
    super(url);
  }

  /**
   * Whether the URL points to an area.
   *
   * @returns {boolean} Whether the URL points to an area.;
   */
  isArea(): boolean {
    return this._testUrl(MOUNTAIN_PROJECT_AREA_URL);
  }

  /**
   * Whether the URL points to a route.
   *
   * @returns {boolean} Whether the URL points to a route.;
   */
  isRoute(): boolean {
    return this._testUrl(MOUNTAIN_PROJECT_ROUTE_URL);
  }

  /**
   * Returns data as object.
   *
   * @returns {Promise<MountainProjectItem | null>} Data as object.
   */
  async toObject(): Promise<MountainProjectItem | null> {
    if (this._dom === null || this._dom === undefined) {
      return null;
    }

    return {
      name: this._getName(),
      href: this._getHref(),
      type: this._getType(),
      isRoute: this.isRoute(),
      isArea: this.isArea(),
      grade: this._getGrade(),
      rating: this._getRating(),
      longitude: this._getLongitude(),
      latitude: this._getLatitude(),
      elevation: this._getElevation(),
      pageViews: this._getPageViews(),
      fa: this._getFa(),
    };
  }

  /**
   * Ensures the URL provided is valid.
   *
   * @returns {boolean} Whether the URL is valid.
   */
  _isValidUrl(): boolean {
    return this._url ? MOUNTAIN_PROJECT_URL.test(this._url) : false;
  }

  /**
   * Retrieves the name of the item.
   *
   * @returns {string | null} Item name.
   */
  _getName(): string | null {
    return this._select(
      MOUNTAIN_PROJECT_SELECTORS.name.selector,
      MOUNTAIN_PROJECT_SELECTORS.name.replacements,
    ) as string | null;
  }

  /**
   * Retrieves the grade of the item.
   *
   * @returns {string | null} Item grade.
   */
  _getGrade(): string | null {
    return this._select(
      MOUNTAIN_PROJECT_SELECTORS.grade.selector,
      MOUNTAIN_PROJECT_SELECTORS.grade.replacements,
    ) as string | null;
  }

  /**
   * Retrieves the rating of the item.
   *
   * @returns {number | null} Item rating.
   */
  _getRating(): number | null {
    return this._select(
      MOUNTAIN_PROJECT_SELECTORS.rating.selector,
      MOUNTAIN_PROJECT_SELECTORS.rating.replacements,
      MOUNTAIN_PROJECT_SELECTORS.rating.type,
      MOUNTAIN_PROJECT_SELECTORS.rating.match,
    ) as number | null;
  }

  /**
   * Retrieves item Href.
   *
   * @returns {string | null} Item href.
   */
  _getHref(): string | null {
    return this._url;
  }

  /**
   * Retrieves Mountain Project item type.
   *
   * @returns {string} Item type.
   */
  _getType(): string | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.type.selector,
    ) as string | null;
  }

  /**
   * Retrieves the item's latitude.
   *
   * @returns {number | null} Item's latitude.
   */
  _getLatitude(): number | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.replacements,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.type,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.match,
      0,
    ) as number | null;
  }

  /**
   * Retrieves the item's longitude.
   *
   * @returns {number | null} Item's longitude.
   */
  _getLongitude(): number | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.replacements,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.type,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.match,
      1,
    ) as number | null;
  }

  /**
   * Retrieves the item's elevation.
   *
   * @returns {number | null} Item's elevation.
   */
  _getElevation(): number | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.elevation.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.elevation.replacements,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.elevation.type,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.elevation.match,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.elevation.matchIndex,
    ) as number | null;
  }

  /**
   * Retrieves the item's longitude.
   *
   * @returns {number | null} Item's longitude.
   */
  _getPageViews(): number | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.pageViews.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.pageViews.replacements,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.pageViews.type,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.pageViews.match,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.coordinates.matchIndex,
    ) as number | null;
  }

  /**
   * Retrieves the item's first ascent.
   *
   * @returns {string | null} Item's first ascent.
   */
  _getFa(): string | null {
    return this._getTupleValue(
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.selector,
      MOUNTAIN_PROJECT_TUPLE_SELECTORS.description.items.fa.selector,
    ) as string | null;
  }
}
