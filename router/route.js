const express = require('express')
const router = express.Router()
const uuid = require('uuid') // this package used to identify unique id,eg when we are requesting for user by id or we are updating the record or deleting a record

let routes = require('../Users')

// get all items in users file
router.get('/', (req,res) => {
    res.json(routes)
}); //to get the record we use localhost:port/api/variable name(the one which reuired the file with the array created or whatever you creatted in the original json package ie User.js) in router

// get user by id
router.get('/:id',(req,res)=>{
    const found = routes.some(user => user.id===parseInt(req.params.id))

    if(found){
        res.json(routes.filter(user => user.id===parseInt(req.params.id)))
    }
    else{
        res.sendStatus(404)
    }
})

// create new user
router.post('/',(req,res) =>{
    const newUser = {
        id:uuid.v4(), // uuid.v4() will help to create a unique id for the new user
        name:req.body.name,
        email:req.body.email
    }

    if(!newUser.name || !newUser.email) {
        res.sendStatus(404)
    }

    routes.push(newUser)
    res.json(routes)
})

// upate record
router.put('/:id',(req,res)=>{
    const found = routes.some(user => user.id===parseInt(req.params.id))

    if(found){
        const UpdateUser = req.body;
        routes.forEach(user => {
            if(user.id===parseInt(req.params.id)) {
                user.name = UpdateUser.name? UpdateUser.name: user.name
                user.email = UpdateUser.email? UpdateUser.email: user.email

                res.json({msg:'user updated', user})
            }
        })
    }
})

// delete record
router.delete('/:id',(req,res)=>{
    const found = routes.some(user => user.id===parseInt(req.params.id))

    if(found){
        routes = routes.filter(user => user.id !==parseInt(req.params.id))
        res.json({
            msg:'User deleted',routes
        })
    } else{
        res.sendStatus(400)
    }
})

module.exports = router;
