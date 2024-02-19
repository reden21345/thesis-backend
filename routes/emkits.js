const express = require('express');
const router = express.Router();


const { getEmkits, newEmkit, getSingleEmKit } = require('../controllers/emkitsController')


router.route('/emkits').get(getEmkits)
router.route('/emkit/:id').get(getSingleEmKit)
router.route('/emkit/new').post(newEmkit)


module.exports = router;