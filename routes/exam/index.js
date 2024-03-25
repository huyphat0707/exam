const express = require('express');
const examRoute = express.Router();

const ExamService = require('../../services/ExamService');
const ExamRepository = require('../../repositories/ExamRepository');
const ExamController = require('../../controllers/ExamController');

const examRepository = new ExamRepository();
const examService = new ExamService(examRepository);
const examController = new ExamController(examService);

examRoute.get('/', examController.getAll.bind(examController));
examRoute.get('/:id', examController.getById.bind(examController));
examRoute.post('/', examController.create.bind(examController));
examRoute.put('/:id', examController.update.bind(examController));
examRoute.delete('/:id', examController.delete.bind(examController));

module.exports = examRoute;
