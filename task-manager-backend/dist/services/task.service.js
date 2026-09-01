import { tasks } from '../data/tasks.js';
export const listTasks = () => tasks;
export const findTaskById = (id) => tasks.find((task) => task.id === id);
export const createTask = (title) => {
    const cleanTitle = title.trim();
    if (!cleanTitle) {
        throw new Error('El título de la tarea es obligatorio.');
    }
    const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
    const newTask = {
        id: nextId,
        title: cleanTitle,
        status: 'pending',
        createdAt: new Date()
    };
    tasks.push(newTask);
    return newTask;
};
export const completeTask = (id) => {
    const task = findTaskById(id);
    if (!task) {
        throw new Error(`No existe una tarea con el id ${id}.`);
    }
    task.status = 'completed';
    return task;
};
// 🔴 Eliminar una tarea existente
export const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
        throw new Error(`No existe una tarea con el id ${id}.`);
    }
    const [deleted] = tasks.splice(index, 1);
    return deleted;
};
// 🔴 Listar solo tareas pendientes
export const listPendingTasks = () => tasks.filter((task) => task.status === 'pending');
