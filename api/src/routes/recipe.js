require('dotenv').config();
const { Router } = require('express');
const router = Router()
const { MY_APIKEY } = process.env
const axios = require('axios')
const {getAll,Postear, getById} = require('../controlador/index')


//// localhost / recipe / tipos

router.get('/recipe', getAll)


router.get('/recipe/:id',getById)

router.get('/recipe/:diet', (req, res) => {
    let { name } = req.query;
    let { diet } = req.params
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${MY_APIKEY}&number=20&addRecipeInformation=true/${diet}`)
        .then((resultado) => resultado.data)
        .then((resultado) => res.send(resultado))
        .catch(() => res.status().send("Esa receta no existe"));
})


router.post('/recipe', Postear)

// async function createNewRecipe(req, res, next) {
//     const id = uuidv4();
//     const { nombre, descripcion, puntuacion, comidasaludable, pasoapaso } = req.body
//     const newRecipe = await Recipe.create({ id, nombre, descripcion, puntuacion, comidasaludable, pasoapaso });
//       res.send(newRecipe);
  
 
//   };




module.exports = router;