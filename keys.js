//http://www.omdbapi.com/?i=tt3896198&apikey=bda798c5
//bandsintown
//a7029bc9-1f89-4605-9ba3-0116028d02c4 
//spotify
//client id: fa9bfcce1170431bb973f910d9fd8d82
//client secret: 026c2fccf53748579f6e3d66db18d118


console.log('this is loaded');

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bands = {
    key: process.env.BANDS_KEY,
};

exports.movies = {
    key: process.env.MOVIE_KEY,
};
