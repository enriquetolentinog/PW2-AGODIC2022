const express = require("express");
const router = express.Router();
const checkJwt = require("../middleware/checkJwt");

const student_controller = require("../controllers/studentController");

router.post("/student", student_controller.student_create);
router.get("/student/calificaciones", student_controller.calificaciones);
router.put("/student/update", student_controller.student_update);
router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

router.get("/student", checkJwt, student_controller.student_getAll);
router.get("/student/:id", student_controller.student_getById);
router.get("/promedio/student/:id", student_controller.student_promedio);

module.exports = router;
