var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	Health.find({}, function(err, healths) {
		if (err) { return next(error);}

		console.log(healths);
		res.send(healths);
	})
});

router.post('/', function(req, res, next) {
	var health = new Health({
	});
	health.sve( function (err) {
		if (err) { return next(error)}
		res.send("health for "+health.create_time + ' save success');
	})
});

router.delete('/:userid',function(req, res, next){
  console.log("delete: ");
  Health.remove({user_id: req.params.userid}, function(err) {
    if(err)
      return next(err);

  console.log(req.params.userid+'delete susscess');
  res.send(req.params.userid+'delete susscess')
})});

module.exports = router;