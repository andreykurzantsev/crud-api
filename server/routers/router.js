"use strict";

import Router from "express";
import renderProject from "../services/renderProject.js";
import userController from "../controllers/userController.js";

const router = new Router();

//Client routs
router.get('/', renderProject.renderMainPage);
router.get("/addUser", renderProject.renderUserAddPage);
router.get("/updateUser", renderProject.renderUserUpdatePage);

//API routs
router.post("/api/users", userController.createUser);
router.get("/api/users", userController.giveAllUsers);
router.get("/api/users/:id", userController.giveOneUser);
router.put("/api/users/:id", userController.updateInfoAboutUser);
router.delete("/api/users/:id", userController.deleteUser);

export default router;