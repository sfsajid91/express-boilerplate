import chalk from 'chalk';
import type { NextFunction, Request, Response } from 'express';

class ExpressError extends Error {
    status?: number;

    constructor(message: string, status?: number) {
        super(message);
        this.status = status;
    }
}

const notFoundHandler = (_req: Request, _res: Response, next: NextFunction) => {
    const error = new ExpressError(
        'The URL you are looking for does not exist'
    );
    error.status = 404;
    next(error);
};

const errorHandler = (
    error: ExpressError,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
) => {
    console.log(chalk.red(error));
    const message = error.message ? error.message : 'Internal Server Error';
    const status = error.status ? error.status : 500;

    res.status(status).json({
        error: message,
    });
};

export const errors = [notFoundHandler, errorHandler];
