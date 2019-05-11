//require .env file
require("dotenv").config();
// var axios = require("axios");
//require keys for all 
var keys = require("./keys.js");
//require for spotify
var Spotify = require('node-spotify-api');
//require moment for time in bands
var moment = require("moment");
//require request for omdb
var request = require('request');
//require file system for random
var fs = require("fs");

//process.argv arguments in the object we want to get to 2 and 3
//becasue 0 and 1 are the file paths
var action = process.argv[2];

//slices the selected arguments and joins them in a new array
var parameter = process.argv.slice(3).join(" ");

/********Switch Statement **********/


switch (action) {

    case 'concert-this':
        bandsInTown(parameter);
        break;

    case 'spotify-this-song':
        spotSong(parameter);
        break;

    case 'movie-this':
        movieInfo(parameter);
        break;

    case 'do-what-it-says':
        getRandom(parameter);

        break;
}

/********Bands in Town Function********/

function bandsInTown() {

    // if (parameter === '' || parameter === null) {
    //     parameter = 'Ariana Grande'
    // }

    var bands = (keys.bands)
    /*Request using bandsintown API*/

    request("http://rest.bandsintown.com/artists/" + parameter + "/events?app_id=" + bands, function (error, response, body) {
        if (!error && response.statusCode === 200) {


            // capture obejct data and use json to console log
            var userBand = JSON.parse(body);
            // use loop to access data
            if (userBand.length > 0) {
                for (i = 0; i < 1; i++) {

                    // CONSOLE DESIRED DATA USING E6 SYNTAX
                    console.log(`\n\nArtist: ${userBand[i].lineup[0]} 
                    \nVenue: ${userBand[i].venue.name}
                    \nVenue Location: ${userBand[i].venue.latitude},
                    ${userBand[i].venue.longitude}
                    \nVenue City: ${userBand[i].venue.city}, 
                    ${userBand[i].venue.country}`)

                    // MOMENT.JS TO FORMAT THE DATE MM/DD/YYYY
                    var concertDate = moment(userBand[i].datetime).format("MM/DD/YYYY hh:00 A");
                    console.log(`Date and Time: ${concertDate}\n\n- - - - -`);
                };
            } else {
                console.log('Band or concert not found!');
            };
        };
    });
};

/******Spotify Function*****/

function spotSong() {

    if (parameter === '' || parameter === null) {
        parameter = 'The Sign Ace of Base'
    }

    var spotify = new Spotify(keys.spotify)
    var getArtistNames = function (artist) {
        return artist.name;

    }
    spotify.search({ type: 'track', query: parameter, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log("#" + (i + 1));
            console.log("Artist(s): " + songs[i].artists.map(
                getArtistNames));
            console.log("Song Name: " + songs[i].name);
            console.log("Preview Song: " + songs[i].external_urls.spotify);
            console.log("Album: " + songs[i].album.name);
            console.log("========================================================")
        }
    });
}


/*********Movie *******/

function movieInfo(parameter) {

    if (parameter === '' || parameter === null) {
        parameter = 'Mr. Nobody'
        console.log("If you haven't watched Mr. Nobody, then you should: <http://www.imdb.com/title/tt0485947/> It's on Netflix!");
    }
    /*Request using omdb API*/

    request("http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&tomatoes=true&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {

            //couldn't get rotten tomatoes to work used 
            //tomatoes=true and field in array Rating[1].Value


            console.log('--------------------');
            console.log('Movie Title: ' + JSON.parse(body).Title);
            console.log('Release Year: ' + JSON.parse(body).Year);
            console.log('Rotten Tomato Rating: ' + JSON.parse(body).Ratings[1].Value);
            console.log('IMDb Rating: ' + JSON.parse(body).imdbRating);
            console.log('Country: ' + JSON.parse(body).Country);
            console.log('Language: ' + JSON.parse(body).Language);
            console.log('Plot: ' + JSON.parse(body).Plot);
            console.log('Lead Actors: ' + JSON.parse(body).Actors);
            console.log('--------------------');

        }
    });
}

/*****Random.txt******/

function getRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log(error);
            /*catch data and use the split method to seperate objects within our new array*/
        } else {
            var dataArr = data.split(',');
            /*pass in parameters set*/
            action = (dataArr[0]);
            parameter = dataArr[1];
            /*call funtion*/
            spotSong(action, parameter);
        }

    });
}
