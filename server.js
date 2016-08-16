var Twitter = require('twitter');
var express	= require('express');
var app 	= express();

var client = new Twitter({
	consumer_key : '2Hmx6UXuxlRn7TicxrbTy1H2Q',
	consumer_secret:'qgBVhwADPDKpljlTeS6HMF14PV64DNDNfvJykHvhDLMV5vutdf',
	access_token_key:'126856000-00PtloL3L0uSZtlVyHOyUcjG4vQi5oohXfpImHlh',
	access_token_secret:'KD5frjkG43GuSCvRVmDBycAxEXG5Bfr88KeH5GHDtEsSd'
});
app.get('/search',function(req,res){
	client.get('search/tweets',{q:'HIV/AIDS'},function(error,tweets,response){
		var data = JSON.parse(tweets); 
		//console.log(data.);
		res.json(tweets);
	});	
});

var port = process.env.port || 1337;
app.listen(port,function(err){
	console.log('Listining on : 3000');
});
