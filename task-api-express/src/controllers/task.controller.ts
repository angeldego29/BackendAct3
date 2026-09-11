import type { NextFunction, Request, Response } from "express";
import {
  completeTask,
  createTask,
  deleteTask,
  findTaskById,
  listTasks,
  updateTaskTitle,
} from "../services/task.service.js";
import { AppError } from "../errors/app-error.js";

const parseId = (value: string | undefined): number => {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    throw new AppError("El id debe ser un entero positivo.", 400);
  }
  return id;
};

export const getTasks = (_req: Request, res: Response): void => {
  const tasks = listTasks();
  console.log("\n📋 Tareas registradas:");
  console.table(
    tasks.map((t) => ({
      id: t.id,
      title: t.title,
      status: t.status,
      createdAt: t.createdAt.toLocaleString(),
    }))
  );
  res.status(200).json({ data: tasks });
};

export const getTask = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.status(200).json({ data: findTaskById(parseId(req.params.id as string)) });
  } catch (error: unknown) {
    next(error);
  }
};

export const postTask = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const task = createTask(req.body.title);
    console.log("\n✅ Nueva tarea creada:");
    console.table([{ id: task.id, title: task.title, status: task.status }]);
    res.status(201).json({ data: task });
  } catch (error: unknown) {
    next(error);
  }
};

export const patchTaskComplete = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const task = completeTask(parseId(req.params.id as string));
    console.log(`\n✔️ Tarea ${task.id} marcada como completada`);
    res.status(200).json({ data: task });
  } catch (error: unknown) {
    next(error);
  }
};

export const patchTaskTitle = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const task = updateTaskTitle(parseId(req.params.id as string), req.body.title);
    console.log(`\n✏️ Tarea ${task.id} actualizada con nuevo título: "${task.title}"`);
    res.status(200).json({ data: task });
  } catch (error: unknown) {
    next(error);
  }
};

export const removeTask = (req: Request, res: Response, next: NextFunction): void => {
  try {
    deleteTask(parseId(req.params.id as string));
    console.log(`\n🗑️ Tarea ${req.params.id} eliminada`);
    res.status(204).send();
  } catch (error: unknown) {
    next(error);
  }
};

