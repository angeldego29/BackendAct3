import { AppError } from '../errors/app-error.js';
export const notFound = (req, _res, next) => {
    next(new AppError(`No existe ${req.method} ${req.originalUrl}.`, 404, 'ROUTE_NOT_FOUND'));
};
