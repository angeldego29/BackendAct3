import { AppError } from '../errors/app-error.js';
export const errorHandler = (error, _req, res, _next) => {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({ error: error.message });
        return;
    }
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor.' });
};
