import express from 'express';

import { errors } from '@/middlewares/errors';
import { middlewares } from '@/middlewares/middlewares';
import routes from '@/routes/routes';

export const app = express();

app.use(middlewares);
app.use(routes);
app.use(errors);
