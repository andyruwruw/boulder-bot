/* eslint @typescript-eslint/no-unused-vars: "off" */
// Local Imports
import { DataAccessObject } from './dao';

// Types
import {
  Area,
  Boulder,
  Channel,
  Crag,
  Guild,
  GuildMember,
  Member,
  Reference,
  Route,
  RouteReference,
  Session,
  Subscription,
  WeatherReport
} from '../types/tables';
import { DataAccessObjectInterface } from '../types/database';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for Areas.
   */
  areas: DataAccessObjectInterface<Area> = new DataAccessObject<Area>();

  /**
   * Data access object for Boulders.
   */
  boulder: DataAccessObjectInterface<Boulder> = new DataAccessObject<Boulder>();

  /**
   * Data access object for Channels.
   */
  channel: DataAccessObjectInterface<Channel> = new DataAccessObject<Channel>();

  /**
   * Data access object for Crags.
   */
  crag: DataAccessObjectInterface<Crag> = new DataAccessObject<Crag>();

  /**
   * Data access object for GuildMembers.
   */
  guildMember: DataAccessObjectInterface<GuildMember> = new DataAccessObject<GuildMember>();

  /**
   * Data access object for Guilds.
   */
  guild: DataAccessObjectInterface<Guild> = new DataAccessObject<Guild>();

  /**
   * Data access object for Members.
   */
  member: DataAccessObjectInterface<Member> = new DataAccessObject<Member>();

  /**
   * Data access object for References.
   */
  reference: DataAccessObjectInterface<Reference> = new DataAccessObject<Reference>();

  /**
   * Data access object for RouteReferences.
   */
  routeReference: DataAccessObjectInterface<RouteReference> = new DataAccessObject<RouteReference>();

  /**
   * Data access object for Routes.
   */
  route: DataAccessObjectInterface<Route> = new DataAccessObject<Route>();

  /**
   * Data access object for Sessions.
   */
  session: DataAccessObjectInterface<Session> = new DataAccessObject<Session>();

  /**
   * Data access object for Subscriptions.
   */
  subscription: DataAccessObjectInterface<Subscription> = new DataAccessObject<Subscription>();

  /**
   * Data access object for WeatherReports.
   */
  weatherReport: DataAccessObjectInterface<WeatherReport> = new DataAccessObject<WeatherReport>();

  /**
   * Connects to database.
   */
  async connect(): Promise<void> {
    throw new Error('Used abstract database!');
  }

  /**
   * Whether or not the database is connected.
   *
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }

  /**
   * Get's a data access object.
   * 
   * @param {string} name Name of data access object.
   * @returns {DataAccessObjectInterface} Data access object.
   */
  getDao(name: string): DataAccessObject<any> {
    switch (name) {
      default:
        return this.member;
    }
  }
}
