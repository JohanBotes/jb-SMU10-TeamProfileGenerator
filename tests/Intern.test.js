const Intern = require("../lib/Intern");

test("Test school from constructor", () => {
  const testValue = "SMU";
  const e = new Intern("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.school).toBe(testValue);
});

test("Test getRole() must return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("001", 1, "wynand.botes@udexx.com", "SMU");
  expect(e.getRole()).toBe(testValue);
});

test("Test school via getSchool()", () => {
  const testValue = "SMU";
  const e = new Intern("001", 1, "wynand.botes@udexx.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});