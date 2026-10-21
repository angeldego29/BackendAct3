import { AppError } from '../errors/app-error.js';
export const requireJson = (req, _res, next) => {
    if (!req.is('application/json')) {
        next(new AppError('La solicitud debe usar Content-Type application/json.', 415, 'UNSUPPORTED_MEDIA_TYPE'));
        return;
    }
    next();
};
