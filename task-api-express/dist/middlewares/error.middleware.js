import { AppError } from "../errors/app-error.js";
// Middleware para validar y cargar taskId en res.locals
export const validateTaskId = (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        throw new AppError("El id debe ser un entero positivo.", 400, "VALIDATION_ERROR", [{ field: "id", message: "Debe ser un número entero positivo." }]);
    }
    res.locals.taskId = id;
    next();
};
// Middleware para validar y cargar taskTitle en res.locals
export const validateTaskTitle = (req, res, next) => {
    const title = req.body.title;
    if (typeof title !== "string" || !title.trim()) {
        throw new AppError("La solicitud contiene datos inválidos.", 422, "VALIDATION_ERROR", [{ field: "title", message: "Debe ser texto no vacío." }]);
    }
    if (title.trim().length > 120) {
        throw new AppError("La solicitud contiene datos inválidos.", 422, "VALIDATION_ERROR", [{ field: "title", message: "No debe superar 120 caracteres." }]);
    }
    res.locals.taskTitle = title.trim();
    next();
};
// Middleware central de manejo de errores
export const errorHandler = (err, _req, res, _next) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
                details: err.details,
            },
        });
        return;
    }
    // Error desconocido
    res.status(500).json({
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Ocurrió un error inesperado.",
        },
    });
};
