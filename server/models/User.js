const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email : String,
    userName : String,
    password: String,
    date: Date,
    firstName : String,
    lastName : String,

});

userSchema.pre('save',function(next){
var user = this;
  if(!user.isModified('password')) return next();

  bcrpt.genSalt(SALT_WORK_FACTOR, function(err,salt){
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash){
       if (err) return next(err);

       user.password = hash;
       next();
      
    });
  });
});

module.exports = mongoose.model('User', userSchema);
