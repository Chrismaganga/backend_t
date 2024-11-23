import express from 'express';
import {getUsers,createUser,updateUser,deleteUser} from '../userQueries';


const router = express.Router();


router.get('/users', getUsers);
router.post('/user_create', createUser);
router.put('/userid/:id', updateUser);
router.delete('/userdel/:id',deleteUser);

export default router;
