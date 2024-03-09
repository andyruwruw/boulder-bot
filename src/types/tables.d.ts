/**
 * Types of boulder for the table.
 */
export type BoulderType = 'boulder' | 'wall';

/**
 * Discord channel types.
 */
export type ChannelType = 'general'
| 'commands'
| 'forecasts'
| 'crag'
| 'boulder'
| 'route';

/**
 * Various colors for grades.
 */
export type Color = 'Yellow'
| 'Green'
| 'Teal'
| 'Blue'
| 'Purple'
| 'Pink'
| 'Red'
| 'Orange'
| 'White'
| 'Black';

/**
 * Various types of climbing grade strings.
 */
export type ClimbingGrade = 'VB'
| 'V-Easy'
| `V${number}`
| `V${number}+`
| `V${number}-`
| `${string}${number}`
| `${string}${number}+`
| `${string}${number}-`
| `${number}.${number}${string}`
| `${number}.${number}`
| `${number}.${number}+`
| `${number}.${number}-`
| 'S'
| 'HS'
| 'VS'
| 'HVS'
| `E${number}`
| `E${number} ${number}${string}`
| `A${number}`
| `A${number}+`
| `A${number}-`
| `A/C${number}`
| `A/C${number}+`
| `A/C${number}-`
| `M${number}`
| `WI ${number}`
| `${string} ${Color}`
| number
| string;

/**
 * Various climbing activities.
 */
export type ClimbingActivities = 'sport'
| 'lead'
| 'top-rope'
| 'traditional'
| 'boulder'
| 'multi-pitch'
| 'ice'
| 'mixed'
| 'alpine'
| 'aid'
| 'free-solo'
| 'speed';

/**
 * Person subscribed.
 */
export type SubscriberType = 'guild' | 'member';

/**
 * Item subscribed to.
 */
export type SubscriptionItemType = 'route'
| 'boulder'
| 'area'
| 'crag';

/**
 * How often to update the subscription.
 */
export type SubscriptionInterval = 'daily'
| 'triweekly'
| 'weekly'
| 'monthly'
| 'on-condition-change';

/**
 * Types of references.
 */
export type ReferenceType = 'pdf'
| 'website'
| 'paid-app';

/**
 * Types of grading systems.
 */
export type GradingSystem = 'v-scale'
| 'yosemite-decimal-system'
| 'french'
| 'font'
| 'uiaa'
| 'bmc-traditional-grading'
| 'australian'
| 'circuit-grading'
| 'everything-v3';

/**
 * General database item.
 */
export interface DatabaseItem {
  /**
   * Discord snowflake or custom ID.
   */
  id: string;
}

/**
 * Item that belongs to a guild.
 */
export interface GuildItem extends DatabaseItem {
  /**
   * Discord snowflake for guild.
   */
  guild: string;
}

export interface ClimbingItem extends DatabaseItem {
  /**
   * Custom ordering for areas.
   */
  index: number;

  /**
   * General area.
   */
  locale: string;

  /**
   * State of that area.
   */
  state: string;

  /**
   * Name of the item.
   */
  name: string;

  /**
   * Description of the item.
   */
  description: string;

  /**
   * External Hrefs for the item.
   */
  hrefs: ExternalHrefs;

  /**
   * Longitude of item.
   */
  longitude: number;

  /**
   * Latitude of item.
   */
  latitude: number;

  /**
   * Elevation of the item.
   */
  elevation: number;

  /**
   * Rough amount of days for something to dry.
   */
  daysToDry: number;
}

/**
 * An item belonging to a crag.
 */
export interface CragItem extends ClimbingItem {
  /**
   * Crag this item belongs to.
   */
  crag: string;
}

/**
 * An item belonging to a crag area.
 */
export interface AreaItem extends CragItem {
  /**
   * Area this item belongs to.
   */
  area: string;
}

/**
 * An item belonging to a boulder.
 */
export interface BoulderItem extends AreaItem {
  /**
   * Boulder this item belongs to.
   */
  boulder: string;
}

/**
 * Defined crags.
 */
export interface Crag extends ClimbingItem {
  /**
   * Address of the item.
   */
  address: string;

  /**
   * Whether this is a gym.
   */
  isGym: boolean;
};

/**
 * Depicts an area of a crag.
 */
export interface Area extends CragItem {
  /**
   * Parent area ID.
   */
  parent: string;
}

/**
 * Depicts either boulders or cliffs.
 */
export interface Boulder extends AreaItem {
  /**
   * Whether this is a boulder or a wall.
   */
  type: BoulderType;
}

/**
 * Different Discord Guilds.
 */
export interface Guild extends DatabaseItem {
  /**
   * When the guild was added.
   */
  created: number;
}

/**
 * Depicts a guild channel.
 */
export interface Channel extends GuildItem {
  /**
   * Type of channel for usage.
   */
  type: ChannelType;
}

/**
 * Individual members of a guild.
 */
export interface Member extends GuildItem {
  /**
   * Display name for member.
   */
  displayName: string;

  /**
   * Other links to item.
   */
  hrefs: ExternalHrefs;
}

/**
 * Connecting guilds and members.
 */
export interface GuildMember extends GuildItem {
  /**
   * Discord snowflake for member.
   */
  member: string;
}

export interface Session {
  /**
   * Discord snowflake for member.
   */
  member: string;

  /**
   * The crag the session was done at.
   */
  crag: string;

  /**
   * list of areas touched up on.
   */
  areas: string[];

  /**
   * Date done.
   */
  date: string;

  /**
   * Starting date time.
   */
  start: number;

  /**
   * Ending date time.
   */
  end: number;

  /**
   * Duration of the session.
   */
  duration: number;

  /**
   * Max grade sent.
   */
  maxSent: ClimbingGrade;

  /**
   * Notes on the session.
   */
  notes: string;

  /**
   * How the member felt.
   */
  felt: number;

  /**
   * Media from the session.
   */
  media: string;

  /**
   * Activites done during the session.
   */
  activities: ClimbingActivities[];

  /**
   * When this session was updated.
   */
  updated: number;
}

/**
 * A weather subscription.
 */
export interface Subscription extends DatabaseItem  {
  /**
   * The subscriber snowflake ID.
   */
  subscriber: string;

  /**
   * What kind of individual is subscribed.
   */
  subscriberType: SubscriberType;

  /**
   * Item subscribed to.
   */
  item: string;

  /**
   * Type of item subscribed.
   */
  itemType: SubscriptionItemType;

  /**
   * The message ID.
   */
  message: string;

  /**
   * The channel ID.
   */
  channel: string;

  /**
   * Whether to update an existing message.
   */
  updateInPlace: boolean;

  /**
   * At what interval to update.
   */
  interval: SubscriptionInterval;
}

/**
 * Reference to an item.
 */
export interface Reference extends DatabaseItem {
  /**
   * Guide to what crag.
   */
  crag: string;

  /**
   * The type of reference.
   */
  type: ReferenceType;

  /**
   * Name of the reference.
   */
  name: string;

  /**
   * Author of the reference.
   */
  author: string;

  /**
   * Best known date for authorship.
   */
  date: string;

  /**
   * Whether this reference recieves updates.
   */
  recievesUpdates: boolean;

  /**
   * Link to reference.
   */
  href: ExternalHrefs;

  /**
   * Max rating from reference.
   */
  maxRating: number;

  /**
   * Max danger level from reference.
   */
  maxDanger: number;

  /**
   * What grading system it uses.
   */
  gradingSystem: GradingSystem;
}

/**
 * Depicting climbing routes.
 */
export interface Route extends BoulderItem {
  /**
   * Custom ordering for boulders.
   */
  index: number;

  /**
   * Grade of the item.
   */
  grade: ClimbingGrade;

  /**
   * What activity can be done on this item.
   */
  activity: ClimbingActivities;
}

/**
 * Reference to a route.
 */
export interface RouteReference {
  /**
   * Id of that reference.
   */
  reference: string;

  /**
   * Id for that item.
   */
  id: string;

  /**
   * Id of item.
   */
  of: string;

  /**
   * Type of item.
   */
  type: string;

  /**
   * Index of item.
   */
  index: number;

  /**
   * Name given in that guide.
   */
  name: string;

  /**
   * What page to seek.
   */
  page: number;

  /**
   * Link to that item.
   */
  href: string;

  /**
   * Grade given.
   */
  grade: ClimbingGrade;

  /**
   * Danger level of that reference.
   */
  danger: number;

  /**
   * Rating from that reference.
   */
  rating: number;

  /**
   * Description provided by that guide.
   */
  description: string;

  /**
   * How well it matches to item.
   */
  matchGuide: ReferenceMatchGuide;
}

/**
 * How well a reference matches.
 */
export interface ReferenceMatchGuide {
  /**
   * Was this used as the primary.
   */
  primary: boolean;

  /**
   * Does the topo match.
   */
  topo: number;

  /**
   * Does the name match.
   */
  name: number;

  /**
   * Does the grade match.
   */
  grade: number;

  /**
   * Does the description match.
   */
  description: number;

  /**
   * Does the location on a top down map match.
   */
  location: number;

  /**
   * Is it an alternative start?
   */
  alternativeStart: boolean;

  /**
   * Is it an alternative finish?
   */
  alternativeFinish: boolean;

  /**
   * Comparison notes.
   */
  notes: string;
}

/**
 * Various other links to an item.
 */
export interface ExternalHrefs {
  /**
   * Some other link.
   */
  [key: string]: string;

  /**
   * Mountain project link.
   */
  mountainProject?: string;

  /**
   * 
   * Youtube link.
   */
  youtube?: string;

  /**
   * Sendage link.
   */
  sendage?: string;

  /**
   * Eighta link.
   */
  eighta?: string;

  /**
   * Instagram link.
   */
  instagram?: string;

  /**
   * Facebook link.
   */
  facebook?: string;

  /**
   * Raw website link.
   */
  website?: string;
}

/**
 * Weather records for a given date.
 */
export interface WeatherReport {
  date: number;
}
