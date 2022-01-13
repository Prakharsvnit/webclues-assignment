const express = require('express');
const router = express.Router();

const User = require('../models/user-Schema')

router.post("/create-user", async (req, res) => {
    
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        return res.status(201).send(user);
    }
    catch (err)
    {
        return res.status(401).send(err.message)
    }    
    
})

router.get("/users",async (req, res) =>{
    try {
        const user = await User.find().lean().exec();
        console.log("user:",user);
        return res.status(200).json(user);
    }
    catch (err)
    {
        return res.status(404).send(err.message)
    }
})

module.exports = router;