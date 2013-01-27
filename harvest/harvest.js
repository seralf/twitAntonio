var twitter = require('ntwitter');
var mongoose = require('mongoose');
var config = require('../config.js');
var credentials = require('./credentials.js');

var twschema = new mongoose.Schema({
    tw_id : String,
    tw_text : String,
    tw_userid : String,
    tw_name : String,
    in_reply_to_status_id : String,
    in_reply_to_screen_name : String,
    tw_truncated : Boolean
  });

var t = new twitter({
    consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret
});

t.stream(
    'statuses/filter',
    { track: ['twitantonio'] },
    function(stream) {
        stream.on('data', function(tweet) {
            console.log(tweet);
        });
    }
);