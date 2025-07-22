const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entityController');

router.get('/boards', entityController.getBoards);

router.post('/boards', entityController.createBoard);

router.get('/mediums', entityController.getMediums);

router.post('/mediums', entityController.createMedium);

router.get('/class-categories', entityController.getClassCategories);

router.post('/class-categories', entityController.createClassCategory);

router.get('/standards', entityController.getStandards);

router.post('/standards', entityController.createStandard);


router.get('/subjects', entityController.getSubjects);

router.post('/subjects', entityController.createSubject);

router.get('/universities', entityController.getUniversities);

router.post('/universities', entityController.createUniversity);

router.get('/degree-types', entityController.getDegreeTypes);

router.post('/degree-types', entityController.createDegreeType);
router.get('/exam-types', entityController.getExamTypes);

router.post('/exam-types', entityController.createExamType);

module.exports = router;
