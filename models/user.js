const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema, like a blueprint
const UserSchema = new Schema({
  email:                  { type: String, required: true },
  id:                     { type: String, required: true },
  username:               { type: String, required: true },
  picture:                { type: String, required: true },
  uri:                    { type: String, required: true },
  country:                { type: String, required: true },
  topTracks:              { type: String },
  topArtists:             { type: String }
});

//create the model based on the schema previously defined
mongoose.model('users', UserSchema);

module.exports = User = mongoose.model('users', UserSchema);