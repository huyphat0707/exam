const BaseController = require('./BaseController');
const validator = require('validator');

class ExamController extends BaseController {
    constructor(service) {
        super(service);
    }

    async create(req, res) {
        const newData = req.body;
        if (!validator.isLength(newData.name, { max: 100 })) {
            return res.status(422).send('Title must be max 10 characters long');
        }

        return super.create(req, res);
    }
}

module.exports = ExamController;