import {
  tasks,
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
  taskSummary
} from './models/taskModel.js';

export function getTasks(req, res) {
  res.json(getAllTasks());
}

export function createTask(req, res) {
  const { id, title, description, completed, priority } = req.body;

  // Validaciones 
  if (!id || !title || !description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Faltan datos obligatorios o tipo incorrecto' });
  }

  if (priority < 1 || priority > 5) {
    return res.status(400).json({ error: 'La prioridad esta unicamente entre 1 y 5' });
  }

  // ID duplicado
  const idExistente = tasks.find(t => t.id === id);
  if (idExistente) {
    return res.status(409).json({ error: 'El ID es duplicado' });
  }

  const newTask = { id, title, description, completed, priority };
  addTask(newTask);
  res.status(201).json(newTask);
}

export function updateTaskById(req, res) {
  const { id } = req.params;
  const { completed } = req.body;

  const taskActualizada = updateTask(id, { completed });
  if (!taskActualizada) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json(taskActualizada);
}

export function deleteTaskById(req, res) {
  const { id } = req.params;

  const eliminada = deleteTask(id);
  if (!eliminada) {
    return res.status(404).json({ error: 'La tarea no fue encontrada' });
  }

  res.json({ message: 'La tarea fue eliminada' });
}

export function getSummary(req, res) {
  const resumen = taskSummary();
  res.json(resumen);
}
