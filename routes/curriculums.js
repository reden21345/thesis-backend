const express = require('express');
const router = express.Router();


const { newCurriculum } = require('../controllers/curriculumController')


// router.route('/emkits').get(getEmkits)
// router.route('/emkit/:id').get(getSingleEmKit)

router.route('/curriculum/new').post(newCurriculum)

// router.route('/admin/emkit/:id').put(updateEmKit).delete(deleteEmkit)


module.exports = router;