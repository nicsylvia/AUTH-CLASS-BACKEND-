import {Router} from "express";

import { getUsers, register } from "../Controllers/user.controls";

const router = Router();

router.route("/registeruser").post(register);
router.route("/").get(getUsers);

export default router