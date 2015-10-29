/**
 * Created by zhenfangzhang on 29/10/15.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wecare');
var Schema = mongoose.Schema;

var RecommendationSchema = new Schema({
  message_id: Number,
  type: Number, // article = 0, place = 1, nudge = 2
  scheduledTime: { type: Date, default: Date.now },
  sentTime: { type: Date, default: Date.now },
})

var Recommendation = mongoose.model('healthbox', RecommendationSchema);
module.exports = Recommendation;