// Packages
import {
  model,
  Schema,
} from 'mongoose';

const schema = new Schema({
  guild: {
    type: String,
    required: true,
  },

  id: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'general',
  },
});

export const ChannelModel = model('Channel', schema);
