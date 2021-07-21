const express = require('express');
const router = express.Router();

const { list, create, remove, item, routinebyuser ,routineById } = require('../controllers/routineController');

router.get('/routines', list);
router.get('/:routineId', item);
router.get('/routines/:user', routinebyuser);


router.post('/createroutine', create);
router.delete('/:routineId', remove);
router.param('routineId', routineById);

module.exports = router;