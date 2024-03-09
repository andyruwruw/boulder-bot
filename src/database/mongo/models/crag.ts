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

  address: {
    type: String,
    default: '',
  },

  name: {
    type: String,
    required: true,
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

  isGym: {
    type: Boolean,
    default: false,
  },
});

export const CragModel = model('Crag', schema);
