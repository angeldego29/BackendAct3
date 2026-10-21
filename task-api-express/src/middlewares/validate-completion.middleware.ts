// src/middlewares/validate-completion.middleware.ts
import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/app-error.js";

export const validateCompletion = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.is("application/json")) {
    throw new AppError(
      "El cuerpo debe ser JSON.",
      415,
      "UNSUPPORTED_MEDIA_TYPE"
    );
  }

  const { completed } = req.body;

  if (typeof completed !== "boolean") {
    throw new AppError(
      "La solicitud contiene datos inválidos.",
      422,
      "VALIDATION_ERROR",
      [{ field: "completed", message: "Debe ser true o false." }]
    );
  }

  res.locals.completed = completed;
  next();
};
