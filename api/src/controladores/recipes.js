const axios = require('axios');
const {Recipe} = require('../models/Recipe')
const {APY_KEY} = process.env;


function getByName(req,res){
    let {name} = req.query
    let nuevo = axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&maxFat=25&number=5&apiKey=${APY_KEY}`)
    .then(results => res.send(results.data.name))
    .catch(res.status(400).send('Ese nombre no existe'))
}

function getById(req,res){
    let {id} = req.params.id
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APY_KEY}`)
    .then(result =>{
        res.send(result.data)
    })
    .catch(res.status(400).message('Esta id no existe'))
}




module.exports ={
    getByName,
    getById,
}