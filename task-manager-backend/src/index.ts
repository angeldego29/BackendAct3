import {
  createTask,
  completeTask,
  listTasks,
  findTaskById,
  deleteTask,
  listPendingTasks
} from './services/task.service.js';
import { delay } from './utils/delay.js';
import { getAppName } from './utils/env.js';

declare const process: {
  exitCode?: number;
};

const showTasks = (): void => {
  const rows = listTasks().map((task) => ({
    id: task.id,
    title: task.title,
    status: task.status,
    createdAt: task.createdAt.toLocaleString()
  }));
  console.table(rows);
};

const main = async (): Promise<void> => {
  console.log(`\n${getAppName()}`);
  console.log('Iniciando aplicación...');
  await delay(300);

  console.log('\n📋 Tareas iniciales');
  showTasks();

  try {
    // Paso 1: Registrar una nueva tarea
    const newTask = createTask('Construir mi primer servicio');
    console.log(`✅ Tarea registrada con id ${newTask.id}.`);

    // Paso 2: Consultar todas las tareas
    console.log('\n📋 Todas las tareas registradas:');
    showTasks();

    // Paso 3: Buscar una tarea por ID
    const searchedTask = findTaskById(newTask.id);
    if (searchedTask) {
      console.log(`🔍 Tarea encontrada: ${searchedTask.title} (estado: ${searchedTask.status})`);
    } else {
      console.error(`❌ No se encontró la tarea con id ${newTask.id}.`);
    }

    // Paso 4: Marcar la tarea como completada
    completeTask(newTask.id);
    console.log(`✅ Tarea ${newTask.id} marcada como completada.`);

    console.log('\n📋 Estado final de las tareas:');
    showTasks();

    // Paso 5: Probar eliminación correcta
    const deleted = deleteTask(newTask.id);
    console.log(`🗑️ Tarea ${deleted.id} eliminada correctamente.`);

    // Mostrar tareas después de eliminar
    console.log('\n📋 Tareas después de eliminar:');
    showTasks();

    // Paso 6: Probar eliminación inválida
    try {
      deleteTask(999);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
      console.error(`❌ Error controlado al eliminar: ${message}`);
    }

    // Paso 7: Mostrar solo pendientes
    console.log('\n⏳ Tareas pendientes:');
    console.table(
      listPendingTasks().map((task) => ({
        id: task.id,
        title: task.title,
        status: task.status
      }))
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
    console.error(`⚠️ Error controlado: ${message}`);
  }
};

main().catch((error: unknown) => {
  console.error('💥 Error no controlado:', error);
  process.exitCode = 1;
});
