import express from "express"
import getAllUsersController from "../controllers/getAllUsersController.js"
import createUserController from "../controllers/createUserController.js"

const router = express.Router()

router.get("/users", getAllUsersController)
router.post("/users", createUserController)

export default router
