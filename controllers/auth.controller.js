// Dependencies
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

let userModel = require('../model/users').model

router.post('/login', (req, res, next) => {
    userModel.findOne({ username: req.body.username }, (err, user) => {
        if (user === null) {
            return res.status(500).send('Login inválido!');
        }
        let hash = req.body.hash
        if (hash == user.hash) {
            //auth ok
            const id = user.id;
            var token = jwt.sign({ id }, process.env.API_SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.status(200).send({ auth: true, token: token });
            
        }
        return res.status(500).send('Login inválido!');
    })
})
router.get('/logout', (req, res) => {
    res.status(200).send({ auth: false, token: null });
})

// Return router
module.exports = router;