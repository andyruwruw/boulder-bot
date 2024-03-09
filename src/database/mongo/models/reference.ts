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

  crag: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    default: 'unknown',
  },

  recievesUpdates: {
    type: Boolean,
    default: false,
  },

  hrefs: {
    type: Object,
    default: {},
  },

  maxRating: {
    type: Number,
    default: 4,
  },

  maxDanger: {
    type: Number,
    default: 3,
  },

  gradingSystem: {
    type: String,
    default: 'v-scale',
  },
});

export const ReferenceModel = model('Reference', schema);
