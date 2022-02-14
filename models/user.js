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

//UserSchema.virtual('friendCount').get(function() {
  //return this.friends.reduce((total, comment) => total + comment.replies.length + 1, 0);
//});

const User = model('User', UserSchema);

module.exports = User;