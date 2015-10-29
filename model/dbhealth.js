var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wecare');
var Schema = mongoose.Schema;

// health
var HealthSchema = new Schema({
    user_id: { type: Number, required: true },
    mod_time: { type: Date, default: Date.now },
    create_time: { type: Date, default: Date.now },
    steps: Number,
    distance: Number,
    activity: Number,
    sleep_time: Number,
    deep_sleep_time: Number,
    weight: Number,
    height: Number,
    heart_rate: Number
});


var CounterSchema = new Schema({
   _id: {type: String, required: true},
   seq: { type: Number, default: 0 }
});

var Health = mongoose.model('health', HealthSchema);
module.exports= Health;
