const router = require('express').Router();
const {User} = require('../../models');

/**** CREATE ****/
// Route to sign up a new user
// POST method with endpoint '/api/users/'
// test with: {"username": "testUser", "email": "testUser@email.com", "password": "Password123"}
router.post('/', async (req, res ) => {
    console.log('req.body', req.body);
    try {
      const newUser = await User.create({
        username: req.body.username,
        userEmail: req.body.email,
        password: req.body.password,
      });
      // TODO: modify session object to include user info and loggedIn boolean
      res.status(201).json(newUser); // 201 - Created
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // 500 - Internal Server Error
    }
});

/**** READ -optional ****/
// Route to retrieve all users
// GET method with endpoint '/api/users/'
router.get('./', async (req, res) => {
    try {
      const users = await User.findAll()
      res.status(200).json(users); // 200 - OK
    } catch (error) {
        console.log(error);
        res.status(500).json(error); // 500 - Internal Server Error
    }
});

module.exports = router;