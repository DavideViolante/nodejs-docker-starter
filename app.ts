import * as express from 'express';
import rateLimit = require('express-rate-limit');

const app = express();
app.use('/api', rateLimit({ max: 900, windowMs: 1000 * 15 * 60 }));
app.get('/', (req, res) => res.send('Hello World!'));

export { app };
