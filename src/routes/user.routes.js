import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.controller.js';


const router = Router();


router.route("/users-list").get(getAllUsers)
router.route("/user/:id").get(getUserById);
router.route("/create-user").post(createUser);
router.route("/update-user/:id").patch(updateUser);
router.route("/delete-user/:id").delete(deleteUser);



export default router;