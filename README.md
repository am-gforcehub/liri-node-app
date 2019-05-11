#liri-node-app

Get link to LIRI-bot instructions [here](https://docs.google.com/document/d/1rhu3warj2LbRX3HtTd2IvzvEo8DPfa_Td5Vdcqm6uAs/edit?usp=sharing/)

---
- **For:** Southern Methodist University Coding Bootcamp
- **Developer:** Alicia Garcia
- **Deployment Date** 05/11/2019
- **Built With** Node.js, Javascript
- **APIs** OMDB, Spotify, Bandsintown
- **Demo**
See a full demo [here!](https://drive.google.com/file/)


### Description & Requirements
---
Liri is a command line application that takes user commands and queries from the command line and returns data from API's. The following commands have been hard coded into the program to give the user the capability to look up songs, concerts and movie information:

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns that bands next concert
spotify-this | uses the **spotify** API to take a song name from the user and returns the artist, song name, spotify-link and album 
movie-this | uses the **OMDB** API to take a movie name and returns the name, cast, release year, IMDB and Rotten Tomatoes rating, country of origin, language and plot 
do-this | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.

**Before you get started, make sure you have these node packages installed:**
1. **Dotenv:** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

     *Command Line: 'npm install dotenv'*


2. **Request:** - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

     *Command Line: 'npm install request'*

3. **Moment:** - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. 

    *Command Line: 'npm install moment'*

4. **Fs:** - a built in node package 

    *(npm i request)*


Read more about these methods [here](https://www.npmjs.com/)

