const express = require('express');
const router = express.Router();


const { getEmkits,
    newEmkit,
    getSingleEmKit,
    updateEmKit ,
    deleteEmkit
} = require('../controllers/emkitsController')


router.route('/emkits').get(getEmkits)
router.route('/emkit/:id').get(getSingleEmKit)

router.route('/emkit/new').post(newEmkit)

router.route('/admin/emkit/:id').put(updateEmKit).delete(deleteEmkit)


module.exports = router;