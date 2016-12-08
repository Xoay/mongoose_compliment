var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

function randomCompliment(compliments)

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	var name = req.params.name || "Friend";
	var color = randomColor();
	var compliment = null;

	compliment.find({}, '', function(err, results) {
		if (err) console.log(err);

		console.log(results);

		var random = randomCompliment(results);

		compliment = random.compliment;

		res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	});

	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW

	 // this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.

});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
	res.redirect('/');
});

module.exports = router;
