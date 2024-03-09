// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  member: {
    type: String,
    required: true,
  },

  crag: {
    type: String,
    required: true,
  },

  areas: {
    type: Array,
    of: String,
    default: [],
  },

  date: {
    type: String,
    required: true,
  },
  
  start: {
    type: Number,
    default: -1,
  },

  end: {
    type: Number,
    default: -1,
  },

  duration: {
    type: Number,
    default: 0,
  },

  maxSent: {
    type: String,
    default: 'none',
  },

  notes: {
    type: String,
    default: '',
  },

  felt: {
    type: Number,
    default: 5,
  },

  media: {
    type: String,
    default: '#',
  },

  activities: {
    type: Array,
    of: String,
  },

  updated: {
    type: Number,
    default: Date.now(),
  },
});

export const SessionModel = model('Session', schema);
