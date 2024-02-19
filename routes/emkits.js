const express = require('express');
const router = express.Router();


const { getEmkits, newEmkit } = require('../controllers/emkitsController')


router.route('/emkits').get(getEmkits)
router.route('/emkit/new').post(newEmkit)


module.exports = router;