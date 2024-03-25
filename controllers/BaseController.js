class BaseController {
    constructor(service) {
        this.service = service;
    }

    async getAll(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;
            const offset = (page - 1) * limit;
            const data = await this.service.getAll(limit, offset);

            return res.status(200).send(data);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    async getById(req, res) {
        try {
            const data = await this.service.getById(req.params.id);
            if (!data) {
                res.status(404).send('Resource not found');
                return;
            }
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async create(req, res) {
        try {
            const data = await this.service.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async update(req, res) {
        try {
            const data = await this.service.update(req.params.id, req.body);
            if (!data) {
                res.status(404).send('Resource not found');
                return;
            }
            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async delete(req, res) {
        try {
            const data = await this.service.delete(req.params.id);
            if (!data) {
                res.status(404).send('Resource not found');
                return;
            }
            res.json({ message: 'Resource deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = BaseController;
