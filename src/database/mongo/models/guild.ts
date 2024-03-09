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

  created: {
    type: Number,
    default: Date.now(),
  },
});

export const GuildModel = model('Guild', schema);
