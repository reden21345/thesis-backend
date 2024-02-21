const express = require('express');
const router = express.Router();


const { newCurriculum, getCurriculum } = require('../controllers/curriculumController')


router.route('/curriculums').get(getCurriculum)
// router.route('/emkit/:id').get(getSingleEmKit)

router.route('/curriculum/new').post(newCurriculum)

// router.route('/admin/emkit/:id').put(updateEmKit).delete(deleteEmkit)


module.exports = router;