import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user', UserControllers.createUser);

router.get('/', UserControllers.getAllUsers);

router.get('/:userId', UserControllers.getsingleUser);

router.delete('/:userId', UserControllers.deletesingleUser);

router.put('/:userId', UserControllers.updateSingleUser);

export const UserRoutes = router;
