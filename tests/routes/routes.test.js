import supertest from "supertest"
import app from "../../src/app.js"

const request = supertest(app)

describe("Test routes module", () => {
  it("Should return 200 HTTP Status Code when GET on /users", async () => {
    const response = await request.get("/users")
    expect(response.status).toBe(200)
  })

  it("Should return response body length 1 when GET on /users", async () => {
    const response = await request.get("/users")
    expect(response.body).toHaveLength(1)
  })

  it("Should return property name and his value when GET on /users", async () => {
    const response = await request.get("/users")
    expect(response.body[0]).toHaveProperty("name", "John Doe")
  })

  it("Should return 201 HTTP Status Code when POST on /users", async () => {
    const response = await request.post("/users").send({ name: "Jane Doe", email: "jane@email.com" })
    expect(response.status).toBe(201)
  })

  it("Shold return name property and his value when POST on /users", async () => {
    const response = await request.post("/users").send({ name: "Jane Doe", email: "jane@email.com" })
    console.log(response.body)
    expect(response.body).toHaveProperty("name", "Jane Doe")
  })
})
