const express = require('express');
const router = express.Router();


const { getEmkits } = require('../controllers/emkitsController')


router.route('/emkits').get(getEmkits)


module.exports = router;