const express = require('express');
const router = express.Router();

const UserController = require('../api/controllers/UserController');

router.put('/:id', UserController.Update);
router.delete('/:id', UserController.Delete);
router.post('/create', UserController.Create);
router.get('/', UserController.GetList);
router.get('/:id', UserController.GetDetail);




module.exports = router;


