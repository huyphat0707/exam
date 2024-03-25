const request = require('supertest')
const app = require('../index');

test('GET /api/users', async () => {
    const response = await request(app).get('/api/v1/exams');

    expect(response.status).toBe(200);

    expect(Array.isArray(response.body)).toBe(true);

    // Assert specific properties of the users if needed
    // expect(response.body.length).toBe(2);
    // expect(response.body[0].name).toBe('User 1');
    // expect(response.body[1].name).toBe('User 2');
});