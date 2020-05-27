const router = require('express').Router();
let User = require('../models/user.model');

//endpoint to handle incoming http GET request on the /users path
router.route('/').get((req, res) => {
    //mongoose method gives a list of all the users from the mongodb database in json 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles incoming http POST requests to add new users
router.route('/add').post((req, res) =>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;