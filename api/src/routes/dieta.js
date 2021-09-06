const {Router} = require('express');
const { getDiets } = require('../controlador/dietaindex');

const router = Router()

router.get('/types',getDiets) 

module.exports = router;