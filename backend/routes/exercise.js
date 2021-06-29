const express = require('express');
const router = express.Router();

const { list, create, remove, item, exerciseById } = require('../controllers/exerciseController');

router.get('/exercises', list);
router.get('/:exerciseId', item);
//router.get('/exercises', list); //EJERCICIO POR CATEGORY

router.post('/createexercise', create);
router.delete('/:exerciseId', remove);
router.param('exerciseId', exerciseById);


module.exports = router; 