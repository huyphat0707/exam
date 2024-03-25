require('dotenv').config();
const express = require('express');
require('express-group-routes');
const app = express();

// Middleware
app.use(express.json());

// Routes
const examRoutes = require('./routes/exam/index');
const questionRoutes = require('./routes/question/index');
app.group("/api/v1", (router) => {
    router.use('/exams', examRoutes);
    // router.use('/questions', questionRoutes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
