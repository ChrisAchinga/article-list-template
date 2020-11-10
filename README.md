# Western | REST API Timetable

## Installation

Requirements:

* Node.js
* Express

Used **NPM** to install both node and express.

## Run API Server

On the terminal, naviagate to the root folder and run `npm start` .  
The server runs on **Port 300**; in the browser go to http://localhost:3000/ to view the interface.  

## Tweaks

The API is currenty serving only 50 results to save time during development. To work with all the data, go to **line 8** of `./public/js/api_serve.js` and change the 50 to `data.length` .
