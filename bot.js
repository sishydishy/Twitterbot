/**
 * Created by SaishD on 1/19/2017.
 */

console.log("this bot is going to be amazing");

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

var stream = T.stream('user');                  //set up a user stream

stream.on('tweet', tweetEvent);                  //Call back to when someone follows

function tweetEvent(event) {
/*    var fs = require('fs');
    var json = JSON.stringify(event,null,2);
    fs.writeFile("tweet.json",json);*/
    /*var name = event.source.name;
    var screenName = event.source.screen_name;
    tweetIt('@' + screenName + " Thank You for the follow");*/

    var reply = event.in_reply_to_screen_name;
    var text = event.text;
    var from = event.user.screen_name;

    if (reply === 'sishydishybot'){
        var newtweet = '@' + from + " ni hao ";
        tweetIt(newtweet);
    }
}

















/*var p = { q: 'nba',
          count: 2
    };                                                  //api query to trigger the GET request

T.get('search/tweets', p , datafunc);               //GET request

    function datafunc(err, data, response) {
        console.log(data);
    }      */                                         //callback function

function tweetIt(txt) {
    var tweet = {
        status: txt                                    //defining the var tweet
    }
    T.post('statuses/update', tweet, tweeted);
    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        }
        else {
            console.log("works");
        }
    }
}
