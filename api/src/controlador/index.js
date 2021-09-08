require('dotenv').config();
const { MY_APIKEY } = process.env
const { Recipe, Diet } = require('../db')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');


async function APIcall() {
    try {
        const recipeApi = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${MY_APIKEY}&addRecipeInformation=true&number=5`
        );
        const requiredInfo = recipeApi.data.results.map((recipe) => {
            return {
                title: recipe.title,
                diets: recipe.diets.map((diet) => {
                    return { name: diet };
                }),
                healthyness: recipe.healthScore,
                summary: recipe.summary,
                image: recipe.image,
                id: recipe.id,
                score: parseInt(recipe.spoonacularScore),
                steps: recipe.analyzedInstructions
                    .map((r) => r.steps.map((s) => s.step))
                    .flat(2)
                    .join(""),
            };
        }
        )
        return requiredInfo
    }
    catch (error) { console.log(error) }
}



async function getAll(req, res, next) {
    const { name } = req.query;
    if (!name) {
        try {
            const informacionAPI = await APIcall()
            const informacionDB = await Recipe.findAll({
                    include: {
                      model: Diet,
                      attributes: ["name"],
                      through: {
                        attributes: [],
                      },
                    },
            });
            return res.send(await Promise.all([informacionDB, informacionAPI]));
        }
        catch (err) {
            res.json({ err })
            console.error(err);
        }
    }
    else {
        const nameAbuscar = name.toLowerCase()
        try {
            const APIderecetas = await APIcall()
            const FiltradoRecetaApi = APIderecetas.filter(a => {
                if (a.title.toLowerCase().includes(nameAbuscar)) {
                    return a
                }
            })

            const RecetasDB = await Recipe.findAll({
                where: {
                    title: `${nameAbuscar}`
                },
                include: {
                    model: Diet,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                }
            })
            return res.send(await Promise.all([FiltradoRecetaApi, RecetasDB]))
        }
        catch (err) {
            res.json({ err })
            console.error(err);
        }
    }
}


async function Postear(req, res, next) {
    let { title,
        summary,
        score,
        healthyness,
        steps,
        diets } = req.body;
    if (!title || !summary) {
        return res.status(404).send("Se necesita name y descripsion")
    }
    try {
        const newRecipe = await Recipe.create({
            title,
            summary,
            score,
            healthyness,
            steps,
            id: uuidv4(),
        });
        if (diets) {
            const dietDb = await Diet.findAll({
                where: {
                    name: diets
                },
                attributes: [
                    'id'
                ]
            }
            )
            newRecipe.addDiet(dietDb)
        }
        res.send("Fue creada con exito")
    }
    catch (err) {
        res.json({ err })
        console.error(err);
    }
}


async function getById(req, res, next) {
    const { id } = req.params;
    const nameid = parseInt(id)

    const llamadaApi = await APIcall()
    try {

        const FiltradoPorID = llamadaApi.filter((a) => {
            if (a.id == nameid) {
                return a
            }
        })

        const recipeBD = await Recipe.findByPk(id,{
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }

        })

        const response = await Promise.all([recipeBD, FiltradoPorID]);

        return res.send(response);

    } catch (err) {
        res.json({ err })
        console.error(err);
    }
}


module.exports = {
    APIcall,
    getAll,
    Postear,
    getById
}