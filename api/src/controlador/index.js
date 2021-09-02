const { MY_APIKEY } = process.env
require('dotenv').config();
const { Recipe, Dieta } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');



async function APIcall() {
    try {
        const recipeApi = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APIKEY}&addRecipeInformation=true&number=100`
        );
        const requiredInfo = recipeApi.data.results.map((recipe) => {
            return {
                title: recipe.title,
                diets: recipe.diets.map((diet) => {
                    return { name: diet };
                }),
                comidasaludable: recipe.healthScore,
                descripcion: recipe.summary,
                image: recipe.image,
                id: recipe.id,
                puntuacion: parseInt(recipe.spoonacularScore),
                pasoapaso: recipe.analyzedInstructions
                    .map((r) => r.steps.map((s) => s.step))
                    .flat(2)
                    .join(""),
            };
        }
        )
        return requiredInfo
    }
    catch { e => console.log(e) }
}


async function getAll(req, res, next) {
    const { name } = req.query;
    if (!name) {
        try {
            const informacionAPI = await APIcall()
            const informacionDB = await Recipe.findAll({
                included: {
                    model: Dieta,
                    attributes: ["nombre"],
                    through: {
                        attributes: [],
                    },
                },
            });
            const respuesta = await Promise.all([informacionAPI, informacionDB])
            return res.send(respuesta);
        }
        catch { (err) => next(err) };
    }
    else {
        const nombreAbuscar = name.toLowerCase()
        try {
            const APIderecetas = await APIcall()
            const FiltradoRecetaApi = APIderecetas.filter(a => {
                if (a.title.toLowerCase().includes(nombreAbuscar)) {
                    return a
                }
            })

            const RecetasDB = await Recipe.findAll({
                where: {
                    title: `${nombreAbuscar}`
                },
                include: {
                    model: Dieta,
                    attributes: ["nombre"],
                    through: {
                        attributes: []
                    }
                }
            })
            const respuesta = await Promise.all([FiltradoRecetaApi, RecetasDB])
            return res.send(respuesta)
        }
        catch { (err) => next(err) }
    }
}


async function Postear(req, res, next) {
    let { title, descripcion, pasoapaso, puntuacion, comidasaludable, dieta } = req.body;

    if (!title || !descripcion) {
        return res.status(404).send("Se necesita nombre y descripcion")
    }

    try {
        const recipeNew = await Recipe.create({
            title,
            descripcion,
            pasoapaso,
            comidasaludable,
            puntuacion,
            id: uuidv4(),
        })
        res.send("Fue creada con exito")
    }
    catch {
        error => next(error)
    }
    /* let dietDb= await Dieta.findAll(dieta)

      recipeNew.addDieta(dietDb) */

}


async function getById(req,res,next){
    const { id } = req.params;

    const llamadaApi = await APIcall()
    try {

      const FiltradoPorID = llamadaApi.filter((a) =>{
        if(a.id == id){
          return a
        }})

       const recipeBD = await Recipe.findAll({
        where: {
          id:{ 
            [Op.eq]:`${id}`
         }},
        include: {
          model: Dieta,
          attributes: ["nombre"],
          through: {
            attributes: [],
          },
        },
      });

      const response = await Promise.all([recipeBD, FiltradoPorID]); 

      return res.send(response);

    } catch {
      (err) => next(err);
    }
}


module.exports = {
    APIcall,
    getAll,
    Postear,
    getById
}