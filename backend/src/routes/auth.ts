import { Router } from 'express';
import * as authController from '../controllers/authController';
import { requireAuth } from '../middleware/authMiddleware';

const router = Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/forgot-password', authController.forgotPassword);
router.post('/logout', authController.logout);
router.get('/me', requireAuth, authController.getCurrentUser);
router.patch('/profile', requireAuth, authController.updateProfile);

export default router;
