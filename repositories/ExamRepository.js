const { Exam } = require('../models');

class ExamRepository {

    async getAll(limit, offset) {
        const exams = await Exam.findAll({ limit, offset });

        return exams;
    }

    async getById(id) {
        const exam = await Exam.findByPk(id);

        return exam;
    }

    async create(body) {
        const exam = await Exam.create(body);

        return exam;
    }
}

module.exports = ExamRepository;
