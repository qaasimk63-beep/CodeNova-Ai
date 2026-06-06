import { Router } from 'express';
import * as projectController from '../controllers/projectController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.post('/', requireAuth, projectController.createProject);
router.get('/', requireAuth, projectController.getProjects);
router.get('/:id', requireAuth, projectController.getProjectById);
router.patch('/:id', requireAuth, projectController.updateProject);
router.delete('/:id', requireAuth, projectController.deleteProject);
router.post('/:id/like', requireAuth, projectController.likeProject);

export default router;
