const express = require('express');
const router = express.Router();

const { list, create, remove, item, publicacionbyuser, updatePublicacion ,publicacionById } = require('../controllers/publicacionController');

router.get('/publicaciones', list);
router.get('/:publicacionId', item);
router.get('/publicaciones/:user', publicacionbyuser);

router.post('/createpublicacion', create);
router.delete('/:publicacionId', remove);
router.put('/:publicacionId', updatePublicacion);
router.param('publicacionId', publicacionById);

module.exports = router;