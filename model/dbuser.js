// grab the things we need
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wecare');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user_id: { type: Number, required: true, unique: true},
  user_name: String,
  nick_name: String,
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var CounterSchema = new Schema({
   _id: {type: String, required: true},
   seq: { type: Number, default: 0 }
});

var Counter = mongoose.model('counter', CounterSchema);

userSchema.pre('validate', function(next) {
    console.log('pre save')
    var user = this;
    Counter.findByIdAndUpdate({_id:'user_id'}, {$inc: { seq: 1} }, function(error, counter1)   {
        if(error)
            return next(error);
        console.log(counter1);
        if (counter1){
          user.user_id = counter1.seq;
          next();
        }
    });
});

var User = mongoose.model('user', userSchema);

// make this available to our users in our Node applications
module.exports = User;
