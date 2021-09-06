const { Router } = require('express');
const router = Router()
const {getAll,Postear, getById} = require('../controlador/index')


//// localhost / recipe / tipos

router.get('/recipe', getAll)


router.get('/recipe/:id',getById)


router.post('/recipe', Postear)

// async function createNewRecipe(req, res, next) {
//     const id = uuidv4();
//     const { nombre, descripcion, puntuacion, comidasaludable, pasoapaso } = req.body
//     const newRecipe = await Recipe.create({ id, nombre, descripcion, puntuacion, comidasaludable, pasoapaso });
//       res.send(newRecipe);
  
 
//   };




module.exports = router;