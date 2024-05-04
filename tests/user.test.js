import supertest from "supertest"
import app from "../src/app.js"

const request = supertest(app)

describe("Test /users route and responses", () => {
  it("Should return 200 HTTP Status Code on /users", async () => {
    const response = await request.get("/users")
    expect(response.status).toBe(200)
  })

  it("Should return response body length 1", async () => {
    const response = await request.get("/users")
    expect(response.body).toHaveLength(1)
  })

  it("Should return name and value on body", async () => {
    const response = await request.get("/users")
    expect(response.body[0]).toHaveProperty("name", "John Doe")
  })

  it("Should create a new user and return 201 HTTP Status Code", async () => {
    const response = await request.post("/users").send({ name: "Jane Doe", email: "jane@email.com" })
    expect(response.status).toBe(201)
  })

  it("Shold return name property when create a new user on /users", async () => {
    const response = await request.post("/users").send({ name: "Jane Doe", email: "jane@email.com" })
    console.log(response.body)
    expect(response.body).toHaveProperty("name", "Jane Doe")
  })
})
