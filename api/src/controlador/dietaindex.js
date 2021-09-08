const {Diet} = require('../db');


const diets= [
    {name: "gluten free"},
    {name: "dairy free"},
    {name: "lacto ovo vegetarian"},
    {name: "vegan"},
    {name: "paleolithic"},
    {name: "primal"},
    {name: "pescatarian"},
    {name: "fodmap friendly"},
    {name: "whole 30"},
]


async function getDiets (req, res) {
    try {
        const resp = await Diet.findAll()
        if(resp.length > 0) return res.json(resp)
        
        else{ try{
           const dietDb = await Diet.bulkCreate(diets)
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