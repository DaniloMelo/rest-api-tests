import express from "express"
import rotes from "./routes/routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(rotes)

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Home</h1>`)
})

export default app
