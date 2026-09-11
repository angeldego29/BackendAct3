import { tasks } from '../data/tasks.js';
import { AppError } from '../errors/app-error.js';
export const listTasks = () => tasks;
export const findTaskById = (id) => {
    const task = tasks.find((item) => item.id === id);
    if (!task) {
        throw new AppError(`No existe una tarea con el id ${id}.`, 404);
    }
    return task;
};
export const createTask = (title) => {
    if (typeof title !== 'string' || !title.trim()) {
        throw new AppError('El campo title es obligatorio.', 400);
    }
    const task = {
        id: Math.max(0, ...tasks.map((item) => item.id)) + 1,
        title: title.trim(),
        status: 'pending',
        createdAt: new Date()
    };
    tasks.push(task);
    return task;
};
export const completeTask = (id) => {
    const task = findTaskById(id);
    task.status = 'completed';
    return task;
};
export const deleteTask = (id) => {
    const index = tasks.findIndex((item) => item.id === id);
    if (index === -1) {
        throw new AppError(`No existe una tarea con el id ${id}.`, 404);
    }
    tasks.splice(index, 1);
};
// 🔴 Nueva lógica: actualizar título de tarea
export const updateTaskTitle = (id, newTitle) => {
    if (typeof newTitle !== 'string' || !newTitle.trim()) {
        throw new AppError('El campo title es obligatorio.', 400);
    }
    if (!Number.isInteger(id) || id <= 0) {
        throw new AppError('El id debe ser un entero positivo.', 400);
    }
    const task = tasks.find((item) => item.id === id);
    if (!task) {
        throw new AppError(`No existe una tarea con el id ${id}.`, 404);
    }
    task.title = newTitle.trim();
    return task;
};
