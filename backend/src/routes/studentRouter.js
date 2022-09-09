const express = require('express');
const router = express.Router();

const student_controller = require('../controllers/studentController');

router.post("/student", student_controller.student_create);
router.get("/student/calificaciones", student_controller.calificaciones);

module.exports = router;