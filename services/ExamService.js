class ExamService {
    constructor(examRepository) {
        this.examRepository = examRepository;
    }

    async getAll(limit, offset) {
        return this.examRepository.getAll(limit, offset);
    }

    async getById(id) {
        return this.examRepository.getById(id);
    }

    async create(body) {
        return this.examRepository.create(body);
    }
}

module.exports = ExamService;
