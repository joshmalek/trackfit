const router = require('express').Router();
let Exercise = require('../models/user.model');

//endpoint to handle incoming http GET request on the /users path
router.route('/').get((req, res) => {
    //mongoose method gives a list of all the users from the mongodb database in json 
    User.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http POST requests to add new users
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;