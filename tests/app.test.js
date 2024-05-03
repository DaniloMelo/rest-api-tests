import supertest from "supertest"
import app from "../src/app.js"

// const request = supertest("https://www.google.com")
const request = supertest(app)

describe("Tests app.js and routes", () => {

  it("Should return 200 HTTP status code when server is running", async () => {
    const response = await request.get('/')
    expect(response.statusCode).toBe(200)
  })
})
