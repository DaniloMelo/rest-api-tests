import express from "express"

const router = express.Router()

router.get("/users", (req, res) => {
  const user = [{ name: "John Doe", email: "john@email.com" }]

  res.status(200).json(user)
})

router.post("/users", (req, res) => {
  res.status(201).send(req.body)
})

export default router
