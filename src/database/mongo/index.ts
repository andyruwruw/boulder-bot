// Packages
import mongoose, {
  connect,
  connection,
} from 'mongoose';

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
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';
import { Database } from '../database';
import DatabaseUrlMissingError from '../../errors/database-url-missing';
import Environment from '../../helpers/environment';
import Monitor from '../../helpers/monitor';

mongoose.set('strictQuery', false);

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Instantiates MongoDatabase with correct queries.
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
    if (!Environment.getDatabaseUrl()) {
      throw new DatabaseUrlMissingError();
    }

    const authorizedUrl = Environment.getDatabaseUrl()
      .replace(
        '<user>',
        Environment.getDatabaseUser(),
      )
      .replace(
        '<password>',
        Environment.getDatabasePassword(),
      );

    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      Monitor.Layer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return (connection && 'readyState' in connection) ? connection.readyState === 1 : false;
  }
}
