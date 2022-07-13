const express = require('express');
require('express-async-errors');

const errorMiddleware = require('./middlewares');
const patientRouter = require('./routes');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/patients', patientRouter);
app.use(errorMiddleware);

app.listen(PORT, () => console.log('application started at: ', PORT));
