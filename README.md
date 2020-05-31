# trackfit
A fitness tracker built with the MERN stack.  The tracker takes input in the form of username, exercise and length of exercise.  It can then allow a user to view their exercises, or add new ones.

The MERN stack consists of:

    MongoDB: document-based open source database
    Express: web application framework for Node.js
    React: Javascript front end library for building UIs
    Node.js: Javascript run-time enviroment that executes Javascript code outside of a browser
    Mongoose: schema-based solution to model application data



Backend In-depth:

I built a server running on Express, which allowed us to run on localhost port 5000, and listen for incoming http requests.  Using Mongoose, we were able to connect our server to our MongoDB database.  Our credentials were handled with dotenv, which is great because it allows us to create a .env file which can contain sensitive keys and credentials.  Whenever we want to use credentials from .env, we simply call process.env.credential.  Another package we used was cors, which allows servers to specify not just who can access its assets, but also how the assets can be accessed.  This is middleware for Express that helps tighten security.  The two models we used are the Exercise model schema, and the User model schema.  Both were Mongoose schemas, which allows clean integration with MongoDB.

Exercise schema: 

    username: String
    description: String
    duration: Number (of minutes)
    date: date

User schema:
    
    username: String

Within our server we had two routes, /exercises and /users.

/exercises route:

    ../             -> endpoint to retrieve a list of all exercises
    ../add          -> endpoint to add new exercises
    ../:id (GET)    -> endpoint to retrieve exercise by id
    ../:id (DELETE) -> endpoint to delete exercise by id
    ../update/:id   -> endpoint to update exercise by id
    
/users route:
    
    ../    -> endpoint to retrieve a list of all users
    ../add -> endpoint to add new users
    
Backend dependencies:

    cors
    dotenv
    express
    mongoose
    
Frontend In-depth:

Notes:
axios was used to connect the frontend to the backend, and was installed separtely through npm.  axios can make POST and GET requests to our server endpoint.    

Frontend Dependencies:

    bootstrap
    react-dom
    react-router-dom

