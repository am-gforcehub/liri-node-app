//code that reads and set any enviroment variables with the dotenv package
require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var moment = require("moment");
var request = require('request');
var fs = require("fs");

//process.argv arguments in the object we want to get to 2 and 3
//becasue 0 and 1 are the file paths
var action = process.argv[2];

//slices the selected arguments and joins them in a new array
var parameter = process.argv.slice(3).join(" ");

/********Switch Statement **********/


switch (action) {

    case 'concert-this':
        bandsInTown();
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




//Bands in TOwn

function bandsInTown() {
    console.log("BandsinTown working");
}
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
    request("http://www.omdbapi.com/?t=" + parameter + "&y=&plot=short&tomatoes=true&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {

            //couldn't get rotten tomatoes to work used 
            //tomatoes=true and file = .tomatoRating


            console.log('--------------------');
            console.log('Movie Title: ' + JSON.parse(body).Title);
            console.log('Release Year: ' + JSON.parse(body).Year);
            console.log('Rotten Tomato Rating: ' + JSON.parse(body).tomatoRating);
            console.log('IMDb Rating: ' + JSON.parse(body).imdbRating);
            console.log('Country: ' + JSON.parse(body).Country);
            console.log('Language: ' + JSON.parse(body).Language);
            console.log('Plot: ' + JSON.parse(body).Plot);
            console.log('Lead Actors: ' + JSON.parse(body).Actors);
            console.log('--------------------');

        }
    });
}



function getRandom() {
    //console.log("Read text function called.");
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log(error);
        } else {
            //var dataArr = data.split(',');
            spotSong(data[1]);
        }

    });
}
