const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email:                  { type: String, required: true },
  id:                     { type: String, required: true },
  username:               { type: String, required: true },
  picture:                { type: String, required: true },
  uri:                    { type: String, required: true },
  country:                { type: String, required: true },
  sessionToken:           { type: String },
  topTracks:              { type: String },
  topArtists:             { type: String }
});

mongoose.model('users', UserSchema);

module.exports = User = mongoose.model('users', UserSchema);