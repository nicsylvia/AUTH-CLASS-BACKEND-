import {Router} from "express";

import { getUsers, login, register } from "../Controllers/user.controls";

const router = Router();

router.route("/registeruser").post(register);
router.route("/").get(getUsers);
router.route("/login").post(login);

export default router