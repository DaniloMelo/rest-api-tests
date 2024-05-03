import sum from "../src/sum.js"

describe("Test sum.js", () => {
  it("Shold return 4 when sum 2 + 2", () => {
    expect(sum(2, 2)).toBe(4)
  })

  it("Should return 6 when sum 4 + 2", () => {
    expect(sum(4, 2)).toBe(6)
  })
})