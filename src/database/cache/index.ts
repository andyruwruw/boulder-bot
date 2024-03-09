// Local Imports
import {
  ChannelDataAccessObject,
  AreaDataAccessObject,
  BoulderDataAccessObject,
  CragDataAccessObject,
  GuildMemberDataAccessObject,
  GuildDataAccessObject,
  MemberDataAccessObject,
  ReferenceDataAccessObject,
  RouteReferenceDataAccessObject,
  RouteDataAccessObject,
  SessionDataAccessObject,
  SubscriptionDataAccessObject,
  WeatherReportDataAccessObject,
} from './daos';
import { Database } from '../database';

/**
 * Memory database..
 */
export class CacheDatabase extends Database {
  /**
   * Instantiates CacheDatabase with correct queries.
   */
  constructor() {
    super();

    this.areas = new AreaDataAccessObject();
    this.boulder = new BoulderDataAccessObject();
    this.channel = new ChannelDataAccessObject();
    this.crag = new CragDataAccessObject();
    this.guildMember = new GuildMemberDataAccessObject();
    this.guild = new GuildDataAccessObject();
    this.member = new MemberDataAccessObject();
    this.reference = new ReferenceDataAccessObject();
    this.routeReference = new RouteReferenceDataAccessObject();
    this.route = new RouteDataAccessObject();
    this.session = new SessionDataAccessObject();
    this.subscription = new SubscriptionDataAccessObject();
    this.weatherReport = new WeatherReportDataAccessObject();
  }

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    return;
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return true;
  }
}
