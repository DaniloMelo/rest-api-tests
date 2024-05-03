import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home</h1>`)
})

app.get("/users", (req, res) => {
  const user = [
    { name: "John Doe", email: "john@email.com" }
  ]

  res.status(200).json(user)
})

export default app
