const express = require('express');
const router = express.Router();


const { newCurriculum,
    getCurriculum,
    getSingleCurriculum,
    updateCurriculum,
    deleteCurriculum
} = require('../controllers/curriculumController')


router.route('/curriculums').get(getCurriculum)
router.route('/curriculum/:id').get(getSingleCurriculum)

router.route('/curriculum/new').post(newCurriculum)

router.route('/admin/curriculum/:id').put(updateCurriculum).delete(deleteCurriculum)


module.exports = router;