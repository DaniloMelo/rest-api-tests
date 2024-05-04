export default async function getAllUsersController(req, res) {
  try {
    const data = [{ name: "John Doe", email: "john@email.com" }]
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error." })
  }
}
