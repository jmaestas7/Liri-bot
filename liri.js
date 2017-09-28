
var client = require('./key.js');

var params = {screen_name: 'Dedicacted2meds', count: 20};

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets.JSON.stringify('index', { title: 'Express', tweets: tweets }));
    }

    });