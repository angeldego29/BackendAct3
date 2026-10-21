import { completeTask, createTask, deleteTask, findTaskById, listTasks } from '../services/task.service.js';
export const getTasks = async (_req, res) => {
    res.status(200).json({ data: await listTasks() });
};
export const getTask = async (_req, res) => {
    res.status(200).json({ data: await findTaskById(res.locals.taskId) });
};
export const postTask = async (_req, res) => {
    const task = await createTask(res.locals.taskTitle);
    res.status(201).json({ data: task });
};
export const patchTaskComplete = async (_req, res) => {
    const task = await completeTask(res.locals.taskId);
    res.status(200).json({ data: task });
};
export const removeTask = async (_req, res) => {
    await deleteTask(res.locals.taskId);
    res.status(204).send();
};
