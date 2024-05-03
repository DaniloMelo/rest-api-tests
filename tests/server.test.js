import supertest from "supertest"

const request = supertest("https://www.google.com")

describe("Tests server.js and routes", () => {

  it("Should return 200 HTTP status code when server is running", async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
