require('dotenv').config();
const {Router} = require('express');

// const {Recipe} = require('../models/Recipe')
const router = Router()
const {MY_APIKEY} = process.env
const axios = require('axios')

//// localhost / recipe / tipos

router.get('/recipe', (req, res) => {
    let {name} = req.query;
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${MY_APIKEY}&number=20`)
    .then((resultado) => resultado.data)
    .then((resultado) => res.send(resultado))
    .catch(() => res.status().send("Esa receta no existe"));
})


router.get('/:id', (req,res)=>{
    let {id} = req.params
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${MY_APIKEY}`)
    .then(result => result.data)
    .then(result =>{
        res.send(result)
    })
    .catch(()=>{res.send('Esta id no existe')})
})

router.get('/recipe/:diet',(req,res)=>{
    let {name} = req.query;
    let {diet} = req.params
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${MY_APIKEY}&number=20&addRecipeInformation=true/${diet}`)
    .then((resultado) => resultado.data)
    .then((resultado) => res.send(resultado))
    .catch(() => res.status().send("Esa receta no existe"));
})








module.exports = router;