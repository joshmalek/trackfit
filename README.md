# trackfit
### Description
A fitness tracker built with the MERN stack.  The tracker takes input in the form of username, exercise and length of exercise.  It can then allow a user to view their exercises, or add new ones.

![Main site](/img/exercises.PNG)

The MERN stack consists of:

    MongoDB: document-based open source database
    Express: web application framework for Node.js
    React: Javascript front end library for building UIs
    Node.js: Javascript run-time enviroment that executes Javascript code outside of a browser
    Mongoose: schema-based solution to model application data

### Backend In-depth

The server is running on Express, which allowed us to run on localhost port 5000, and listen for incoming http requests.  Using Mongoose, we were able to connect our server to our MongoDB database.  Our credentials were handled with dotenv, which is great because it allows us to create a .env file which can contain sensitive keys and credentials.  Whenever we want to use credentials from .env, we simply call process.env.credential.  Another package we used was cors, which allows servers to specify not just who can access its assets, but also how the assets can be accessed.  This is middleware for Express that helps tighten security.  

#### Schemas
The two models we used are the Exercise model schema, and the User model schema.  Both were Mongoose schemas, which allows clean integration with MongoDB.

Exercise schema: 

    username: String
    description: String
    duration: Number (of minutes)
    date: date

User schema:
    
    username: String

#### Routes
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
    
### Frontend In-depth

The frontend was built with React, with the main extensions being Bootstrap, react-router-dom, and axios.  Bootstrap is a library that makes our page reactive to resizing, and is in general great for easy page styling.  react-router-dom allows us to route to other components on our site easily, while axios is used to connect the frontend to backend with simple HTML calls.  React is a component framework, and our page is made up of 5 main components.  We have the Navbar at the top, which uses mostly Bootstrap styling.  The Navbar contains our three main components, Exercises, Create Exercise Log, and Create User.  We have a fifth component, Edit Exercise, which is only accessible from the main Exercises list.  

#### Components

Exercises:
This is the main homepage that is returned after most operations.  It has a table with all the exercises as entries, and the users and date completed.  It also allows redirects for editing and deleting an entry.
![Exercises](/img/exercises.PNG)

Create Exercise Log:

![Create Exercise](/img/create-exercise.PNG)

Create User:

![Create User](/img/create-user.PNG)

Edit Exercise Log:

![Edit Exercise](/img/edit-exercise.PNG)


Frontend Dependencies:

    bootstrap
    react-router-dom

