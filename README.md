#liri-node-app

Get link to LIRI-bot instructions [here](https://docs.google.com/document/d/1rhu3warj2LbRX3HtTd2IvzvEo8DPfa_Td5Vdcqm6uAs/edit?usp=sharing/)

---
- **For:** Southern Methodist University Coding Bootcamp
- **Developer:** Alicia Garcia
- **Deployment Date** 05/11/2019
- **Built With** Node.js, Javascript
- **APIs** OMDB, Spotify, Bandsintown



### Description & Requirements
---
Liri is a command line node application that takes in parameters and gives you back data from APIs.

The following commands and the functions of these are noted below.

Commands | Function
---------|---------
concert-this | uses the **bandsintown** API to take a band name from the user and returns the following:
-**Artist** -**Venue** -**Venue Location** -**Date and Time**
spotify-this-song | uses the **spotify** API to take a song name from the user and returns the five best matches that includes the  following:
-**Artist(s)** -**Song Name** -**Preview Song** -**Album**
movie-this | uses the **OMDB** API to take a movie name and returns the following:
-**Movie Title** -**Release Year** -**Rotten Tomato Rating** -**IMDb Rating** -**Country** -**Language** -**Plot** -**Lead Actors**
do-what-it-says | uses the built in **readFile()** method to access data from a prepopulated .txt file and return its information as a command/search query.  This uses the spotSong() to return the song "I want it that way"

**Before you get started, make sure you have these node packages installed:**
1. **Dotenv:** Dotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public.

     *Command Line: 'npm install dotenv'*


2. **Request:** - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

     *Command Line: 'npm install request'*

3. **Moment:** - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. 

    *Command Line: 'npm install moment'*

4. **Fs:** - a built in node package 

    *(npm i request)*


Read more about these methods [here](https://www.npmjs.com/)

Functionality

- **Demo**
See a full demo on the functionality of the app [here!](https://drive.google.com/file/)