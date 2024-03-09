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

  member: {
    type: String,
    required: true,
  },
});

export const GuildMemberModel = model('GuildMember', schema);
