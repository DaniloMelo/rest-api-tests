import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home</h1>`)
})

app.get("/users", (req, res) => {
  const user = [
    { name: "John Doe", email: "john@email.com" }
  ]

  res.status(200).json(user)
})


app.post("/users", (req, res) => {
  res.status(201).json(req.body);
})

export default app
