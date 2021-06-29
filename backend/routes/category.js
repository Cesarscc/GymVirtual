const express = require('express');
const router = express.Router();

const { list, create, remove, item, categoryById } = require('../controllers/categoryController');

router.get('/categories', list);
router.get('/:categoryId', item);

router.post('/createcategory', create);
router.delete('/:categoryId', remove);
router.param('categoryId', categoryById);


module.exports = router; 