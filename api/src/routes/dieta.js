const {Router} = require('express');

const router = Router()

router.get('/', (req,res)=>{

res.send('no todo mal')
})

module.exports = router;