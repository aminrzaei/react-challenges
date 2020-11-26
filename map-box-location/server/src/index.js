const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const middlewares = require('./middlewares');
const marketRoutes = require('./api/markets');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 4500;

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());

app.use('/api/markets', marketRoutes);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
