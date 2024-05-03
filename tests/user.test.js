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

  it("Shold return name and value on body", async () => {
    const response = await request.get("/users")
    expect(response.body[0]).toHaveProperty("name", "John Doe")
  })
})
