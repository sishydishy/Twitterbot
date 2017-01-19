/**
 * Created by SaishD on 1/19/2017.
 */

console.log("this bot is going to be amazing");

var Twit = require("twit");
var config = require("./config");

var T = new Twit(config);

var p = { q: 'nba',
          count: 2
    };                                                  //api query to trigger the GET request

T.get('search/tweets', p , datafunc);               //GET request

function datafunc(err, data, response) {
        console.log(data);
    }                                               //callback function