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

  displayName: {
    type: String,
    required: true,
  },

  hrefs: {
    type: Object,
    default: {},
  },
});

export const MemberModel = model('Member', schema);
