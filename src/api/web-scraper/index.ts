// Packages
import axios from 'axios';
import * as cheerio from 'cheerio';

// Local Imports
import { UsedAbstractWebScrapperError } from '../../errors/used-abstract-web-scrapper-error';

// Types
import { Dictionary } from '../../types';
import { SelectType } from '../../types/api';

/**
 * Aids in retrieval and parsing of web pages.
 */
export class WebScraper<T> {
  /**
   * The URL requested.
   */
  _url: string = '';

  /**
   * Reference to request.
   */
  _dom: cheerio.CheerioAPI | null = null;

  /**
   * Collected tuple values.
   */
  _assignedTuples = {} as Dictionary<any>;

  /**
   * Instantiates a new web scraper.
   *
   * @param {string} url URL to request.
   */
  constructor(url?: string | undefined) {
    if (url) {
      this._url = url;
    }
  }

  /**
   * Converts the page to a readable object.
   * 
   * @returns {Promise<T | null>} Object data.
   */
  async toObject(): Promise<T | null> {
    throw new UsedAbstractWebScrapperError();
  }

  /**
   * Request DOM data for a URL.
   *
   * @param {string} url URL to request.
   * @returns {Promise<void>} Promise of action.
   */
  async _request(url?: string | undefined): Promise<void> {
    if (url !== undefined) {
      this._url = url;
    }

    if (!this._isValidUrl()) {
      return;
    }

    try {
      const response = await axios.get(
        this._url,
        {
          headers: {
            'Connection': 'Keep-Alive',
          },
        },
      );
    
      this._dom = cheerio.load(response.data);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Ensures the URL provided is valid.
   *
   * @returns {boolean} Whether the URL is valid.
   */
  _isValidUrl(): boolean {
    return !!this._url;
  }

  /**
   * Tests the URL against a regular expression.
   *
   * @param {RegExp} test Regular expression to test it against. 
   * @returns {boolean} Test results.
   */
  _testUrl(test: RegExp): boolean {
    if (!this._url) {
      return false;
    }

    return test.test(this._url);
  }

  /**
   * Selects an element from the page.
   *
   * @param {string} selector HTML selector.
   * @param {(string | RegExp)[][]} [replacements = []] Replacements.
   * @param {string} [type = 'string'] Type of data to retrieve.
   * @param {RegExp | null} [match = null] Match a RegExp.
   * @param {number} [matchIndex = 0] Index from match.
   * @returns {string | null} Value.
   */
  _select(
    selector: string,
    replacements: (string | RegExp)[][] = [],
    type: SelectType = 'string',
    match: RegExp | null = null,
    matchIndex: number = 0,
  ): string | number | null {
    try {
      if (this._dom === null
        || this._dom === undefined) {
        return null;
      }

      const value = replacements.reduce((
        current: string,
        replacement: (string | RegExp)[],
      ) => {
        if (replacement.length < 2
          || !current) {
          return current;
        }

        const select = replacement[0];
        const replace = replacement[1];
        return current.replace(
          select,
          replace as string,
        );
      }, this._dom(selector).text());

      if (!match) {
        return type === 'number' ? parseFloat(value) : value;
      }

      const matches = value.match(match);

      if (!matches) {
        return null;
      }

      return type === 'number' ? parseFloat(matches[matchIndex]) : matches[matchIndex];
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  /**
   * Retrieves a tuple value.
   *
   * @param {string} selector Selector element.
   * @param {string} key Key of element.
   * @param {(string | RegExp)[][]} [replacements = []] Replacements.
   * @param {string} [type = 'string'] Type of data to retrieve.
   * @param {RegExp | null} [match = null] Match a RegExp.
   * @param {number} [matchIndex = 0] Index from match.
   * @returns {string | null} Value.
   */
  _getTupleValue(
    selector: string,
    key: string,
    replacements: (string | RegExp)[][] = [],
    type: SelectType = 'string',
    match: RegExp | null = null,
    matchIndex: number = 0,
  ): string | number | null {
    try {
      if (!(selector in this._assignedTuples)) {
        this._selectTuples(selector);
      }

      const raw = key in this._assignedTuples[selector] ? this._assignedTuples[selector][key] as string : null;
    
      if (!raw) {
        return raw;
      }

      const value = replacements.reduce((
        current: string,
        replacement: (string | RegExp)[],
      ) => {
        if (replacement.length < 2
          || !current) {
          return current;
        }

        const select = replacement[0];
        const replace = replacement[1];
        return current.replace(
          select,
          replace as string,
        );
      }, raw);

      if (!match) {
        return type === 'number' ? parseFloat(value) : value;
      }

      const matches = value.match(match);

      if (!matches) {
        return null;
      }

      return type === 'number' ? parseFloat(matches[matchIndex]) : matches[matchIndex];
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  /**
   * Selects a set of tuples and registers the values.
   * 
   * @param {string} selector Selector element.
   */
  _selectTuples(selector: string): void {
    try {
      this._assignedTuples[selector] = {} as Dictionary<string>;

      if (this._dom === null
        || this._dom === undefined) {
        return;
      }
  
      const elements = this._dom(selector).toArray();

      for (let i = 1; i < elements.length; i += 2) {
        const key = this._dom(elements[i - 1]).text().trim();
        const value = this._dom(elements[i]).text().trim();

        this._assignedTuples[selector][key] = value;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
