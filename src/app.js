const express = require('express');
const holidayRoutes = require('./routes/holidayRoutes');

const app = express();

app.use(express.json());

app.use('/api', holidayRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
