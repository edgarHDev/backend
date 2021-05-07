const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const {check, validationResult} = require('express-validator');
const orderAge = require('../../utils/orderAge');
const orderLastname = require('../../utils/orderLastname');

router.get('/', async(req, res) => {
    try{
        const age =  orderAge(await User.find());
        const lastname = orderLastname(await User.find());

        res.json([age, lastname]);

    }catch(error){
        res.status(500).send(error.message);
    }
    
});
router.post('/addUser',[
    //Validation
    check('name', 'Nombre es requerido').not().isEmpty(),
    check('lastname', 'Apellido paterno es requerido').not().isEmpty(),
    check('surname', 'Apellido materno es requerido').not().isEmpty(),
    check('age', 'Edad es requerido').not().isEmpty(),
    check('email', 'Correo es requerido').not().isEmpty(),
    check('phone', 'Telefono es requerido').not().isEmpty(),
    check('age', 'Edad es dato numerico').isNumeric(),
], async(req,res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})    
    }

    try {
        const {name, lastname, surname, age, email, phone} = req.body;

        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({errors : [{ message : 'El usuario ya existe'}]});            
        }

        user = new User({
            name, 
            lastname,
            surname,
            age,
            email,
            phone
        });
        await user.save();
        
        res.json({message : 'Se ha registrado el usuario con exito.', user: user});
        
       // const users = await User.pos
    } catch (error) {
        res.status(500).send(error.message)   
    }
})

module.exports = router;