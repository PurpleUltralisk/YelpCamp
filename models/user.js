const mongoose = require('mongoose');
const ppLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String, 
        required: true,
        unique: true,
    }
})

UserSchema.plugin(ppLocalMongoose);
// adds username and password to schema
// ensures they are unique

module.exports = mongoose.model('User', UserSchema);