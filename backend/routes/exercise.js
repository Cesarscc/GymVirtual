const express = require('express');
const router = express.Router();

const { list, create, remove, item, exerciseById, exercisesByCategory } = require('../controllers/exerciseController');

router.get('/exercises', list);
router.get('/:exerciseId', item);
router.get('/exercises/:nameCategory/:level', exercisesByCategory);

router.post('/createexercise', create);
router.delete('/:exerciseId', remove);
router.param('exerciseId', exerciseById);


module.exports = router; 