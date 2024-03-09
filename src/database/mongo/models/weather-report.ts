// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  crag: {
    type: String,
    required: true,
  },

  created: {
    type: Number,
    default: Date.now(),
  },
});

export const WeatherReportModel = model('WeatherReport', schema);
