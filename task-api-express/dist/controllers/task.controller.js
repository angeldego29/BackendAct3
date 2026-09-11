import { completeTask, createTask, deleteTask, findTaskById, listTasks, updateTaskTitle } from '../services/task.service.js';
export const getTasks = (_req, res) => {
    res.status(200).json({ data: listTasks() });
};
export const getTask = (req, res, next) => {
    try {
        res.status(200).json({ data: findTaskById(Number(req.params.id)) });
    }
    catch (error) {
        next(error);
    }
};
export const postTask = (req, res, next) => {
    try {
        const task = createTask(req.body.title);
        res.status(201).json({ data: task });
    }
    catch (error) {
        next(error);
    }
};
export const patchTaskComplete = (req, res, next) => {
    try {
        const task = completeTask(Number(req.params.id));
        res.status(200).json({ data: task });
    }
    catch (error) {
        next(error);
    }
};
export const patchTaskTitle = (req, res, next) => {
    try {
        const task = updateTaskTitle(Number(req.params.id), req.body.title);
        res.status(200).json({ data: task });
    }
    catch (error) {
        next(error);
    }
};
export const removeTask = (req, res, next) => {
    try {
        deleteTask(Number(req.params.id));
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
