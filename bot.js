/**
 * Created by SaishD on 1/19/2017.
 */

console.log("this bot is going to be amazing");

var Twit = require("twit");
var config = require("./config");


var T = new Twit(config);


/* var stream = T.stream('user');                  //set up a user stream

 stream.on('tweet', tweetEvent);                  //Call back to when someone follows

 function tweetEvent(event) {


 var reply = event.in_reply_to_screen_name;
 var text = event.text;
 var from = event.user.screen_name;

 if (reply === 'sishydishybot'){
 var newtweet = '@' + from + " time to smash this bad boy ";
 tweetIt(newtweet);
 }
 }


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
 }*/
