// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  id: {
    type: String,
    required: true,
  },

  index: {
    type: Number,
    default: 0,
  },

  locale: {
    type: String,
    default: '',
  },

  state: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    required: true,
  },

  crag: {
    type: String,
    required: true,
  },

  area: {
    type: String,
    default: '',
  },

  type: {
    type: String,
    default: 'boulder',
  },

  description: {
    type: String,
    default: '',
  },

  hrefs: {
    type: Object,
    default: {},
  },

  longitude: {
    type: Number,
    default: 0,
  },

  latitude: {
    type: Number,
    default: 0,
  },

  elevation: {
    type: Number,
    default: 0,
  },

  daysToDry: {
    type: Number,
    default: 2,
  },
});

export const BoulderModel = model('Boulder', schema);
