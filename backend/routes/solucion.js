const express = require('express');
const router = express.Router();

const { list, create, remove, updateSolution ,solucionById, solucionbypost } = require('../controllers/solucionController');

router.get('/soluciones', list);
router.get('/soluciones/:publicacionId', solucionbypost);

router.put('/:solucionId', updateSolution);
router.post('/createsolucion', create);
router.delete('/:solucionId', remove);

router.param('solucionId', solucionById);

module.exports = router;