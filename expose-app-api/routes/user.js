const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const user = require ('../models/users');


// user registration 
router.post('/register', async(req, res)=> { 
    try {

        const { username, email, password} = req.body;

        // now checking of user already exists.
        const existingUser = await user.findOne({where: {email}|| {username}});
        if (existingUser) {
            return res.status(400).json({message: 'user already exist'});
        }

        // Encripting password
        const hashedPassword = await bcrypt.hash(password, 10);

        // creating new user 
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({message: 'Registration sucesssful'})
    } catch(error){
        console.error('Error in User Registration:', error);
        return req.status(500).json({message: 'Internal Error'});
    }

});


// user's login
router.post('/login', async(req,res)=>{
    try{
        const{email, password} = req.body;

        //checking if the user exists
        const user = await user.findOne({where: {email}});
        if (!user){
            return res.return(404).json({message: 'user not found'});
        }

        // check passwaord 
        const isPassValid = await bycrpt.compare(password, user.password);
        if (!isPassValid){
            return res.status(401).json({message: 'Invalid password'});
        }


        //Generate JWT
        const token = jwt.sign ({userId: user.id}, 'your secret key');

        return res.status(200).json({token});
    } catch(error) {
        console.error('Error in user Login', error);
        return res.status(500).json({message: 'Internal server error.'});
    }
});

// Safe Route for Retrieving user profile 
router.get('/me', authentificationToken, async (req, res)=> {
    try{
    // get the authentificated user ID from the request object
    
    const {userId} = req.user;

    // retrieving user details 
    const user = await user.findByPk(userId, {attributes: ['id', 'username', 'email']});
    if (!user) {
        return res.status(404).json({message: 'user not found'});
    }

    return res.status(200).json(user);
    } catch(error){
        console.error('Error retrieving user profile: ', error);
        return res.status(500).json({message: 'Internal server error'});
    }

    // mildware Authentification
    function authentificationToken(req, res, next){
        const authHeader = req.Headers['authorization'];
        const token = authHeader && authHeader.split('')[i];


        if (token== null){
            return res.status(401).json({message: 'unauthorized'});
        }
        jwt.verify(token, 'your-secret-key', (err, user) =>{
            if (err){
                return res.status(403).json({message: 'Invalid token'});
            }

            req.user = user;
            next();
        });
    }
    module.exports = router;

})