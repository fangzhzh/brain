var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wecare');
var Schema = mongoose.Schema;

// health
var HealthSchema = new Schema({
    userId: Number,
    modTime: { type: Date, default: Date.now },
    createTime: { type: Date, default: Date.now },
    steps: Number,
    distance: Number,
    activity: Number,
    sleepTime: Number,
    deepSleepTime: Number,
    heartRate: Number
});

var Health = mongoose.model('health', HealthSchema);
module.exports= Health;
