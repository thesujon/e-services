# e-services

#### E-Services is built on top of the nodejs platform using the MongoDB database.  So please make sure you have nodejs and mongodb installed at your computer


#### To run the app in local server

$ cd e-services
$ npm install
$ npm start

Then open the browser at http://localhost:3000/    you should see the app running.

#### Please follow the instructions below to update the production server
$ heroku login

$ git push heroku master
$ heroku open

you should see the app running at production

#### To run the app in local machine using heroku
$ heroku local web

Then open the browser at http://localhost:5000/  you should see the app running locally