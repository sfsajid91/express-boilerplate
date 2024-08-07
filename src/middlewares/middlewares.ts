import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

// Custom headers
const headers = (_req: Request, res: Response, next: NextFunction) => {
    res.header('X-Powered-By', 'NodeJS'); // X-Powered-By: NodeJS
    next();
};

export const middlewares = [express.json(), morgan('dev'), cors(), headers];
