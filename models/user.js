const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      friends: [],
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

UserSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

UserSchema.virtual('friendCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;