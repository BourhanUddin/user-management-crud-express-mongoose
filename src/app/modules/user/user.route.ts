import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

//will call a controller function
router.post('/create-user', UserControllers.createUser);

router.get('/', UserControllers.getAllUsers);

router.get('/:userId', UserControllers.getsingleUser);

export const UserRoutes = router;
