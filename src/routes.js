import express from 'express';
import { createUser, getAllUsers, deleteUser } from './controllers/userController';

const router = express.Router();

router.post('/cadastro', createUser);
router.get('/todos', getAllUsers);
router.delete('/delete', deleteUser);

export default router;
