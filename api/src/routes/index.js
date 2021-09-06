const { Router } = require('express');
// const express = require ('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipe = require('./recipe.js')
const dieta = require('./dieta.js')

const router = Router();

// router.use(express.json())

// Configurar los routers
router.use('/', recipe);
router.use('/', dieta);










module.exports = router;
