# Boulder Bot

Living in Oregon comes with a lot of rain, which makes it harder to plan climbing trips. This bot was built to help warn my friends and I about weather windows at our various crags, and has been extended to include some other features!

## Features

- Subscribe to Weather Alerts
  - Custom Names
  - Longitude / Latitude
  - Specify Days til Dry
  - Use Mountain Project Link
- Custom Roles
  - By Activity (Boulder, Traditional, Sport)
  - By Location
  - By Gym
  - By Top Grades
- Log Sessions
  - Leaderboards
  - General Statistics
- Log Attempts / Sends
  - Leaderboards
  - General Statistics
- Guidebook Integration

## Commands

- Weather
  - [Display the Weather for a Crag](#display-the-weather-for-a-crag)
  - [Subscribe to Weather Updates for a Crag](#subscribe-to-weather-updates-for-a-crag)
  - [Unsubscribe to Weather Updates for a Crag](#unsubscribe-to-weather-updates-for-a-crag)
  - [Change Weather Update Regularity](#change-weather-update-regularity)

## Display the Weather for a Crag
```
/weather CRAG
```

Responds with weather forecast for a given crag. Crags can be given in a variety of methods.

- Mountain Project Link
- Unique Identifier
- Name Search
- Longitude and Latitude

## Subscribe to Weather Updates for a Crag
```
/weather subscribe CRAG
```

Subscribes to weather updates for a given crag in the channel command was used.

## Unsubscribe to Weather Updates for a Crag
```
/weather unsubscribe CRAG
```

Unsubscribes to weather updates for a given crag in the channel command was used.

## Change Weather Update Regularity
```
/weather schedule REGULARITY CRAG
```

Changes the regularity for Crag updates. This by default looks for irregularities.

- `default`: Notifies about irregularities. One post will be made when weather is bad, or good. Any windows or rain will be notified.
- `many`: Updates throughout the day with changes.
- `daily`: Daily update on weather conditions.
- `weekly`: Weekly updates on weather conditions.
- `static`: A static message that is changed with weather conditions.

## See Weather Sources

```
/weather sources
```

Depicts where weather data is retrieved from.

## Command Options

## Crag
