// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  reference: {
    type: String,
    required: true,
  },

  id: {
    type: String,
    default: '',
  },

  of: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'boulder',
  },

  index: {
    type: Number,
    default: 0,
  },

  name: {
    type: String,
    required: true,
  },

  page: {
    type: Number,
    required: true,
  },

  href: {
    type: String,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  danger: {
    type: Number,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  matchGuide: {
    type: Object,
    default: {},
  },
});

export const RouteReferenceModel = model('RouteReference', schema);
