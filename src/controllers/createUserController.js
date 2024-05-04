export default async function createUserController(req, res) {
  try {
    res.status(201).json(req.body)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error." })
  }
}
