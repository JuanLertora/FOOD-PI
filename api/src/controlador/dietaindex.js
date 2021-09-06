const {Dieta} = require('../db');


const diets= [
    {nombre: "gluten free"},
    {nombre: "dairy free"},
    {nombre: "lacto ovo vegetarian"},
    {nombre: "vegan"},
    {nombre: "paleolithic"},
    {nombre: "primal"},
    {nombre: "pescatarian"},
    {nombre: "fodmap friendly"},
    {nombre: "whole 30"},
]


async function getDiets (req, res) {
    try {
        const resp = await Dieta.findAll()
        if(resp.length > 0) return res.json(resp)
        
        else{ try{
           const dietDb = await Dieta.bulkCreate(diets)
            return res.json(dietDb)
        }
        catch(err) {
            res.json({err})
            console.error(err);
          }
    }
    }
    catch(err) {
        res.json({err})
        console.error(err);
      }
}

module.exports = {getDiets};