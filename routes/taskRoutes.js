import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTaskById,
  deleteTaskById,
  getSummary
} from './controllers/taskController.js';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);
router.get('/summary', getSummary);

export default router;
