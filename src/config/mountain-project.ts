// Types
import { SelectType } from '../types/api';

/**
 * Checks if a link is a Mountain Project link.
 */
export const MOUNTAIN_PROJECT_URL = /mountainproject.com/g;

/**
 * Checks if a link is a Mountain Project area.
 */
export const MOUNTAIN_PROJECT_AREA_URL = /mountainproject.com\/area/g;

/**
 * Checks if a link is a Mountain Project route.
 */
export const MOUNTAIN_PROJECT_ROUTE_URL = /mountainproject.com\/route/g;

/**
 * Regex for selecting numbers.
 */
const NUMBER_SELECTOR = /([0-9,.]*[0-9]+)/gi;

/**
 * Regex for selecting numbers.
 */
const TWO_COMMA_SEPARATED_NUMBERS_SELECTOR = /([\-0-9,.]+), ([\-0-9,.]+)/gi;

/**
 * Selector for white space prior.
 */
const REDUNDANT_APPENDED_WHITE_SPACE_SELECTOR = /^\s+/g;

/**
 * Selector for additional lines.
 */
const REDUNDANT_ADDED_LINES_SELECTOR = /\n[a-zA-Z0-9\n\s]+$/g;

/**
 * Postfix for clarifying grading system.
 */
const GRADING_SYSTEM_LABEL = ' YDS';

/**
 * CSS selectors for Mountain Project.
 */
export const MOUNTAIN_PROJECT_SELECTORS = {
  name: {
    selector: 'h1',
    replacements: [
      [
        REDUNDANT_APPENDED_WHITE_SPACE_SELECTOR,
        '',
      ],
      [
        REDUNDANT_ADDED_LINES_SELECTOR,
        '',
      ],
    ],
    type: 'string' as SelectType,
    match: null,
    matchIndex: 0,
  },
  grade: {
    selector: '.mr-2 .rateYDS',
    replacements: [
      [
        GRADING_SYSTEM_LABEL,
        '',
      ],
    ],
    type: 'string' as SelectType,
    match: null,
    matchIndex: 0,
  },
  rating: {
    selector: '#route-star-avg span',
    replacements: [],
    type: 'number' as SelectType,
    match: NUMBER_SELECTOR,
    matchIndex: 0,
  },
};

/**
 * Tuple value selectors.
 */
export const MOUNTAIN_PROJECT_TUPLE_SELECTORS = {
  description: {
    selector: '.description-details td',
    items: {
      elevation: {
        selector: 'Elevation:',
        replacements: [],
        type: 'number' as SelectType,
        match: NUMBER_SELECTOR,
        matchIndex: 0,
      },
      coordinates: {
        selector: 'GPS:',
        replacements: [],
        type: 'number' as SelectType,
        match: TWO_COMMA_SEPARATED_NUMBERS_SELECTOR,
        matchIndex: 0,
      },
      pageViews: {
        selector: 'Page Views:',
        replacements: [],
        type: 'number' as SelectType,
        match: NUMBER_SELECTOR,
        matchIndex: 0,
      },
      fa: {
        selector: 'FA:',
        replacements: [],
        type: 'string' as SelectType,
        match: null,
        matchIndex: 0,
      },
      type: {
        selector: 'Type:',
        replacements: [],
        type: 'string' as SelectType,
        match: null,
        matchIndex: 0,
      },
    },
  },
};
