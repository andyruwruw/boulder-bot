// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  subscriber: {
    type: String,
    required: true,
  },

  subscriberType: {
    type: String,
    required: true,
  },

  item: {
    type: String,
    required: true,
  },

  itemType: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    default: '',
  },

  channel: {
    type: String,
    default: '',
  },

  updateInPlace: {
    type: Boolean,
    default: true,
  },

  interval: {
    type: String,
    default: 'daily',
  },
});

export const SubscriptionModel = model('Subscription', schema);
