
export let tasks = [];

// Obtener todas las tareas
export function getAllTasks() {
  return tasks;
}

// Agregar una nueva tarea
export function addTask(task) {
  tasks.push(task);
}

// Actualizar una tarea por ID
export function updateTask(id, updates) {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  Object.assign(task, updates);
  return task;
}

// Eliminar una tarea por ID
export function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

// Obtener resumen de tareas
export function taskSummary() {
  const total = tasks.length;
  const completadas = tasks.filter(t => t.completed).length;
  const pendientes = tasks.filter(t => !t.completed);
  const promedioPrioridad =
    pendientes.length > 0
      ? pendientes.reduce((sum, t) => sum + t.priority, 0) / pendientes.length
      : 0;

  return {
    total,
    completadas,
    promedioPrioridad: promedioPrioridad.toFixed(2)
  };
}
