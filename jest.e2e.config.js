module.exports = {
  preset: "jest-playwright-preset",
  setupFilesAfterEnv: ["expect-playwright"],
  testMatch: ["**/__e2e__/*.ts?(x)"],
}
