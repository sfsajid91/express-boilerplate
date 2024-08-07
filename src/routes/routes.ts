import { Router } from 'express';
import healthCheckRouter from './healthCheck';

const router = Router();

router.use('/health', healthCheckRouter);

router.get('/', (_req, res, next) => {
    const err = new Error('This is an error');
    next(err);
});

export default router;
