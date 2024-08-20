import express from 'express';
import { msgClient } from '../controllers/msg.js';
import { msgJoiner } from '../controllers/msg.js';

const router  = express.Router();
router.post("/msgClient",msgClient);
router.post("/msgJoiner",msgJoiner);

export default router;