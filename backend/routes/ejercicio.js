const express = require('express');
const router = express.Router();

const { list, create, remove, item, ejercicioById } = require('../controllers/ejercicioController');

router.get('/ejercicios', list);
router.get('/:ejercicioId', item);
//router.get('/ejercicios', list); //EJERCICIO POR CATEGORY

router.post('/createejercicio', create);
router.delete('/:ejercicioId', remove);
router.param('ejercicioId', ejercicioById);


module.exports = router; 