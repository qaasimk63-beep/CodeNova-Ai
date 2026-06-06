import { Router } from 'express';
import * as aiController from '../controllers/aiController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.post('/generate', requireAuth, aiController.generateCodeHandler);
router.get('/history', requireAuth, aiController.getHistory);
router.delete('/history/:id', requireAuth, aiController.deleteHistoryEntry);
router.delete('/history', requireAuth, aiController.clearHistory);

export default router;
